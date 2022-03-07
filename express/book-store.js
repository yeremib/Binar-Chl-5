const express = require('express')
const app = express()
const port = 3000

const books = require("./db/books.json")

app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/books/:id', (req,res) => {
    const bookById = books.find((item) => item.id == req.params.id);
    res.json(bookById);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})