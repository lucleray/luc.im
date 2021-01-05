import { NextApiHandler } from 'next'

const reportSketch: NextApiHandler = (req, res) => {
  console.log(req.body)
  return res.send('ok')
}

export default reportSketch
