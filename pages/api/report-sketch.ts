import { NextApiHandler } from 'next'

const reportSketch: NextApiHandler = (_, res) => {
  return res.send('ok')
}

export default reportSketch
