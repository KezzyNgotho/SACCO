const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "heey",
  password: "123",
  port: 5432,
});
const getProducts = (request, response) => {
  pool.query(
    "SELECT * FROM products ORDER BY product_name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
//new
const createProduct = (request, response) => {
  const { product_name, quantity,sales } = request.body;

  pool.query(
    "INSERT INTO products (product_name,quantity) VALUES ($1 ,$2 AND $3) RETURNING *",
    [product_name, quantity, sales],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`product added with name: ${results.rows[0].name}`);
    }
  );
};
//update increase
const updateProducts = (request, response) => {
  const { product_name, quantity } = request.body;
  const newQuantity = parseInt(quantity) + 1; // Convert quantity to a number using parseInt()

  pool.query(
    "UPDATE products SET quantity = $1 WHERE product_name = $2",
    [newQuantity, product_name],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rowCount === 0) {
        response
          .status(404)
          .send(`Product with product_name ${product_name} not found.`);
      } else if (results.rows && results.rows.length > 0) {
        response
          .status(201)
          .send(
            `Product updated with product_name: ${results.rows[0].product_name}`
          );
      } else {
        pool.query(
          "SELECT quantity FROM products WHERE product_name = $1",
          [product_name],
          (error, selectResults) => {
            if (error) {
              throw error;
            }

            const updatedQuantity = selectResults.rows[0].quantity;
            response
              .status(201)
              .send(
                `Product updated with product_name: ${product_name}. New quantity is ${updatedQuantity}.`
              );
          }
        );
      }
    }
  );
};
//sell
const sellProducts = async (request, response) => {
  try {
    const { product_name, updatedQuantity } = request.body;
    
    if (!product_name || !updatedQuantity) {
      return response
        .status(400)
        .send("Missing product_name or updatedQuantity parameter.");
    }

    const newQuantity = parseInt(updatedQuantity) - 1; 

    const queryResult = await pool.query(
      "UPDATE products SET quantity = $1 WHERE product_name = $2",
      [newQuantity, product_name]
    );

    if (queryResult.rowCount === 0) {
      response
        .status(404)
        .send(`Product with product_name ${product_name} not found.`);
    } else {
      response
        .status(201)
        .send(
          `Product updated with product_name: ${product_name}. New quantity is ${updatedQuantity}.}`
        );
    }
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send("An error occurred while updating the product.");
  }
};


/// "UPDATE products SET quantity = $1 WHERE product_name = $2",
// "UPDATE products SET quantity = $1, total_sales = total_sales + 1 WHERE product_name = $2",
//[newQuantity, product_name],
// (error, results) => {
//  if (error) {
// throw error;
//  }
// if (results.rowCount === 0) {
// response.status(404).send(`Product with product_name ${product_name} not found.`);
// } else if (results.rows && results.rows.length > 0) {
// response.status(201).send(`Product sold with product_name: ${results.rows[0].product_name}`);
// } else {
//  response.status(500).send('An error occurred while updating the product.');
///  }
// }

module.exports = {
  getProducts,
  createProduct,
  updateProducts,
  sellProducts,
};
