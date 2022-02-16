import { NextApiHandler } from 'next'
import { encodeBase64URL } from '../../lib/b64url'

const reportSketch: NextApiHandler = async (req, res) => {
  const b64sketch = encodeBase64URL(JSON.stringify(req.body))
  const origin = req.headers.origin ?? 'https://luc.im'
  const Preview = `${origin}/?sketch=${b64sketch}`

  const SessionId =
    typeof req.headers['x-session-id'] === 'string'
      ? req.headers['x-session-id']
      : undefined

  const UserAgent =
    typeof req.headers['user-agent'] === 'string'
      ? req.headers['user-agent']
      : undefined

  const fields = { Timestamp: new Date(), Preview, SessionId, UserAgent }

  if (!process.env.AIRTABLE_API_KEY) {
    console.log('Logging entry since no AIRTABLE API KEY has been defined')
    console.log(JSON.stringify(fields))
    return res.send(null)
  }

  const resAirtable = await fetch(
    'https://api.airtable.com/v0/appL5KS2qu2qvVyuA/Data',
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({ records: [{ fields }] })
    }
  )
  const jsonAirtable = await resAirtable.json()

  if (!resAirtable.ok) {
    throw new Error(
      `Failed to upload sketch to Airtable, got ${res.status}: ${JSON.stringify(
        jsonAirtable
      )}`
    )
  }

  return res.send(null)
}

export default reportSketch
