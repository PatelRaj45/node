const express = require('express')
const router = express.Router()
 
// define the home page route
router.get('/', (req, res) => {
  res.send('shop')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds shop')
})



module.exports = router