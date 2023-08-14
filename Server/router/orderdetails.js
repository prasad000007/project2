const express = require("express")
const db = require("../db")
const router = express.Router()
const utils = require("../utils")

//id | order_id | product_id | quantity 

//Add to OrderDetails
router.post("/Odetails", (request, response) => {
  const { order_id, product_id,quantity } = request.body
  const statement = `INSERT INTO OrderDetails( order_id, product_id,quantity) VALUES(?,?,?)`
  db.query(statement, [order_id, product_id,quantity], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//get OrderDetails of particular order
router.get("/:id", (request, response) => {
  const id = request.params.id
  const statement = `SELECT * FROM OrderDetails WHERE order_id=?`
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Get all OrderDetails
router.get("/", (request, response) => {
  const statement = `SELECT * FROM OrderDetails`
  db.query(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})


//Update OrderDetails(based on Table id)
router.put("/:id",(request, response) => {
  const id = request.params.id
  const statement =
  `update OrderDetails 
  SET
  order_id = '${request.body.order_id}',
  product_id = '${request.body.product_id}',
  quantity = '${request.body.quantity}'
  where id = ${request.params.id}`;
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Delete OrderDetails
router.delete("/:id",(request, response) => {

  const id = request.params.id

  const statement =
  `DELETE from OrderDetails where id = ${request.params.id}`;
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router