// filepath: /c:/Users/adity/OneDrive/Desktop/XyronixLabs_website/client/src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://localhost:8000',
      changeOrigin: true,
      secure: false, // This is necessary if you're using self-signed certificates
    })
  );
};