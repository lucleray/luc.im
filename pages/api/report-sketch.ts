import { NextApiHandler } from 'next'
import { encodeBase64URL } from '../../lib/b64url'

const reportSketch: NextApiHandler = (req, res) => {
  const b64sketch = encodeBase64URL(JSON.stringify(req.body))
  const origin = req.headers.Origin ?? 'https://luc.im'
  const previewSketchURL = `${origin}/?sketch=${b64sketch}`

  console.log(previewSketchURL)
  return res.send(null)
}

export default reportSketch
