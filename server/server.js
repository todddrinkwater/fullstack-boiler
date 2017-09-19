var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var cors = require('cors')

var route1 = require('./routes/route1')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(cors({origin: '*'}))
server.use('/route1/', route1)

module.exports = server
