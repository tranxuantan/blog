const path = require('path');
const express = require('express');
// const morgan = require('morgan')
const { engine } = require('express-handlebars');

const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/blog', (req, res) => {
  res.render('home');
})

app.get('/blog/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})