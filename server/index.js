const express = require('express');
const { route } = require('./routes');

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(route);

app.listen(PORT, function () { console.log('Server listening on port' + PORT) })