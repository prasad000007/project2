const express = require("express")
const db = require("../db")
const router = express.Router()
const utils = require("../utils")

router.get("/", (request, response) => {
  const statement = `SELECT * FROM books`
  db.query(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})


router.get("/:id", (request, response) => {
  const id = request.params.id
  const statement = `SELECT * FROM books WHERE id=?`
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})


module.exports = router