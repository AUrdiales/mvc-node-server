//mandamos la ejecución de las cookies de sesion necesarias
exports.home = (req, res) => {

//renderizamos la vista y las variables que utilizemos
  res.render('home.hbs',{
          title: 'GefCore',
          title: 'Home page',
          welcomeMessage: 'Welcome to the website!'
  });
  };
  exports.about = (req, res) => {
    res.render('about.hbs', {
      title: 'About page'
    });
  };
  exports.form = (req, res) => {
    res.render('form.hbs',{
      title: 'This is the form page'
    });
  }
