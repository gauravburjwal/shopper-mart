const path = require('path');

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'shop.html'));
});

app.get('/admin/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'add-product.html'));
});

app.post('/admin/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});
