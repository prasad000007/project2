const express = require("express")
const db = require("../db")
const utils = require("../utils")

const router = express.Router()

//id | name  | image_location   


//Add Category

router.post("/", (request, response) => {
  const { name,image_location} = request.body
  db.query(
    "INSERT INTO Category ( name, image_location) VALUES(?,?)",
    [ name,image_location],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})


//Get Category by id
router.get("/:id", (request, response) => {
  const id = request.params.id
  const statement = `SELECT * FROM Category WHERE id=?`
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//Get all Category
router.get("/", (request, response) => {
 
  const statement = `SELECT * FROM Category`
  db.query(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//id | name |image_location 

//Update Category 
router.put("/:id",(request, response) => {

    const id = request.params.id

    const statement =
    `update Category 
    SET
    name = '${request.body.name}',
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
    `DELETE from Category where id = ${request.params.id}`;
    db.query(statement, [id], (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })
  
module.exports = router