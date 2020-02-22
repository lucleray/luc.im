export default (req, res) => {
  const method = req.method
  const headers = req.headers
  const body = req.body

  res.json({ method, headers, body })
}
