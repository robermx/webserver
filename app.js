require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;
const options = {
  name: 'Roberto Arenas',
  title: 'Práctica',
  theme: 'Node.js',
  titleGen: 'Genericos para SEO web',
  titleEle: 'Elementos para SEO web',
};
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware: Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', options);
});

app.get('/generic', (req, res) => {
  res.render('generic', options);
});

app.get('/elements', (req, res) => {
  res.render('elements', options);
});

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
