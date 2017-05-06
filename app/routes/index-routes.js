

var index = require('../controllers/index-controller');


module.exports = (app) => {

  app.route('/')
  .get(index.home);


  app.route('/about')
  .get(index.about);

  app.route('/form')
  .get(index.form);



  };
