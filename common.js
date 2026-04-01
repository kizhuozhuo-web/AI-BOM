/**
 * AIBOM Platform V1.8 - Common Navigation & Utilities
 */

const NAV_DATA = [
  {
    section: '概览',
    items: [
      { id: 'dashboard', label: '工作台', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>', href: 'home.html' }
    ]
  },
  {
    section: '探针管理',
    items: [
      { id: 'probe', label: '探针管理', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7" stroke-dasharray="3 2"/><circle cx="12" cy="12" r="11"/></svg>', href: 'probe-manage.html' }
    ]
  },
  {
    section: '资产管理',
    items: [
      { id: 'bom', label: 'BOM 管理', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>', href: 'bom-manage.html' },
      { id: 'graph', label: '资产图谱', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/><line x1="5" y1="19" x2="19" y2="19"/></svg>', href: 'bom-graph.html' }
    ]
  },
  {
    section: '风险管理',
    items: [
      { id: 'vuln', label: '漏洞管理', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', href: 'vulnerability-manage.html', badge: 23 }
    ]
  },
  {
    section: '系统',
    items: [
      { id: 'setting', label: '系统配置', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>', href: 'system-setting.html' }
    ]
  }
];

// ── Dark mode ──
// Single source of truth: localStorage key 'aibom_dark'
// Only '1' means dark. Anything else (null, '0', missing) = light.
function _isDarkStored() {
  return localStorage.getItem('aibom_dark') === '1';
}

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark);
  // Store '1' for dark, remove key entirely for light (clean default)
  if (dark) {
    localStorage.setItem('aibom_dark', '1');
  } else {
    localStorage.removeItem('aibom_dark');
  }
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.innerHTML = dark
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
    btn.title = dark ? '切换浅色模式' : '切换深色模式';
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(!isDark);
}

// ── Sidebar collapse ──
function applySidebarState(collapsed) {
  const sidebar = document.getElementById('sidebar');
  const main = document.querySelector('.main');
  if (!sidebar) return;
  if (collapsed) {
    sidebar.classList.add('sidebar-collapsed');
    if (main) main.classList.add('main-collapsed');
  } else {
    sidebar.classList.remove('sidebar-collapsed');
    if (main) main.classList.remove('main-collapsed');
  }
  localStorage.setItem('aibom_sidebar', collapsed ? '1' : '0');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  const collapsed = sidebar.classList.contains('sidebar-collapsed');
  applySidebarState(!collapsed);
}

function renderSidebar(activeId) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  let html = `
    <div class="sidebar-logo">
      <div class="logo-icon">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      </div>
      <div class="logo-text-group">
        <div class="logo-name">AI-BOM</div>
        <div class="logo-sub">安全资产管理平台</div>
      </div>
      <span class="logo-ver">V1.0</span>
    </div>
    <button class="sidebar-toggle-btn" onclick="toggleSidebar()" title="收起/展开菜单">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="toggle-icon-open"><polyline points="15 18 9 12 15 6"/></svg>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="toggle-icon-closed"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
    <nav class="sidebar-nav">`;

  NAV_DATA.forEach(section => {
    html += `<div class="nav-group-label nav-label-text">${section.section}</div>`;
    section.items.forEach(item => {
      const isActive = item.id === activeId;
      html += `
        <a class="nav-item ${isActive ? 'active' : ''}" href="${item.href}" title="${item.label}">
          <span class="nav-icon">${item.icon}</span>
          <span class="nav-item-label nav-label-text">${item.label}</span>
          ${item.badge ? `<span class="nav-badge nav-label-text">${item.badge}</span>` : ''}
        </a>`;
    });
  });

  html += `</nav>
    <div class="sidebar-user">
      <div class="sidebar-user-card">
        <div class="sidebar-user-avatar">AD</div>
        <div class="sidebar-user-info nav-label-text">
          <div class="sidebar-user-name">Admin</div>
          <div class="sidebar-user-email">admin@aibom.local</div>
        </div>
        <svg class="nav-label-text" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#86909C" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>
    </div>`;

  sidebar.innerHTML = html;

  // Restore collapse state
  const collapsed = localStorage.getItem('aibom_sidebar') === '1';
  applySidebarState(collapsed);
}

function doLogout() {
  sessionStorage.removeItem('aibom_auth');
  sessionStorage.removeItem('aibom_user');
  window.location.replace('index.html');
}

function toggleAvatarMenu() {
  const menu = document.getElementById('avatarMenu');
  if (!menu) return;
  const isOpen = menu.style.display === 'block';
  menu.style.display = isOpen ? 'none' : 'block';
  if (!isOpen) {
    // Close when clicking outside
    setTimeout(() => {
      document.addEventListener('click', function closeMenu(e) {
        if (!document.getElementById('avatarMenuWrap').contains(e.target)) {
          menu.style.display = 'none';
          document.removeEventListener('click', closeMenu);
        }
      });
    }, 0);
  }
}

function renderHeader(breadcrumbs) {
  const header = document.getElementById('header');
  if (!header) return;

  let bc = breadcrumbs.map((b, i) => {
    if (i === breadcrumbs.length - 1) return `<span class="current">${b.label}</span>`;
    return `<a href="${b.href || '#'}">${b.label}</a><span class="sep">/</span>`;
  }).join('');

  const isDark = document.documentElement.classList.contains('dark');
  const moonIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
  const sunIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  const user = sessionStorage.getItem('aibom_user') || 'Admin';
  const initials = user.substring(0,2).toUpperCase();

  header.innerHTML = `
    <div class="header-breadcrumb">${bc}</div>
    <div class="header-actions">
      <button class="header-icon-btn" id="themeToggleBtn" onclick="toggleTheme()" title="${isDark ? '切换浅色模式' : '切换深色模式'}">
        ${isDark ? sunIcon : moonIcon}
      </button>
      <button class="header-icon-btn" title="通知">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
        <span class="dot"></span>
      </button>
      <div id="avatarMenuWrap" style="position:relative;">
        <div class="header-avatar" onclick="toggleAvatarMenu()" title="账户菜单" style="cursor:pointer;">${initials}</div>
        <div id="avatarMenu" style="display:none;position:absolute;top:calc(100% + 8px);right:0;min-width:160px;background:var(--bg-surface);border:1px solid var(--border-color);border-radius:var(--radius-lg);box-shadow:var(--shadow-lg);z-index:999;overflow:hidden;">
          <div style="padding:10px 14px 8px;border-bottom:1px solid var(--border-color);">
            <div style="font-size:13px;font-weight:600;color:var(--text-primary);">${user}</div>
            <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">${user.toLowerCase()}@aibom.local</div>
          </div>
          <div style="padding:4px 0;">
            <button onclick="doLogout()" style="width:100%;padding:8px 14px;display:flex;align-items:center;gap:8px;background:none;border:none;cursor:pointer;font-size:13px;color:var(--danger);font-family:var(--font-sans);text-align:left;transition:background .15s;" onmouseover="this.style.background='var(--danger-light)'" onmouseout="this.style.background='none'">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              退出登录
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabBar => {
    const tabs = tabBar.querySelectorAll('.tab-item');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const parent = tabBar.parentElement;
        parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        const el = parent.querySelector(`#${target}`);
        if (el) el.classList.add('active');
      });
    });
  });
}

function initCollapse() {
  document.querySelectorAll('.collapse-header').forEach(h => {
    h.addEventListener('click', () => {
      h.classList.toggle('open');
      const body = h.nextElementSibling;
      if (body) body.classList.toggle('open');
    });
  });
}

function initPage(activeNavId, breadcrumbs) {
  if (sessionStorage.getItem('aibom_auth') !== 'authenticated') {
    window.location.replace('index.html');
    return;
  }
  // Default is LIGHT. Only switch to dark if user explicitly saved '1'.
  if (_isDarkStored()) document.documentElement.classList.add('dark');

  renderSidebar(activeNavId);
  renderHeader(breadcrumbs);
  initTabs();
  initCollapse();
}
