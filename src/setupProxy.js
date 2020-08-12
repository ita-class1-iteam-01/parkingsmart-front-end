const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use('/MQapi',
    proxy.createProxyMiddleware({
      target: 'http://10.222.29.148:8161/api/message',
      changeOrigin: true,
      pathRewrite: {
        '/MQapi': ''
      }
    })
  )
  app.use('/api',
    proxy.createProxyMiddleware({
      target: 'http://10.222.29.148:8090',
      changeOrigin: true,
      pathRewrite: {
        '/api': ''
      }
    })
  )
}
