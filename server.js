const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');

const app = express();

app.use(express.static('public'));
/* Push HTML views files to top level dir */
app.use(express.static('public/views'));

app.get('/', express.static(path.join(__dirname, 'public/views/')));

app.listen(port);
