const express = require("express")
const db = require("../db")
const router = express.Router()
const utils = require("../utils")

//id | user_id | product_id | quantity

//Add to cart
router.post("/addtoCart", (request, response) => {
  const { user_id, product_id,quantity } = request.body
  const statement = `INSERT INTO Cart( user_id, product_id,quantity) VALUES(?,?,?)`
  db.query(statement, [user_id, product_id,quantity], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//get CartDetails of particular User
router.get("/:id", (request, response) => {
  const id = request.params.id
  const statement = `SELECT * FROM Cart WHERE user_id=?`
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Get all orders
router.get("/", (request, response) => {
  const statement = `SELECT * FROM Cart`
  db.query(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})


//Update orders
router.put("/:id",(request, response) => {
  const id = request.params.id
  const statement =
  `update Cart 
  SET
  user_id = '${request.body.user_id}',
  product_id = '${request.body.product_id}',
  quantity = '${request.body.quantity}'
  where id = ${request.params.id}`;
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Delete Cart
router.delete("/:id",(request, response) => {

  const id = request.params.id

  const statement =
  `DELETE from Cart where id = ${request.params.id}`;
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router