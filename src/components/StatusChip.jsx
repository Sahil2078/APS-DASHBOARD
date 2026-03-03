export default function StatusChip({ status }) {
  const statusConfig = {
    Completed: {
      bg: "bg-green-100 dark:bg-green-900",
      text: "text-green-800 dark:text-green-200",
      icon: "🟢"
    },
    Scheduled: {
      bg: "bg-gray-100 dark:bg-gray-800",
      text: "text-gray-800 dark:text-gray-200",
      icon: "⏭️"
    },
    Failed: {
      bg: "bg-red-100 dark:bg-red-900",
      text: "text-red-800 dark:text-red-200",
      icon: "🔴"
    },
    Running: {
      bg: "bg-blue-100 dark:bg-blue-900",
      text: "text-blue-800 dark:text-blue-200",
      icon: "🔵"
    }
  }

  const config = statusConfig[status] || statusConfig.Scheduled

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
      <span>{config.icon}</span>
      {status}
    </span>
  )
}