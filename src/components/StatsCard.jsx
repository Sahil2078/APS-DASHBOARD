import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatsCard({ label, count, color, change }) {
  const isPositive = change?.startsWith('+')
  const ChangeIcon = isPositive ? TrendingUp : TrendingDown

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-zinc-700 hover:shadow-md transition">
      <div className="flex items-start justify-between mb-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</span>
        <span className={`flex items-center gap-1 text-xs font-semibold ${isPositive ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
          {change}
          <ChangeIcon className="w-3 h-3" />
        </span>
      </div>

      <span className={`text-3xl font-bold ${color}`}>
        {count}
      </span>

      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
        {label === 'Critical' && 'Active vulnerabilities'}
        {label === 'High' && 'Requires attention'}
        {label === 'Medium' && 'Monitor closely'}
        {label === 'Low' && 'Minor issues'}
      </p>
    </div>
  )
}