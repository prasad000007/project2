const express = require("express")
const cors = require("cors")
const routerUser = require("./router/user")
const routerVendor = require("./router/vendor")
const routerAddress = require("./router/address")
const routerProduct = require("./router/product")
const routerCategory = require("./router/categorytable")
const routerOrder = require("./router/orders")
const routerCart = require("./router/cart")
const routerOdetails = require("./router/orderdetails")


const app = express()
app.use(express.json())
app.use(cors("*"))
app.use(express.static("Uploads"))

app.use("/user", routerUser)
app.use("/vendor",routerVendor)
app.use("/address",routerAddress)
app.use("/product",routerProduct)
app.use("/category",routerCategory)
app.use("/orders", routerOrder)
app.use("/cart", routerCart)
app.use("/odetails", routerOdetails)

app.listen(4000, "0.0.0.0", () => {
  console.log("Server started at port 4000")
})