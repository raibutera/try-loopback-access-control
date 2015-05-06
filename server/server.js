// var loopback = require('loopback');
// var boot = require('loopback-boot');
// var path = require('path');
// var bodyParser = require('body-parser');
// var morgan = require('morgan');
// var logger = morgan('dev');

// var app = module.exports = loopback();

// app.middleware('initial', bodyParser.urlencoded({ extended: true }));
// app.use(logger);

// boot(app, __dirname);

// app.start = function () {
//     // start the web server
//     return app.listen(function () {
//         app.emit('started');
//         console.log('Web server listening at: %s', app.get('url'));
//     });
// };


// app.set('view engine', 'ejs');
// app.set('json spaces', 2);

// // must be set to serve views properly when starting the app via `slc run` from
// // the project root
// app.set('views', path.resolve(__dirname, 'views'));

// // Bootstrap the application, configure models, datasources and middleware.
// // Sub-apps like REST API are mounted via boot scripts.
// boot(app, __dirname, function (err) {
//     if (err) throw err;
// });

// // start the server if `$ node server.js`
// if (require.main === module) {
//     console.log('booting manually?');
//     app.start();
// }


var bodyParser = require('body-parser');
var boot = require('loopback-boot');
var loopback = require('loopback');
var path = require('path');

var app = module.exports = loopback();


app.middleware('initial', bodyParser.urlencoded({ extended: true }));

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

app.set('view engine', 'ejs'); // LoopBack comes with EJS out-of-box
app.set('json spaces', 2); // format json responses for easier viewing

// must be set to serve views properly when starting the app via `slc run` from
// the project root
app.set('views', path.resolve(__dirname, 'views'));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
