const express = require("express")
const db = require("../db")
const utils = require("../utils")

const router = express.Router()

//| id | user_id | vendor_id | address_line1 | address_line2 | city   | state   | country   | postal_code 
//User Can Have Multiple Address

//Add Address of User
router.post("/registerUser/:user_id", (request, response) => {
    const user_id = request.params.user_id
    const {vendor_id,address_line1, address_line2,city,state,country,postal_code } = request.body
    db.query(
        "INSERT INTO address (user_id,vendor_id,address_line1, address_line2, city,state,country,postal_code) VALUES(?,?,?,?,?,?,?,?)",
        [user_id,vendor_id,address_line1, address_line2,city,state,country,postal_code],
        (error, result) => {
        response.send(utils.createResult(error, result))
        }
  )
})

//Add Address of Vendor
router.post("/registerVendor/:vendor_id", (request, response) => {
    const vendor_id = request.params.vendor_id
    const {user_id,address_line1, address_line2,city,state,country,postal_code } = request.body
    db.query(
        "INSERT INTO address (user_id,vendor_id,address_line1, address_line2, city,state,country,postal_code) VALUES(?,?,?,?,?,?,?,?)",
        [user_id,vendor_id,address_line1, address_line2,city,state,country,postal_code],
        (error, result) => {
        response.send(utils.createResult(error, result))
        }
  )
})


//Get all Address 
router.get("/", (request, response) => {
  const user_id = request.params.user_id
  const statement = `SELECT * FROM address`
  db.query(statement, [user_id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Get  Address of particular user
router.get("/user/:user_id", (request, response) => {
    const user_id = request.params.user_id
    const statement = `SELECT * FROM address where user_id = ?`
    db.query(statement, [user_id], (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })

//Get Address of particular Vendor
router.get("/vendor/:vendor_id", (request, response) => {
    const vendor_id = request.params.vendor_id
    const statement = `SELECT * FROM address where vendor_id = ?`
    db.query(statement, [vendor_id], (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })

//| id | user_id | vendor_id | address_line1 | address_line2 | city   | state   | country   | postal_code 
//Update Address 
router.put("/:id",(request, response) => {

    const id = request.params.id

    const statement =
    `update address 
    SET
    address_line1 = '${request.body.address_line1}',
    address_line2 = '${request.body.address_line2}',
    city = '${request.body.city}',
    state = '${request.body.state}',
    country = '${request.body.country}',
    postal_code = '${request.body.postal_code}' where id = ${request.params.id}`;
    db.query(statement, [id], (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })


module.exports = router