const isAuthenticated = (req, res, next) => {
  if (req.session.username !== '' && typeof (req.session.username) !== 'undefined') {
    // user is authenticated
    next()
  } else {
    // unauthenticated user
    const err = new Error('unauthenticated user')
    next(err)
  }
}

module.exports = isAuthenticated
