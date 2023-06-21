const { env } = require('process');

const target = 'ttps://localhost:9999';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/Articulos",
      "/Clientes",
      "/Tiendas"
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
