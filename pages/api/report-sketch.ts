import { NextApiHandler } from 'next'
import { encodeBase64URL } from '../../lib/b64url'

const reportSketch: NextApiHandler = (req, res) => {
  console.log(
    'http://localhost:3000?sketch=' + encodeBase64URL(JSON.stringify(req.body))
  )
  return res.send(null)
}

export default reportSketch
