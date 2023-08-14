const express = require("express")
const db = require("../db")
const utils = require("../utils")

const router = express.Router()
//vendor_id | first_name | last_name | email| password | phone_number 
//Register Vendor
router.post("/register", (request, response) => {
 
  const { first_name, last_name, email, password,phone_number } = request.body
  db.query(
    "INSERT INTO Vendor (first_name, last_name, email, password,phone_number) VALUES(?,?,?,?,?)",
    [first_name, last_name, email, password,phone_number],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

//Login User
router.post("/login", (request, response) => {
  const { email, password } = request.body
  const statement = "SELECT * FROM Vendor WHERE email=? and password=?"
  db.query(statement, [email, password], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Get Specific User
router.get("/:vendor_id", (request, response) => {
  const vendor_id = request.params.vendor_id
  const statement = `SELECT * FROM Vendor WHERE vendor_id=?`
  db.query(statement, [vendor_id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Get all Users
router.get("/", (request, response) => {
  console.log("HI p")
  const vendor_id = request.params.vendor_id
  const statement = `SELECT * FROM Vendor`
  db.query(statement, [vendor_id], (error, result) => {
    console.log(result)
    response.send(utils.createResult(error, result))
  })
})


//Delete Product
router.delete("/",(request, response) => {

  const id = request.params.id

  const statement =
  `DELETE from Vendor where id = ${request.params.id}`;
  db.query(statement, [id], (error, result) => {
    console.log("id is for delelet"+result)
    response.send(utils.createResult(error, result))
  })
})


module.exports = router