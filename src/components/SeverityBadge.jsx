export default function SeverityBadge({ count, color, title }) {
  return (
    <span
      title={title}
      className={`px-3 py-1 rounded-lg text-xs font-semibold text-white ${color} hover:opacity-80 transition cursor-default`}
    >
      {count}
    </span>
  )
}