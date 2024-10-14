const express = require('express')
const app = express()
const port = 3000

// app.use(express.static("public"))

// Middleware 1 - Logger for our application
app.use((req,rep,next)=>{
  // console.log(req.headers);
  req.harry="I am Harry bhai"
})

// Middleware 2
app.use((req, res, next) => {
  console.log('m2')
  req.harry = "I am Rohan bhai";
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send(`Hello World! about` +req.harry)
})

app.get('/contact', (req, res) => {
  res.send('Hello World! contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})