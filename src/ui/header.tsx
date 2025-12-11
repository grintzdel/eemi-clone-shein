export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight">SHEIN</h1>
        </div>

        <div className="mx-4 max-w-xl flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher des articles..."
              className="w-full rounded-full bg-gray-100 px-4 py-2 pr-10 text-sm focus:bg-gray-200 focus:outline-none"
            />
            <svg
              className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 transform text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="relative">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          <button className="relative">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              0
            </span>
          </button>

          <button>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav className="border-t border-gray-200">
        <div className="flex items-center justify-center space-x-8 px-4 py-2 text-sm">
          <a href="#" className="transition-colors hover:text-red-500">
            NOUVEAUTES
          </a>
          <a href="#" className="transition-colors hover:text-red-500">
            FEMME
          </a>
          <a href="#" className="transition-colors hover:text-red-500">
            HOMME
          </a>
          <a href="#" className="transition-colors hover:text-red-500">
            ENFANT
          </a>
          <a href="#" className="transition-colors hover:text-red-500">
            BEAUTE
          </a>
          <a href="#" className="font-semibold text-red-500">
            SOLDES
          </a>
        </div>
      </nav>
    </header>
  )
}
