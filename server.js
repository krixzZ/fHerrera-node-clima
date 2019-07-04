const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers.js');

//PORT
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  // let salida = {
  //   nombre: 'Cristian',
  //   edad: '38',
  //   url: req.url
  // };
  // res.send(salida);

  res.render('home', {
    name: 'Cristian Contreras',
    anio: new Date().getFullYear()
  });
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
