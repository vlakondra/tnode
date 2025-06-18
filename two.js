const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {

  //const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch(req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Homepage')
      break
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('About')
      break
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Not Found')
      break
  } })

server.listen(port, () => console.log(`сервер стартовал, порт ${port}; ` +
  'нажмите Ctrl-C для остановки....'))