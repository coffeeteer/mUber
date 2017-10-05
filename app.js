const express = require('express');

const app = express();

//request handler
// Watch for incoming requests of method GET
// to the route http://localhost:3050/api
app.get('/api', (req, res) => {
	res.send({ hi: 'There!' });
});

module.exports = app;