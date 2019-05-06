exports.getLogin = (req, res, next) => {
//console.log(req.get('Cookie').split(';')[0].trim().split('=')[1]);
  //   const isLoggedIn = req
  //     .get('Cookie')
  //     .split(';')[1]
  //     .trim()
  //     .split('=')[1] === 'true';
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
    //res.setHeader('Set-Cookie', 'loggedIn=true;Max-Age=10');
  res.redirect('/');
};
 