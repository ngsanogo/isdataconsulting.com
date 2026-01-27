// Simple static HTTP server for production
import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import { createServer } from 'http';

const PORT = process.env.PORT || 3000;
const DIST_DIR = resolve('./dist');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
};

function getMimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

function getFilePath(url) {
  let path = url.split('?')[0];
  if (path === '/' || path === '/index.html') {
    return resolve(DIST_DIR, 'index.html');
  }
  const filePath = resolve(DIST_DIR, path.slice(1));
  return filePath;
}

const server = createServer((req, res) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');

  // Handle OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    let filePath = getFilePath(req.url);

    try {
      const content = readFileSync(filePath);
      const mimeType = getMimeType(filePath);
      
      // Cache static assets
      if (filePath.includes('assets/')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      }

      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(content);
    } catch (err) {
      // If file not found, serve index.html (SPA routing)
      if (filePath.endsWith('.html') || err.code === 'ENOENT') {
        const indexPath = resolve(DIST_DIR, 'index.html');
        const content = readFileSync(indexPath);
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      } else {
        throw err;
      }
    }
  } catch (err) {
    console.error('Error:', err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${DIST_DIR}`);
  console.log(`🔒 Production mode enabled`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
