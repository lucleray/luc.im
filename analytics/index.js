const { json, send } = require('micro')

let nbViews = {}

const createError = (status = 500, message = 'Internal Server Error') => {
  const error = new Error(message)
  error.status = status
  error._apiError = true
  return error
}

module.exports = async (req, res) => {
  try {
    if (req.method === 'POST') {
      let page

      try {
        page = (await json(req)).page
      } catch (e) {
        throw createError(400, 'json object is missing')
      }

      if (!page) {
        throw createError(400, 'missing page parameter')
      }

      if (typeof page !== 'string') {
        throw createError(400, 'page must be a string')
      }

      if (!nbViews[page]) {
        nbViews[page] = 0
      }
      nbViews[page]++

      send(res, 200, {})
      return
    }

    if (req.method === 'GET') {
      send(res, 200, { ...nbViews })
      return
    }

    throw createError(404, 'page not found')
  } catch (_error) {
    const error = _error._apiError ? _error : createError()
    send(res, error.status, { error: error.message })
    return
  }
}
