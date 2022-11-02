const {request, response} = require('express');

let express = require('express')
let server = express();

server.set('view engine', 'ejs')

require('dotenv').config()

let host = process.env.HOST || 'localhost'
let port = process.env.PORT || '8087'

server.use(express.static('public'))
server.use(express.urlencoded())

server.get('/', (request, response) => {
    response.render('index.ejs')
});

server.get('/about', (request, response) => {
    response.render('about.ejs')
});

server.get('/skills', (request, response) => {
    response.render('skills.ejs')
});

server.get('/projects', (request, response) => {
    response.render('projects.ejs')
});

server.get('/contact', (request, response) => {
    response.render('contact.ejs')
});


server.listen(port, host, () => {
    console.log(`The server is running on port ${port} and on the server ${host}`)
})