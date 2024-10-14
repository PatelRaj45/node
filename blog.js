const express = require('express')
const router = express.Router()
 
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

router.get('/blogpost/:slug', (req, res) => {
    res.send(`Aur bhai aur bata ${req.params.slug}`)
  })

module.exports = router