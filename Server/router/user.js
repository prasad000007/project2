const express = require("express")
const db = require("../db")
const utils = require("../utils")

const router = express.Router()

//Register User
router.post("/register", (request, response) => {
  const { first_name, last_name, email, password,phone_number } = request.body
  db.query(
    "INSERT INTO User (first_name, last_name, email, password,phone_number) VALUES(?,?,?,?,?)",
    [first_name, last_name, email, password,phone_number],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

//Login User
router.post("/login", (request, response) => {
  const { email, password } = request.body
  const statement = "SELECT * FROM User WHERE email=? and password=?"
  db.query(statement, [email, password], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Get Specific User
router.get("/:user_id", (request, response) => {
  const user_id = request.params.user_id
  const statement = `SELECT * FROM User WHERE user_id=?`
  db.query(statement, [user_id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Get all Users
router.get("/", (request, response) => {
  const user_id = request.params.user_id
  const statement = `SELECT * FROM User`
  db.query(statement, [user_id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router