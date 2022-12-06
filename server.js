console.log('May Node be with you')
console.log(__dirname)

const { application } = require('express')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



app.listen(2525, function() {
    console.log('Listening on 2525')
})

