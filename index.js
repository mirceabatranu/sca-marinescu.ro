import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const port = Number(process.env.PORT ?? 8080);

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

function sendFile(filePath, res) {
  fs.stat(filePath, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = mimeTypes[ext] ?? 'application/octet-stream';
    res.setHeader('Content-Type', type);
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url ?? '/', 'http://localhost');
  const pathname = decodeURIComponent(requestUrl.pathname);
  const safePath = path.normalize(pathname).replace(/^\.+/, '');

  let candidate = path.join(distDir, safePath);
  if (candidate.endsWith(path.sep)) {
    candidate = path.join(candidate, 'index.html');
  }

  if (!path.extname(candidate)) {
    const htmlCandidate = `${candidate}.html`;
    const indexCandidate = path.join(candidate, 'index.html');
    if (fs.existsSync(htmlCandidate)) {
      candidate = htmlCandidate;
    } else if (fs.existsSync(indexCandidate)) {
      candidate = indexCandidate;
    } else {
      const rootIndex = path.join(distDir, 'index.html');
      if (fs.existsSync(rootIndex)) {
        candidate = rootIndex;
      }
    }
  }

  sendFile(candidate, res);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Static server listening on port ${port}`);
});
