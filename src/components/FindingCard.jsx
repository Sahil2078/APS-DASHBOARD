import { AlertCircle } from 'lucide-react'

export default function FindingCard({ item }) {
  const colors = {
    Critical: { bg: "bg-red-100 dark:bg-red-900", badge: "bg-red-500", text: "text-red-800 dark:text-red-200" },
    High: { bg: "bg-orange-100 dark:bg-orange-900", badge: "bg-orange-500", text: "text-orange-800 dark:text-orange-200" },
    Medium: { bg: "bg-yellow-100 dark:bg-yellow-900", badge: "bg-yellow-500", text: "text-yellow-800 dark:text-yellow-200" },
    Low: { bg: "bg-green-100 dark:bg-green-900", badge: "bg-green-500", text: "text-green-800 dark:text-green-200" }
  }

  const config = colors[item.severity] || colors.Low

  return (
    <div className={`${config.bg} rounded-lg p-4 mb-4 border-l-4 ${config.badge} transition hover:shadow-md`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 flex-1">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${config.badge} text-white`}>
            {item.severity}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400 ml-auto">{item.time}</span>
        </div>
      </div>

      <h3 className={`font-semibold mb-1 ${config.text}`}>{item.title}</h3>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>

      <div className="flex items-center justify-between pt-2 border-t border-gray-300 dark:border-gray-600">
        <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">{item.endpoint}</p>
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
          CVSS {item.cvss}
        </span>
      </div>
    </div>
  )
}