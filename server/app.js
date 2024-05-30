var express = require('express')
var cors = require('cors')
var cookieParser = require('cookie-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var path = require('path')
var dotenv = require('dotenv')
var app = express()
var port = 3000

var authRouter = require('../server/router/authRouter')
const obatRouter = require('./router/obatRouter');
const { notFound, errorHandler } = require('./middleware/errorHandler')

dotenv.config()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cookieParser())
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).json({
    pesan: "Ini pesan"
  })
})

app.use('/api/auth', authRouter)
app.use('/api', obatRouter)

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.DB,{
}).then(() => {
    console.log('terkoneksi')
})