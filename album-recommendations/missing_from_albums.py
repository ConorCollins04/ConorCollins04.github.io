import os
import re

SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
CACHE_FILE   = os.path.join(SCRIPT_DIR, "lastfm-cache.js")
ALBUMS_FILE  = os.path.join(SCRIPT_DIR, "albums.js")


def normalize(s):
    return s.lower().replace('\u2018', "'").replace('\u2019', "'")


def load_cache():
    with open(CACHE_FILE) as f:
        src = f.read()
    entries = {}
    for m in re.finditer(r'"([^"]+)"\s*:\s*\[(\d+),(\d+)\]', src):
        key, count = m.group(1), int(m.group(3))
        entries[key] = count
    return entries


def load_albums():
    with open(ALBUMS_FILE) as f:
        src = f.read()
    pairs = set()
    for obj in re.finditer(r'\{[^}]+\}', src, re.DOTALL):
        text = obj.group()
        a = re.search(r'artist:\s*"([^"]+)"', text)
        b = re.search(r'album:\s*"([^"]+)"', text)
        if a and b:
            pairs.add(normalize(a.group(1)) + "|||" + normalize(b.group(1)))
    return pairs


def main():
    cache   = load_cache()
    albums  = load_albums()
    def cache_key_to_album_key(k):
        if k.startswith("|||"):
            return "various artists" + k
        return k

    missing = {k: v for k, v in cache.items() if cache_key_to_album_key(k) not in albums}

    # Sort by count descending, then key alphabetically
    for key, count in sorted(missing.items(), key=lambda x: (-x[1], x[0])):
        artist, album = key.split("|||", 1)
        print(f"{count:3d}  {artist} — {album}")


if __name__ == "__main__":
    main()
