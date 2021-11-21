const isAuthenticated = (req, res, next) => {
  if (typeof (req.session) !== 'undefined') {
    if (typeof req.session.username !== 'undefined') {
      if (!(req.session.username === null)) {
        if (req.session.username !== '') {
          next()
        }
      } else {
        const err = new Error('unauthenticated user')
        next(err)
      }
    }
  } else {
    // unauthenticated user
    const err = new Error('unauthenticated user')
    next(err)
  }
}

module.exports = isAuthenticated
