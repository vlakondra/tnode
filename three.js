const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

function serveStaticFile (res, path, contentType, responseCode = 200) {
  console.log(__dirname)
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      return res.end('500 - Internal Error')
    }
    res.writeHead(responseCode, { 'Content-Type': contentType })
    res.end(data)
  })
}

const path = require('path');

const server = http.createServer((req, res) => {
  // оптимизируем запрос
  const normalizedUrl = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

  if (normalizedUrl === '') {
    serveStaticFile(res, '/public/home.html', 'text/html');
  } else if (normalizedUrl === '/about') {
    serveStaticFile(res, '/public/about.html', 'text/html');
  } else if (normalizedUrl.startsWith('/images/')) {
    // обработка изображений
    const ext = path.extname(normalizedUrl).toLowerCase();
    let contentType = 'application/octet-stream';
    if (ext === '.jpg' || ext === '.jpeg') {
      contentType = 'image/jpeg';
    } else if (ext === '.png') {
      contentType = 'image/png';
    } else if (ext === '.gif') {
      contentType = 'image/gif';
    }
    serveStaticFile(res, normalizedUrl, contentType);
  } else {
    serveStaticFile(res, '/public/404.html', 'text/html', 404);
  }
});

server.listen(port, () => console.log(`сервер стартовал, порт ${port}; ` +
  'нажмите Ctrl-C для остановки....'))