const express = require("express")
const path = require("path");
const serverRoutes = require('./serverRoutes')
const api = require('./api/api')

const app = express()
serverRoutes.initRoutes(app)
api.initApis(app)

app.use(express.static('public'))
app.listen(3000,  () => console.log("Example app listening on port 3000"));
// console.log('entry', path.join(__dirname, "js", "app.js"))

