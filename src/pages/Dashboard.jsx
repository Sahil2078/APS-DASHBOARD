import { useState } from 'react'
import AppLayout from '../layouts/AppLayout'
import { scans } from '../data/scans'
import { useNavigate } from 'react-router-dom'
import StatusChip from '../components/StatusChip'
import SeverityBadge from '../components/SeverityBadge'
import StatsCard from '../components/StatsCard'
import { Search, Filter, Settings2, Plus } from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterMenu, setFilterMenu] = useState(false)
  const [columnMenu, setColumnMenu] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('All')

  const filteredScans = scans.filter(scan => {
    const matchesSearch = scan.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'All' || scan.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const calculateTotalVulnerabilities = () => {
    return scans.reduce((acc, scan) => ({
      critical: acc.critical + scan.vulnerabilities.critical,
      high: acc.high + scan.vulnerabilities.high,
      medium: acc.medium + scan.vulnerabilities.medium,
      low: acc.low + scan.vulnerabilities.low
    }), { critical: 0, high: 0, medium: 0, low: 0 })
  }

  const totals = calculateTotalVulnerabilities()

  return (
    <AppLayout>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor and manage your security scans</p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard label="Critical" count={totals.critical} color="text-red-600 dark:text-red-500" change="+2%" />
        <StatsCard label="High" count={totals.high} color="text-orange-600 dark:text-orange-500" change="+0.9%" />
        <StatsCard label="Medium" count={totals.medium} color="text-yellow-600 dark:text-yellow-500" change="-0.9%" />
        <StatsCard label="Low" count={totals.low} color="text-green-600 dark:text-green-500" change="+0.9%" />
      </div>

      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            placeholder="Search scans..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        
        <div className="flex items-center gap-3">
          
          <div className="relative">
            <button
              onClick={() => setFilterMenu(!filterMenu)}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>

            {filterMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg shadow-lg z-10">
                {['All', 'Completed', 'Scheduled', 'Failed'].map(status => (
                  <button
                    key={status}
                    onClick={() => {
                      setSelectedStatus(status)
                      setFilterMenu(false)
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition ${
                      selectedStatus === status
                        ? 'bg-teal-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>

          
          <div className="relative">
            <button
              onClick={() => setColumnMenu(!columnMenu)}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
            >
              <Settings2 className="w-4 h-4" />
              <span className="text-sm font-medium">Columns</span>
            </button>

            {columnMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg shadow-lg z-10">
                <div className="p-3 space-y-2 text-sm">
                  <p className="text-gray-600 dark:text-gray-400 font-medium px-1">Column visibility</p>
                  <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700 px-2 py-1 rounded">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span>Scan Name</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700 px-2 py-1 rounded">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span>Type</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700 px-2 py-1 rounded">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span>Status</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700 px-2 py-1 rounded">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span>Progress</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          
          <button
            onClick={() => navigate('/scan/new')}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-medium hover:from-teal-600 hover:to-cyan-600 transition shadow-md hover:shadow-lg active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>New Scan</span>
          </button>
        </div>
      </div>

     
      <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-zinc-700">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Scan Name</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Progress</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Vulnerabilities</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Last Scan</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
              {filteredScans.length > 0 ? (
                filteredScans.map(scan => (
                  <tr
                    key={scan.id}
                    onClick={() => navigate(`/scan/${scan.id}`)}
                    className="hover:bg-gray-50 dark:hover:bg-zinc-700 cursor-pointer transition"
                  >
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900 dark:text-white">{scan.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {scan.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusChip status={scan.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-gray-200 dark:bg-zinc-700 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all"
                            style={{ width: `${scan.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium w-12">{scan.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <SeverityBadge count={scan.vulnerabilities.critical} color="bg-red-500" title="Critical" />
                        <SeverityBadge count={scan.vulnerabilities.high} color="bg-orange-500" title="High" />
                        <SeverityBadge count={scan.vulnerabilities.medium} color="bg-yellow-500" title="Medium" />
                        <SeverityBadge count={scan.vulnerabilities.low} color="bg-green-500" title="Low" />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                      {scan.lastScan}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <p className="text-gray-500 dark:text-gray-400">No scans found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  )
}