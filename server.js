const express = require("express")

const app = express()
app.use('/app',express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname +"/app"))

app.listen(3333);