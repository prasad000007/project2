const express = require("express")
const db = require("../db")
const utils = require("../utils")

const router = express.Router()


//id | name  | description | price | vendor_id | category_id | stock_quantity | image_location 



//Add Product
router.post("/", (request, response) => {
  const { name, description, price, vendor_id,category_id, stock_quantity,image_location} = request.body
  db.query(
    "INSERT INTO Product ( name, description, price, vendor_id,category_id, stock_quantity,image_location) VALUES(?,?,?,?,?,?,?)",
    [ name, description, price, vendor_id,category_id, stock_quantity,image_location],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})


//Get Product by id
router.get("/:id", (request, response) => {
  const id = request.params.id
  const statement = `SELECT * FROM Product WHERE id=?`
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Get all Products
router.get("/", (request, response) => {
 
  const statement = `SELECT * FROM Product`
  db.query(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//id | name  | description | price | vendor_id | category_id | stock_quantity | image_location 

//Update Product 
router.put("/:id",(request, response) => {

    const id = request.params.id

    const statement =
    `update Product 
    SET
    name = '${request.body.name}',
    description = '${request.body.description}',
    price = '${request.body.price}',
    vendor_id = '${request.body.vendor_id}',
    category_id = '${request.body.category_id}',
    stock_quantity = '${request.body.stock_quantity}',
    image_location = '${request.body.image_location}' 
    where id = ${request.params.id}`;
    db.query(statement, [id], (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })


//Delete Product
router.delete("/:id",(request, response) => {

    const id = request.params.id

    const statement =
    `DELETE from Product where id = ${request.params.id}`;
    db.query(statement, [id], (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })

module.exports = router