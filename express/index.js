const express = require('express')
const app = express()
const port = 3000

app.get("/Products", (req, res) => {
    res.json(['Apple', 'Redmi', 'One Plus One']);
})

app.get("/orders", (req, res) => {
    res.json([
        { id: 1, paid: false, user_id: 1},
        { id: 2, paid: false, user_id: 1},
    ])
})

// app.get("/", (req, res) => {
//     console.log(req.query);
//     const { name, job } = req.query;
//     res.send('Hello im ${req.query.name}, ${job} developer');
// });

app.get("/:category/subcategory/:subcategory", (req, res) => {
    console.log(req.params);
    res.send(
        'categorynya adalah ${req.params.category}, dan subcategorynya adalah ${req.params.subcatgory}'
    );
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})