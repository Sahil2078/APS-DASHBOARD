export const scans = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: {
      critical: 12,
      high: 23,
      medium: 18,
      low: 4
    },
    lastScan: "4d ago"
  },
  {
    id: 2,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: {
      critical: 2,
      high: 5,
      medium: 1,
      low: 0
    },
    lastScan: "3d ago"
  },
  {
    id: 3,
    name: "Cloud Infrastructure",
    type: "Whitebox",
    status: "Completed",
    progress: 100,
    vulnerabilities: {
      critical: 5,
      high: 8,
      medium: 15,
      low: 12
    },
    lastScan: "2d ago"
  },
  {
    id: 4,
    name: "Mobile APIs",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: {
      critical: 3,
      high: 12,
      medium: 8,
      low: 6
    },
    lastScan: "1d ago"
  },
  {
    id: 5,
    name: "Database Servers",
    type: "Blackbox",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0
    },
    lastScan: "5d ago"
  },
  {
    id: 6,
    name: "Network Perimeter",
    type: "Whitebox",
    status: "Completed",
    progress: 100,
    vulnerabilities: {
      critical: 8,
      high: 14,
      medium: 22,
      low: 18
    },
    lastScan: "6d ago"
  },
  {
    id: 7,
    name: "Third-party Integrations",
    type: "Greybox",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0
    },
    lastScan: "7d ago"
  }
]