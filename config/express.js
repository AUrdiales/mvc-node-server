var express = require('express'),
    bodyParser = require('body-parser'),
    hbs = require('hbs'),
    fs = require('fs');


module.exports = () => {
    var app = express();

    app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use((req, res, next) => {
    var now = new Date().toString();
    var log =`${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (error) => {
      if(error){
      console.log('Unnable to append to server log.');
      }
    });
    next();
  });

  app.set('views', 'app/views');
  app.set('view engine', 'hbs');
  hbs.registerPartials( './app/views/partials');
  hbs.registerHelper('getCurrentYear', () =>{
    return new Date().getFullYear();
  });
  hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
  });

    require('../app/routes/index-routes.js')(app);

    app.use("/public",express.static('./public'));
    app.use("/styles",express.static('./bower_components'));

    // app.use('*',(req, res, next) => {
    //   res.render('maintenance.hbs',{
    //     title: 'Maintenance'
    //   })
    // });

    return app;
}
