import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { Home, Folder, Search, Clock, Bell, Settings, HelpCircle, LogOut } from 'lucide-react'

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'Projects', icon: Folder, path: '/projects' },
    { name: 'Scans', icon: Search, path: '/scans' },
    { name: 'Schedule', icon: Clock, path: '/schedule' },
    { name: 'Notifications', icon: Bell, path: '/notifications' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Support', icon: HelpCircle, path: '/support' }
  ]

  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg transition ${
      isActive
        ? 'bg-teal-500 text-white'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800'
    }`

  return (
    <div className="w-64 h-screen bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 flex flex-col">
      
      <div className="p-4 border-b border-gray-200 dark:border-zinc-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
          APS
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Security Scanner</p>
      </div>

      
      <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
        {navItems.map(item => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={navLinkStyle}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          )
        })}
      </nav>

      
      <div className="border-t border-gray-200 dark:border-zinc-800 p-4 space-y-4">
    
        <ThemeToggle />

        
        <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-3 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                Admin User
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                admin@edu.com
              </p>
            </div>
          </div>

          <button className="w-full flex items-center gap-2 px-3 py-2 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  )
}