const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const db = require("./queries");
//const User = require('../Queries/user');

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
app.get("/Users", db.getUsers);
app.post("/Users", db.createUser);
app.get("/products", db.getProducts);
app.post("/products", db.createProduct);
app.post("/updateproducts", db.updateProducts);
app.post("/sellproducts", db.sellProducts);
app.get("/displaysales",db.displaySales);
app.get("/displayStore",db.displayStore);
app.post("/loginUser",db.loginUser);
app.get("/History", db.getHistory);
app.get("/Message",db.getMessage);
app.post("/Message",db.createMessage)


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
