const express = require("express")
const path = require("path");
const serverRoutes = require('./serverRoutes')

const app = express()
serverRoutes.initRoutes(app)

app.use(express.static('public'))
app.listen(3000,  () => console.log("Example app listening on port 3000"));
// console.log('entry', path.join(__dirname, "js", "app.js"))

