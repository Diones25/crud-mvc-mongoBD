const express = require('express');
const exphbs = require('express-handlebars');
const chalk = require('chalk');
const path = require('path');

const app = express();

const conn = require('./db/conn');
const productRoutes = require('./routes/products.routes');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log(chalk.bgGreenBright.blackBright('Servidor rodando http://localhost:3000'))
});


