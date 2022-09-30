const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
});