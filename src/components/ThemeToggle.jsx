import { useTheme } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { dark, setDark } = useTheme()

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 text-gray-700 dark:text-gray-300 transition font-medium"
      aria-label="Toggle theme"
    >
      {dark ? (
        <>
          <Sun className="w-4 h-4" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  )
}