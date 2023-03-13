const Pool = require("pg").Pool;
/* const bcrypt = require("bcrypt"); */
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "heey",
  password: "123",
  port: 5432,
});

//const User = require('./Queries/user');


const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY email ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};




// create a new user with unique email address
/* const createUser = (request, response) => {
  const { firstname,lastname,email, password } = request.body;

  pool.query(
    "INSERT INTO users (firstname,lastname,email,password) VALUES ($1 ,$2,$3,$4) RETURNING *",
    [firstname,lastname,email,password ],
    (error, results) => {
      if (error) {
        throw error;
      }
      
          response
            .status(201)
            .send(`product added with email: ${results.rows[0].email}`);
        }
     
  );
};
 */
const createUser = (request, response) => {
  const { firstname, lastname, email, password } = request.body;

  pool.query(
    "INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
    [firstname, lastname, email, password],
    (error, results) => {
      if (error) {
        response.status(400).send(`Error: ${error.message}`);
        return;
      }

      response.status(201).send(`User added with email: ${results.rows[0].email}`);
    }
  );
};



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

const loginUser = (request, response) => {
  const { email, password } = request.body;

  pool.query(
    "SELECT * FROM users WHERE email = $1 AND password = $2",
    [email, password],
    (error, results) => {
      if (error) {
        response.status(400).send(`Error: ${error.message}`);
        return;
      }

      if (results.rows.length === 0) {
        response.status(401).send(`Invalid email or password`);
        return;
      }

      response.status(200).send(`Welcome ${results.rows[0].firstname} ${results.rows[0].lastname}`);
    }
  );
};


const createProduct = (request, response) => {
  const { product_name, quantity } = request.body;

  pool.query(
    "INSERT INTO products (product_name,quantity) VALUES ($1 ,$2) RETURNING *",
    [product_name, quantity],
    (error, results) => {
      if (error) {
        throw error;
      }
      pool.query(
        "INSERT INTO quantity_transactions (product_name, transaction_type, quantity) VALUES ($1, $2, $3)",
        [product_name, "INITIAL", quantity],
        (error, results) => {
          if (error) {
            throw error;
          }
          response
            .status(201)
            .send(`product added with name: ${results.rows[0].name}`);
        }
      );
    }
  );
};
const updateProducts = (request, response) => {
  const { product_name, quantity } = request.body;

  const newQuantity = parseInt(quantity); // Convert quantity to a number using parseInt()

  pool.query(
    "UPDATE products SET quantity = quantity + $1, store = quantity + $1 WHERE product_name = $2",
    [newQuantity, product_name],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rowCount === 0) {
        response
          .status(404)
          .send(`Product with product_name ${product_name} not found.`);
      } else {
        pool.query(
          "SELECT quantity FROM products WHERE product_name = $1",
          [product_name],
          (error, selectResults) => {
            if (error) {
              throw error;
            }

            const updatedQuantity = selectResults.rows[0].quantity;

            pool.query(
              "INSERT INTO quantity_transactions (product_name, transaction_type, quantity) VALUES ($1, $2, $3)",
              [product_name, "INCREASE", newQuantity],
              (error, results) => {
                if (error) {
                  throw error;
                }
                response
                  .status(201)
                  .send(
                    `Product updated with product_name: ${product_name}. New quantity is ${updatedQuantity}.`
                  );
              }
            );
          }
        );
      }
    }
  );
};


//reduce /sell
const sellProducts = (request, response) => {
  const { product_name, updatedQuantity } = request.body;
  const soldQuantity = parseInt(updatedQuantity) - 1; // Convert quantity to a number using parseInt()

  pool.query(
    "SELECT quantity FROM products WHERE product_name = $1",
    [product_name],
    (error, selectResults) => {
      if (error) {
        response.status(500).send(error.message);
        return;
      }

      const currentQuantity = selectResults.rows[0].quantity;
      const newQuantity = currentQuantity - soldQuantity;

      if (newQuantity < 0) {
        response
          .status(400)
          .send(
            `Insufficient quantity. Only ${currentQuantity} ${product_name}(s) available.`
          );
      } else {
        pool.query(
          "UPDATE products SET quantity = $1, sales = sales + $2, store = store + $3 WHERE product_name = $4",
          [newQuantity, soldQuantity, soldQuantity, product_name],
          (error, results) => {
            if (error) {
              response.status(500).send(error.message);
              return;
            }
            if (results.rowCount === 0) {
              response
                .status(404)
                .send(`Product with product_name ${product_name} not found.`);
            } else {
              pool.query(
                "INSERT INTO quantity_transactions (product_name, transaction_type, quantity) VALUES ($1, $2, $3)",
                [product_name, "DECREASE", newQuantity],
                (error, results) => {
                  if (error) {
                    throw error;
                  }
                  response
                    .status(201)
                    .send(
                      `Sale made for product_name: ${product_name}. New quantity is ${newQuantity}.`
                    );
                }
              );
            }
          }
        );
      }
    }
  );
};


//all sales
const displaySales = (request, response) => {
  pool.query("SELECT product_name, sales FROM products", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//store

const displayStore = (request, response) => {
  pool.query("SELECT product_name, store FROM products", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//sales
const getHistory = (request, response) => {
  pool.query(
    "SELECT * FROM quantity_transactions",
    // ORDER BY product_name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
//message
const getMessage = (request, response) => {
  pool.query("SELECT * FROM message ", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
//create
const createMessage = (request, response) => {
  const { message } = request.body;

  pool.query(
    "INSERT INTO message (message) VALUES ($1) RETURNING *",
    [message],
    (error, results) => {
      if (error) {
        throw error;
      }
     
          response
            .status(201)
            .send(`Message added with content: ${results.rows[0].message}`);
        }
      
    
  );
};

module.exports = {
  getUsers,
createUser,
//loginUser,
  getProducts,
  createProduct,
  updateProducts,
  sellProducts,
  displaySales,
  displayStore,
  getHistory,
  loginUser,
  getMessage,
  createMessage

  
};
