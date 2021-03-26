const path = require('path');

const express = require('express');

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminData.routes);

app.use((req, res) => {
    res.status(404).render('404', {
        pageTitle: '❌ 404 Error Page Not Found ❌',
        path: '',
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});
