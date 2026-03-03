export const scanSession = {
  id: 1,
  name: "Web App Servers",
  progress: 45,
  status: "In Progress",
  type: "Greybox",
  targets: "api.example.com, app.example.com",
  startedAt: "2026-03-03 09:00:00",
  credentials: 2,
  files: 1,
  checklist: "87/350"
}

export const steps = [
  { name: "Spidering", completed: true },
  { name: "Mapping", completed: true },
  { name: "Testing", completed: false, active: true },
  { name: "Validating", completed: false },
  { name: "Reporting", completed: false }
]

export const logs = [
  { time: "09:00:23", message: "Starting reconnaissance phase...", type: "info" },
  { time: "09:01:15", message: "Discovering targets at https://api.example.com/v1", type: "url" },
  { time: "09:02:42", message: "Found HTTP header X-API-Version: 2.1.0", type: "header" },
  { time: "09:03:18", message: "Apache/2.4.41 server detected", type: "info" },
  { time: "09:04:05", message: "Scanning for common endpoints...", type: "info" },
  { time: "09:05:32", message: "Testing POST /api/auth/login with authentication bypass", type: "warning" },
  { time: "09:06:14", message: "Found parameter injection point in 'q' parameter", type: "critical" },
  { time: "09:07:21", message: "Testing CORS policy on https://api.example.com/v1/users", type: "url" },
  { time: "09:08:45", message: "Response header Access-Control-Allow-Origin: * detected", type: "critical" },
  { time: "09:09:33", message: "Analyzing response from GET /api/search?q=test", type: "info" },
  { time: "09:10:18", message: "SQLi payload successful with input admin' OR '1'='1", type: "critical" },
  { time: "09:11:42", message: "Enumerating database schema...", type: "info" },
  { time: "09:12:55", message: "Found 12 database tables in schema public", type: "info" },
  { time: "09:13:28", message: "Testing JWT token validation on Bearer token validation", type: "warning" },
  { time: "09:14:36", message: "Validation bypassed - token expiration not enforced", type: "critical" },
]

export const findings = [
  {
    id: 1,
    severity: "Critical",
    title: "SQL Injection in Search Endpoint",
    endpoint: "/api/search",
    description: "The 'q' parameter is vulnerable to SQL injection attacks allowing unauthorized data access.",
    time: "09:10:18",
    cvss: "9.8"
  },
  {
    id: 2,
    severity: "Critical",
    title: "Insecure JWT Token Implementation",
    endpoint: "/api/auth/login",
    description: "JWT tokens do not enforce expiration, allowing indefinite token usage after compromise.",
    time: "09:14:36",
    cvss: "9.3"
  },
  {
    id: 3,
    severity: "Critical",
    title: "Unrestricted CORS Policy",
    endpoint: "/api/v1/users",
    description: "CORS header allows requests from any origin (Access-Control-Allow-Origin: *) without validation.",
    time: "09:08:45",
    cvss: "9.1"
  },
  {
    id: 4,
    severity: "High",
    title: "Broken Authentication - Rate Limiting Disabled",
    endpoint: "/api/auth/login",
    description: "No rate limiting on authentication endpoint enables brute force attacks.",
    time: "09:05:32",
    cvss: "8.6"
  },
  {
    id: 5,
    severity: "High",
    title: "Server Information Disclosure",
    endpoint: "/*",
    description: "Server reveals Apache version in HTTP headers, aiding attacker reconnaissance.",
    time: "09:02:42",
    cvss: "5.3"
  },
  {
    id: 6,
    severity: "Medium",
    title: "Missing Security Headers",
    endpoint: "/*",
    description: "Content-Security-Policy and X-Frame-Options headers are missing from responses.",
    time: "09:15:11",
    cvss: "6.5"
  },
]

export const statusMetrics = {
  subAgents: 4,
  parallelExecutions: 12,
  operations: 245,
  critical: 3,
  high: 2,
  medium: 1,
  low: 0
}