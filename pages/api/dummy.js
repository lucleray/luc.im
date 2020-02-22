export default (req, res) => {
  const method = req.method
  const headers = req.headers
  const body = req.body

  res.setHeader('Content-Type', 'application/json')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, DELETE, OPTIONS'
  )
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Authorization, Accept, Content-Type'
  )

  res.json({ method, headers, body })
}
