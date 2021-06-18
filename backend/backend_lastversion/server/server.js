const express = require('express');
const booksRoute = require('./route/booksRoute');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.listen(3334);
console.log('servico iniciado com sucesso!');