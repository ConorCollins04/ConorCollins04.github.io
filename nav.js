(function () {
  function initFlyout(groupId, triggerId, flyoutId) {
    var g = document.getElementById(groupId);
    var t = document.getElementById(triggerId);
    var f = document.getElementById(flyoutId);
    if (!g || !t || !f) return;
    if (f.querySelector('.active')) { f.classList.add('open'); t.classList.add('active'); }
    t.addEventListener('click', function (e) { e.stopPropagation(); f.classList.toggle('open'); });
    document.addEventListener('click', function (e) { if (!g.contains(e.target)) f.classList.remove('open'); });
  }
  initFlyout('survivor-group', 'survivor-trigger', 'survivor-flyout');
  initFlyout('drag-group', 'drag-trigger', 'drag-flyout');
})();
