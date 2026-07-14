/* =========================================================================
   Wyoming Livestock Board — Portal Sitemap & Questions Review
   SPA router + views. Vanilla JS, depends on data.js.
   Each tab shows an Overview and (optionally) client Questions.
   ========================================================================= */

const APP = document.getElementById('app');

/* ---------- helpers ---------- */
function slugify(s) {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}
function logoMarkup() {
  return (
    '<div class="wlsb-logo">' +
      '<div class="logo-words">' +
        '<span class="logo-script">Wyoming</span>' +
        '<span class="logo-sub">LIVESTOCK BOARD</span>' +
      '</div>' +
      '<svg class="brand-emblem" width="44" height="40" viewBox="0 0 64 56" fill="none" ' +
        'stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M5 13 L14 42 L23 21 L32 42 L41 13"/>' +
        '<path d="M40 15 L49 31 L58 15"/>' +
        '<path d="M49 31 L49 44"/>' +
        '<path d="M49 44 q-9 8 -17 1"/>' +
      '</svg>' +
    '</div>'
  );
}

/* =========================================================================
   ROUTER
   ========================================================================= */
let mountedPortal = null;

function parseHash() {
  const h = location.hash.replace(/^#\/?/, '');
  if (!h) return { portalId: null, slug: null };
  const parts = h.split('/');
  return { portalId: parts[0] || null, slug: parts[1] || null };
}

function route() {
  const { portalId, slug } = parseHash();

  if (!portalId) {
    renderSelection();
    mountedPortal = null;
    return;
  }
  const portal = PORTAL_INDEX[portalId];
  if (!portal) {
    location.hash = '';
    return;
  }
  const items = allItems(portal);
  let item = firstItem(portal);
  if (slug) {
    const found = items.find(function (it) { return slugify(it) === slug; });
    if (found) item = found;
  }

  if (mountedPortal !== portalId) {
    renderShell(portal, item);
    mountedPortal = portalId;
  } else {
    updateActive(portal, item);
  }
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);

/* =========================================================================
   VIEW: PORTAL SELECTION
   ========================================================================= */
function renderSelection() {
  let html = '<div class="landing">';
  html += '<header class="top-header">' + logoMarkup() + '</header>';
  html += '<main class="landing-body">';

  PORTAL_GROUPS.forEach(function (group) {
    html += '<section class="section">';
    html += '<h2 class="section-title">' + esc(group.label) + '</h2>';
    html += '<div class="card-grid">';
    group.portals.forEach(function (p) {
      html +=
        '<article class="portal-card">' +
          '<div class="p-icon">' + iconSvg(p.icon, 24) + '</div>' +
          '<h3>' + esc(p.name) + '</h3>' +
          '<p>' + esc(p.desc) + '</p>' +
          '<div class="p-meta">' +
            '<a class="btn-enter" href="#/' + p.id + '">Enter Portal ' + iconSvg('chevron-right', 16) + '</a>' +
          '</div>' +
        '</article>';
    });
    html += '</div></section>';
  });

  html += '<footer class="landing-foot">Wyoming Livestock Board · Portal Sitemap &amp; Review</footer>';
  html += '</main></div>';

  APP.innerHTML = html;
  window.scrollTo(0, 0);
}

/* =========================================================================
   VIEW: PORTAL SHELL (sidebar + topbar + content)
   ========================================================================= */
function renderShell(portal, activeItem) {
  const subtitle = portal.name.replace(/ Portal$/, '');

  let nav = '';
  portal.groups.forEach(function (grp) {
    if (grp.header) nav += '<div class="nav-group-label">' + esc(grp.header) + '</div>';
    grp.items.forEach(function (it) {
      const active = it === activeItem ? ' active' : '';
      nav +=
        '<button class="nav-item' + active + '" data-slug="' + slugify(it) + '">' +
          iconSvg(iconForItem(it), 19) + '<span>' + esc(it) + '</span>' +
        '</button>';
    });
  });

  const shell =
    '<div class="app-shell" id="shell">' +
      '<aside class="sidebar">' +
        '<a class="back-link" href="#/">' + iconSvg('arrow-left', 18) + '<span>Back to Portal Selection</span></a>' +
        '<div class="side-user">' +
          '<div class="side-avatar">' + portal.id + '</div>' +
          '<div>' +
            '<div class="su-name">' + esc(subtitle) + '</div>' +
            '<div class="su-sub">' + esc(portal.role) + ' Portal</div>' +
          '</div>' +
        '</div>' +
        '<nav class="side-nav" id="side-nav">' + nav + '</nav>' +
      '</aside>' +
      '<div class="scrim" id="scrim"></div>' +
      '<div class="main">' +
        '<header class="topbar">' +
          '<button class="hamburger" id="hamburger" aria-label="Menu">' + iconSvg('menu', 20) + '</button>' +
          '<div>' +
            '<h1 id="page-title">' + esc(activeItem) + '</h1>' +
            '<div class="crumb" id="page-crumb">' + esc(portal.name) + '</div>' +
          '</div>' +
          '<div class="spacer"></div>' +
          '<span class="demo-pill">Sitemap Preview</span>' +
        '</header>' +
        '<div class="content" id="content"><div class="content-inner" id="content-inner"></div></div>' +
      '</div>' +
    '</div>';

  APP.innerHTML = shell;

  const shellEl = document.getElementById('shell');
  document.getElementById('side-nav').addEventListener('click', function (e) {
    const btn = e.target.closest('.nav-item');
    if (!btn) return;
    location.hash = '#/' + portal.id + '/' + btn.dataset.slug;
    shellEl.classList.remove('nav-open');
  });
  document.getElementById('hamburger').addEventListener('click', function () {
    shellEl.classList.toggle('nav-open');
  });
  document.getElementById('scrim').addEventListener('click', function () {
    shellEl.classList.remove('nav-open');
  });

  renderContent(portal, activeItem);
}

function updateActive(portal, activeItem) {
  document.getElementById('page-title').textContent = activeItem;
  document.getElementById('page-crumb').textContent = portal.name;
  const nav = document.getElementById('side-nav');
  nav.querySelectorAll('.nav-item').forEach(function (b) {
    b.classList.toggle('active', b.dataset.slug === slugify(activeItem));
  });
  document.getElementById('content').scrollTop = 0;
  renderContent(portal, activeItem);
}

/* =========================================================================
   CONTENT: Overview + Questions for the active tab
   ========================================================================= */
function renderContent(portal, item) {
  document.getElementById('content-inner').innerHTML = tabContentMarkup(portal, item);
}

function tabContentMarkup(portal, item) {
  const c = contentFor(portal.id, item) || { overview: '', questions: [] };
  const qs = c.questions || [];
  const multi = qs.length > 1;

  let html =
    '<div class="review">' +
      '<section class="panel overview">' +
        '<div class="panel-head"><span class="ov-ic">' + iconSvg('info', 17) + '</span><h3>Overview</h3></div>' +
        '<div class="panel-body prose"><p>' + esc(c.overview) + '</p></div>' +
      '</section>';

  if (qs.length) {
    let cards = '';
    qs.forEach(function (q, i) {
      cards +=
        '<article class="q-card">' +
          '<div class="q-ic">' + iconSvg('help-circle', 20) + '</div>' +
          '<div class="q-body">' +
            '<div class="q-label">' + (multi ? 'Question ' + (i + 1) : 'Question') + '</div>' +
            '<p class="q-text">' + esc(q) + '</p>' +
          '</div>' +
        '</article>';
    });
    html +=
      '<div class="q-heading">' + iconSvg('help-circle', 18) + '<span>Question' + (multi ? 's' : '') + '</span></div>' +
      '<div class="q-list">' + cards + '</div>';
  }

  html += '</div>';
  return html;
}
