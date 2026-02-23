import { Link, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NAV_ITEMS = [
  {
    label: 'Dashboard',
    path: '/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: 'Log',
    path: '/log',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    path: '/projects',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20V8l7-5 7 5v12" />
        <path d="M9 20v-5h6v5" />
      </svg>
    ),
  },
  {
    label: 'Skills',
    path: '/skills',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

export default function Layout() {
  const { user, signIn } = useAuth()
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-dvh" style={{ background: 'var(--color-bg)' }}>
      {/* Top Bar */}
      <header
        className="flex items-center justify-between px-4 h-14 shrink-0"
        style={{
          background: 'var(--color-surface-elevated)',
          borderBottom: '1px solid var(--color-border-light)',
        }}
      >
        <h1
          className="text-lg font-bold tracking-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Workshop
        </h1>
        {user ? (
          <img
            src={user.user_metadata?.avatar_url || user.user_metadata?.picture}
            alt=""
            className="w-8 h-8 rounded-full object-cover"
            style={{ border: '2px solid var(--color-border)' }}
          />
        ) : (
          <button
            onClick={signIn}
            className="btn-ghost text-sm font-semibold"
            style={{ color: 'var(--color-primary)' }}
          >
            Sign in
          </button>
        )}
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <nav
          className="hidden md:flex flex-col w-56 shrink-0 py-3 gap-1"
          style={{
            background: 'var(--color-surface-elevated)',
            borderRight: '1px solid var(--color-border-light)',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  background: active ? 'var(--color-surface)' : 'transparent',
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Main Content */}
        <main
          className="flex-1 overflow-y-auto pb-[76px] md:pb-0"
          style={{ background: 'var(--color-bg)' }}
        >
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-around"
        style={{
          height: 60,
          background: 'var(--color-surface-elevated)',
          borderTop: '1px solid var(--color-border-light)',
          zIndex: 50,
        }}
      >
        {NAV_ITEMS.map((item) => {
          const active = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-0.5 py-1 px-2"
              style={{
                color: active ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
                fontSize: '0.625rem',
                fontWeight: active ? 600 : 500,
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
