const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

//imports
app.get("/products", db.getProducts);
app.post("/products", db.createProduct);
app.post("/updateproducts", db.updateProducts);
app.post("/sellproducts", db.sellProducts);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
