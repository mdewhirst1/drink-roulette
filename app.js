'use strict'
const express = require('express')
const path = require('path')

let app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});