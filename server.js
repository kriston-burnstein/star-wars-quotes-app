console.log('May Node be with you')
console.log(__dirname)

const { application } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
//url encoded method with body-parser tells body-parser to extract data from the form element and add it to the body property in the request object
//this would allow us to see values from the form elemenmt inside req.body now


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res) => {
    console.log(req.body)
})


app.listen(2525, function() {
    console.log('Listening on 2525')
})

