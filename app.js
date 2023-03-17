const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const app = express();
app.set('view engine', 'hbs');
const port = process.env.PORT;

app.use(express.static('public'));
app.get('/', (req, res) => {
    hbs.registerPartials(__dirname + '/views/partials');
    res.render('home',{
        titulo:'Curso Node.js',
        nombre: 'Jonathan'
    });
});

app.get('/elements', (req, res) => {
    hbs.registerPartials(__dirname + '/views/partials');
    res.render('elements',{
        titulo:'Curso Node.js',
        nombre: 'Jonathan'
    });
});

app.get('/generic', (req, res) => {
    hbs.registerPartials(__dirname + '/views/partials');
    res.render('generic',{
        titulo:'Curso Node.js',
        nombre: 'Jonathan'
    });
});

app.get('*', (req, res) => {
    res.send('Error 404 || Página no encontrada');
});

app.listen(port); 