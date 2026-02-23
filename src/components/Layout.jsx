import { Link, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NAV_ITEMS = [
  {
    label: 'Library',
    path: '/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    label: 'Log',
    path: '/log',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    label: 'Work',
    path: '/portfolio',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    path: '/projects',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    label: 'Progress',
    path: '/skills',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
]

export default function Layout() {
  const { user, signIn } = useAuth()
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' || location.pathname.startsWith('/joint/') || location.pathname.startsWith('/wood/') || location.pathname.startsWith('/technique/') || location.pathname.startsWith('/plan') || location.pathname.startsWith('/layout') || location.pathname.startsWith('/resources')
    return location.pathname.startsWith(path)
  }

  return (
    <div className="flex flex-col min-h-dvh" style={{ background: 'var(--color-bg)' }}>
      {/* Top Bar */}
      <header
        className="flex items-center justify-between px-5 shrink-0"
        style={{
          height: 56,
          background: 'var(--color-surface-elevated)',
          borderBottom: '1px solid var(--color-border-light)',
        }}
      >
        <Link to="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <span
            className="font-display"
            style={{
              fontSize: '1.5rem',
              color: 'var(--color-text-primary)',
              lineHeight: 1,
              letterSpacing: '-0.01em',
            }}
          >
            Workshop
          </span>
        </Link>

        {user ? (
          <div className="flex items-center gap-3">
            <Link
              to="/checklist"
              className="flex items-center justify-center"
              style={{
                width: 34,
                height: 34,
                borderRadius: 'var(--radius-sm)',
                color: location.pathname === '/checklist' ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
                background: location.pathname === '/checklist' ? 'var(--color-accent-soft)' : 'transparent',
                transition: 'all 0.15s',
              }}
              aria-label="Checklist"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </Link>
            <img
              src={user.user_metadata?.avatar_url || user.user_metadata?.picture}
              alt=""
              className="rounded-full object-cover"
              style={{
                width: 32,
                height: 32,
                border: '2px solid var(--color-border)',
              }}
            />
          </div>
        ) : (
          <button
            onClick={signIn}
            className="btn-ghost"
            style={{ color: 'var(--color-primary)', fontWeight: 600 }}
          >
            Sign in
          </button>
        )}
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <nav
          className="hidden md:flex flex-col w-52 shrink-0 pt-4 gap-0.5"
          style={{
            background: 'var(--color-surface-elevated)',
            borderRight: '1px solid var(--color-border-light)',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-4 py-2.5 mx-2 text-sm font-medium transition-colors"
                style={{
                  color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  background: active ? 'var(--color-accent-soft)' : 'transparent',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            )
          })}

          <div style={{ flex: 1 }} />

          {/* Quick Log button — desktop sidebar */}
          <Link
            to="/log-entry"
            className="flex items-center gap-3 px-4 py-2.5 mx-2 mb-2 text-sm font-semibold transition-colors"
            style={{
              color: 'var(--color-text-on-primary)',
              background: 'var(--color-primary)',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Log a Joint
          </Link>

          <Link
            to="/checklist"
            className="flex items-center gap-3 px-4 py-2.5 mx-2 mb-3 text-sm font-medium transition-colors"
            style={{
              color: location.pathname === '/checklist' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
              background: location.pathname === '/checklist' ? 'var(--color-accent-soft)' : 'transparent',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            Checklist
          </Link>
        </nav>

        {/* Main Content */}
        <main
          className="flex-1 overflow-y-auto"
          style={{
            background: 'var(--color-bg)',
            paddingBottom: 'calc(68px + env(safe-area-inset-bottom, 0px))',
          }}
        >
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 flex items-stretch justify-around"
        style={{
          background: 'var(--color-surface-elevated)',
          borderTop: '1px solid var(--color-border-light)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          zIndex: 50,
        }}
      >
        {NAV_ITEMS.map((item, i) => {
          const active = isActive(item.path)

          // Insert the FAB after the second item (center position)
          if (i === 2) {
            return [
              // The FAB
              <Link
                key="log-fab"
                to="/log-entry"
                className="flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  color: 'var(--color-text-on-primary)',
                  marginTop: -12,
                  boxShadow: 'var(--shadow-elevated)',
                  textDecoration: 'none',
                }}
                aria-label="Log a Joint"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </Link>,
              // Then the nav item
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center justify-center gap-0.5 py-2 px-1"
                style={{
                  color: active ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
                  fontSize: '0.625rem',
                  fontWeight: active ? 600 : 400,
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  minWidth: 48,
                  position: 'relative',
                }}
              >
                {active && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 24,
                      height: 2,
                      background: 'var(--color-primary)',
                      borderRadius: 1,
                    }}
                  />
                )}
                {item.icon}
                {item.label}
              </Link>,
            ]
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center gap-0.5 py-2 px-1"
              style={{
                color: active ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
                fontSize: '0.625rem',
                fontWeight: active ? 600 : 400,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                minWidth: 48,
                position: 'relative',
              }}
            >
              {active && (
                <span
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 24,
                    height: 2,
                    background: 'var(--color-primary)',
                    borderRadius: 1,
                  }}
                />
              )}
              {item.icon}
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
