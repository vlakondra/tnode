const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  console.log(req.url, req.httpVersion)
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello мир!')
})

server.listen(port, () => console.log(`сервер стартовал, порт  ${port}; ` +
  'нажмите Ctrl-C для остановки....'))


//https://nodejsdev.ru/  