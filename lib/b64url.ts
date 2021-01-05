// spec: https://base64.guru/standards/base64url

export function encodeBase64URL(value: string) {
  const b64 =
    typeof window !== 'undefined'
      ? window.btoa(value)
      : Buffer.from(value.toString(), 'binary').toString('base64')

  return b64
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

export function decodeBase64URL(value: string) {
  const b64 = (value + '==='.slice((value.length + 3) % 4))
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  return typeof window !== 'undefined'
    ? window.atob(b64)
    : Buffer.from(b64, 'base64').toString('binary')
}
