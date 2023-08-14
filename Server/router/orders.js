const express = require("express")
const db = require("../db")
const router = express.Router()
const utils = require("../utils")

router.post("/placeorder", (request, response) => {
  const { user_id, order_date,status } = request.body
  const statement = `INSERT INTO Orders( user_id, order_date,status) VALUES(?,?,?)`
  db.query(statement, [user_id, order_date,status], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//get Order of particular user
router.get("/:id", (request, response) => {
  const id = request.params.id
  const statement = `SELECT * FROM Orders WHERE user_id=?`
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Get all orders
router.get("/", (request, response) => {
  const statement = `SELECT * FROM Orders`
  db.query(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})


//Update orders
router.put("/:id",(request, response) => {
  const id = request.params.id
  const statement =
  `update Orders 
  SET
  user_id = '${request.params.id}',
  order_date = '${request.body.order_date}',
  status = '${request.body.status}'
  where id = ${request.params.id}`;
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Delete Order
router.delete("/:id",(request, response) => {

  const id = request.params.id

  const statement =
  `DELETE from Orders where id = ${request.params.id}`;
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router