import { useState, useEffect } from 'react'
import AppLayout from '../layouts/AppLayout'
import { scanSession, steps, logs, findings, statusMetrics } from '../data/scanDetail'
import FindingCard from '../components/FindingCard'
import { ChevronRight, Zap, Target, Clock, Key, FileText, CheckSquare } from 'lucide-react'

export default function ScanDetail() {
  const [activeConsoleTab, setActiveConsoleTab] = useState('activity')
  const [displayedLogs, setDisplayedLogs] = useState([])
  const [displayedFindings, setDisplayedFindings] = useState([])

  // Simulate live log streaming
  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedLogs.length < logs.length) {
        setDisplayedLogs(logs.slice(0, displayedLogs.length + 1))
      }
    }, 800)
    return () => clearInterval(interval)
  }, [displayedLogs])

  // Simulate live findings appearing
  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedFindings.length < findings.length) {
        setDisplayedFindings(findings.slice(0, displayedFindings.length + 1))
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [displayedFindings])

  const highlightLog = (message) => {
    // Highlight URLs
    let highlighted = message.replace(
      /https?:\/\/[^\s/$.?#].[^\s]*/gi,
      match => `<span class="text-blue-400 font-semibold">${match}</span>`
    )
    // Highlight headers
    highlighted = highlighted.replace(
      /[A-Za-z-]+:/g,
      match => `<span class="text-yellow-400 font-semibold">${match}</span>`
    )
    // Highlight SQL patterns
    highlighted = highlighted.replace(
      /'[^']*'/g,
      match => `<span class="text-red-400 font-semibold">${match}</span>`
    )
    return highlighted
  }

  return (
    <AppLayout>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {scanSession.name}
          </h1>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-semibold text-sm">
            {scanSession.status}
          </span>
        </div>
      </div>

      
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 mb-6 shadow-md border border-gray-200 dark:border-zinc-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
         
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" className="dark:stroke-zinc-700" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - scanSession.progress / 100)}`}
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-teal-600 dark:text-teal-400">{scanSession.progress}%</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Progress</span>
              </div>
            </div>
          </div>

         
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Scan Phases</h3>
            <div className="flex items-center gap-2 flex-wrap">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      step.active
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white scale-105'
                        : step.completed
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 dark:bg-zinc-700 text-gray-800 dark:text-gray-300'
                    }`}
                  >
                    {step.name}
                  </div>
                  {idx < steps.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-gray-400 mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-zinc-600">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-sm">
          <div>
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Type</label>
            <p className="text-gray-900 dark:text-white font-medium mt-1">{scanSession.type}</p>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Targets</label>
            <p className="text-gray-900 dark:text-white font-medium mt-1 truncate">{scanSession.targets}</p>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Started</label>
            <p className="text-gray-900 dark:text-white font-medium mt-1">{scanSession.startedAt}</p>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Credentials</label>
            <p className="text-gray-900 dark:text-white font-medium mt-1">{scanSession.credentials}</p>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Files</label>
            <p className="text-gray-900 dark:text-white font-medium mt-1">{scanSession.files}</p>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Checklist</label>
            <p className="text-gray-900 dark:text-white font-medium mt-1">{scanSession.checklist}</p>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700 overflow-hidden flex flex-col h-[500px]">
          
          <div className="flex border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900">
            <button
              onClick={() => setActiveConsoleTab('activity')}
              className={`flex-1 px-4 py-3 font-medium text-sm transition ${
                activeConsoleTab === 'activity'
                  ? 'border-b-2 border-teal-500 text-teal-600 dark:text-teal-400 bg-white dark:bg-zinc-800'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Activity Log
            </button>
            <button
              onClick={() => setActiveConsoleTab('verification')}
              className={`flex-1 px-4 py-3 font-medium text-sm transition ${
                activeConsoleTab === 'verification'
                  ? 'border-b-2 border-teal-500 text-teal-600 dark:text-teal-400 bg-white dark:bg-zinc-800'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Verification Loops
            </button>
          </div>

         
          <div className="flex-1 bg-gray-900 dark:bg-black text-green-400 p-4 font-mono text-xs overflow-y-auto">
            {activeConsoleTab === 'activity' ? (
              <div className="space-y-1">
                {displayedLogs.map((log, i) => (
                  <div key={i} className="flex gap-3 hover:bg-gray-800 p-1 rounded">
                    <span className="text-gray-600 flex-shrink-0">[{log.time}]</span>
                    <span
                      dangerouslySetInnerHTML={{ __html: highlightLog(log.message) }}
                      className={`${
                        log.type === 'critical' ? 'text-red-400' :
                        log.type === 'warning' ? 'text-yellow-400' :
                        log.type === 'url' ? 'text-blue-400' :
                        log.type === 'header' ? 'text-yellow-400' :
                        'text-green-400'
                      }`}
                    />
                  </div>
                ))}
                {displayedLogs.length > 0 && (
                  <div className="flex gap-3 text-green-400 animate-pulse">
                    <span className="text-gray-600">▌</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-gray-500">
                <div className="mb-2">[09:00:00] Starting verification loops...</div>
                <div className="mb-2">[09:02:15] Loop 1: Testing authentication mechanisms</div>
                <div className="mb-2">[09:04:30] Loop 2: Validating CORS policies</div>
                <div className="mb-2">[09:06:45] Loop 3: Verifying encryption methods</div>
                <div className="text-green-400 animate-pulse">Waiting for results...</div>
              </div>
            )}
          </div>
        </div>

        
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700 overflow-hidden flex flex-col h-[500px]">
          
          <div className="px-6 py-4 border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900">
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-500" />
              Findings Log ({displayedFindings.length})
            </h3>
          </div>

          
          <div className="flex-1 overflow-y-auto p-4">
            {displayedFindings.length > 0 ? (
              displayedFindings.map(finding => (
                <FindingCard key={finding.id} item={finding} />
              ))
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                <div className="text-center">
                  <Zap className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Waiting for findings...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 rounded-xl p-4 text-white border border-gray-700 dark:border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
          <div>
            <span className="text-2xl font-bold text-cyan-400">{statusMetrics.subAgents}</span>
            <p className="text-xs text-gray-400 mt-1">Sub-agents</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-cyan-400">{statusMetrics.parallelExecutions}</span>
            <p className="text-xs text-gray-400 mt-1">Parallel Executions</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-cyan-400">{statusMetrics.operations}</span>
            <p className="text-xs text-gray-400 mt-1">Operations</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-red-400">{statusMetrics.critical}</span>
            <p className="text-xs text-gray-400 mt-1">Critical</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-orange-400">{statusMetrics.critical + statusMetrics.high}</span>
            <p className="text-xs text-gray-400 mt-1">High+</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-yellow-400">{statusMetrics.medium}</span>
            <p className="text-xs text-gray-400 mt-1">Medium</p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}