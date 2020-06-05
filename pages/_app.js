import App from 'next/app'

export default App

export function reportWebVitals(metric) {
  if (process.env.NODE_ENV !== 'production') return

  window.chiffre?.sendNumber({
    name: metric.name,
    value: metric.value,
    meta: { path: window.location.pathname }
  })
}
