const express = require('express');
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

app.listen(PORT, function () { console.log('Server listening on port' + PORT) })