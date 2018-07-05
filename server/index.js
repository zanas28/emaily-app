const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

app.listen(4004, () => {
    console.log(`Your app was running on localhost:4004`);
});