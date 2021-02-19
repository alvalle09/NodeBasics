
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Vatos!@');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,334]);
});

app.listen(3500, () => console.log('Escuch?'));




