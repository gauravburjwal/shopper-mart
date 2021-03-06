const path = require('path');

const express = require('express');

const adminRoute = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const errorController = require('./controllers/error.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminRoute);

app.use(errorController.get404);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});
