(function () {
  var NAV = [
    { label: 'Home',      href: '/index.html' },
    { label: 'Concerts',  href: '/concerts/' },
{ label: 'Oscars',    href: '/oscars/' },
    {
      label: 'Survivor',
      id: 'survivor',
      children: [
        { label: 'All-Stars Casting', href: '/survivor/all-stars.html' },
        { label: 'Moments',           href: '/survivor/moments.html' },
        { label: 'Players',           href: '/survivor/players.html' },
      ]
    },
    {
      label: 'Drag',
      id: 'drag',
      children: [
        { label: 'Drag Race',  href: '/drag-race/' },
        { label: 'Live Shows', href: '/drag-shows/' },
      ]
    },
    {
      label: 'Albums',
      id: 'albums',
      children: [
        { label: 'Calbumdar',        href: '/advent-calbumdar/' },
        { label: 'Recommendations',  href: '/album-recommendations/' },
      ]
    },
  ];

  var path = window.location.pathname;

  function isActive(href) {
    if (href === '/index.html') return path === '/' || path === '/index.html';
    return path === href || path.startsWith(href);
  }

  function buildNav() {
    var items = NAV.map(function (item) {
      if (item.children) {
        var groupActive = item.children.some(function (c) { return isActive(c.href); });
        var subs = item.children.map(function (c) {
          return '<a href="' + c.href + '" class="nav-sub-btn' + (isActive(c.href) ? ' active' : '') + '">' + c.label + '</a>';
        }).join('\n        ');
        return (
          '<div class="nav-group" id="' + item.id + '-group">\n' +
          '      <button class="nav-btn' + (groupActive ? ' active' : '') + '" id="' + item.id + '-trigger">' + item.label + '</button>\n' +
          '      <div class="nav-flyout" id="' + item.id + '-flyout">\n' +
          '        ' + subs + '\n' +
          '      </div>\n' +
          '    </div>'
        );
      }
      return '<a href="' + item.href + '" class="nav-btn' + (isActive(item.href) ? ' active' : '') + '">' + item.label + '</a>';
    });

    return '<nav class="nav-pill">\n    ' + items.join('\n    ') + '\n  </nav>';
  }

  var wrap = document.querySelector('.nav-wrap');
  if (wrap) wrap.innerHTML = buildNav();

  function initFlyout(groupId, triggerId, flyoutId) {
    var g = document.getElementById(groupId);
    var t = document.getElementById(triggerId);
    var f = document.getElementById(flyoutId);
    if (!g || !t || !f) return;
    t.addEventListener('click', function (e) { e.stopPropagation(); f.classList.toggle('open'); });
    document.addEventListener('click', function (e) { if (!g.contains(e.target)) f.classList.remove('open'); });
  }

  NAV.forEach(function (item) {
    if (item.children) initFlyout(item.id + '-group', item.id + '-trigger', item.id + '-flyout');
  });
})();
