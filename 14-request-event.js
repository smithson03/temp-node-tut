const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('welcome')  
// })

// Using Event Emitter API
const server = http.createServer()
//emits request event
// suscribe to it / listen to it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)