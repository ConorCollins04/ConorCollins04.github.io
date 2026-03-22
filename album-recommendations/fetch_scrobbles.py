import json
import time
import urllib.request
import urllib.parse
import os
import sys
from datetime import datetime, timezone

API_KEY = os.environ.get("LASTFM_API_KEY")
if not API_KEY:
    print("Error: LASTFM_API_KEY environment variable not set.")
    sys.exit(1)

USER = "Dobwok"

SCRIPT_DIR     = os.path.dirname(os.path.abspath(__file__))
SCROBBLES_FILE = os.path.join(SCRIPT_DIR, "scrobbles.json")
BASE_URL       = "https://ws.audioscrobbler.com/2.0/"


def fetch_page(page, from_ts=None):
    params = {
        "method":  "user.getRecentTracks",
        "user":    USER,
        "api_key": API_KEY,
        "format":  "json",
        "limit":   200,
        "page":    page,
    }
    if from_ts:
        params["from"] = from_ts + 1  # +1 to exclude the last already-stored scrobble
    url = BASE_URL + "?" + urllib.parse.urlencode(params)
    with urllib.request.urlopen(url) as r:
        return json.loads(r.read().decode())


def parse_track(track):
    # Skip currently-playing track (has no date)
    if "@attr" in track and track["@attr"].get("nowplaying"):
        return None
    ts = int(track.get("date", {}).get("uts", 0))
    if ts == 0:
        return None
    return {
        "ts":     ts,
        "artist": track.get("artist", {}).get("#text", "").strip(),
        "album":  track.get("album",  {}).get("#text", "").strip(),
        "track":  track.get("name",   "").strip(),
    }


def main():
    full = "--full" in sys.argv

    # Load existing data
    existing = {"lastTimestamp": 0, "scrobbles": []}
    if os.path.exists(SCROBBLES_FILE):
        with open(SCROBBLES_FILE) as f:
            existing = json.load(f)

    from_ts = None if full else (existing.get("lastTimestamp") or None)

    if full:
        existing["scrobbles"] = []
        print("Starting full historical fetch — this may take a few minutes...")
    else:
        if from_ts:
            dt = datetime.fromtimestamp(from_ts, tz=timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
            print(f"Fetching scrobbles since {dt}...")
        else:
            print("No existing data found — run with --full for a historical fetch.")
            return

    # First page to get totals
    data = fetch_page(1, from_ts)
    attr        = data["recenttracks"]["@attr"]
    total_pages = int(attr["totalPages"])
    total       = int(attr["total"])
    print(f"{total} scrobbles across {total_pages} pages")

    new_scrobbles = []

    for track in data["recenttracks"]["track"]:
        parsed = parse_track(track)
        if parsed:
            new_scrobbles.append(parsed)

    for page in range(2, total_pages + 1):
        print(f"  Page {page}/{total_pages}...", end="\r")
        time.sleep(0.5)   # Be polite to the API
        data = fetch_page(page, from_ts)
        for track in data["recenttracks"]["track"]:
            parsed = parse_track(track)
            if parsed:
                new_scrobbles.append(parsed)

    print(f"\nFetched {len(new_scrobbles)} new scrobbles")

    # Merge and sort descending by timestamp
    all_scrobbles = new_scrobbles + ([] if full else existing["scrobbles"])
    all_scrobbles.sort(key=lambda x: x["ts"], reverse=True)

    last_ts = all_scrobbles[0]["ts"] if all_scrobbles else 0

    output = {
        "lastFetched":   datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "lastTimestamp": last_ts,
        "scrobbles":     all_scrobbles,
    }

    with open(SCROBBLES_FILE, "w") as f:
        json.dump(output, f, separators=(",", ":"))

    print(f"Saved {len(all_scrobbles)} total scrobbles to scrobbles.json")

    # Auto-run cache builder
    print("\nBuilding lastfm-cache.js...")
    import build_cache
    build_cache.build()


if __name__ == "__main__":
    main()
