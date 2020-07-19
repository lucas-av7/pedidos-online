module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pedidos-online/'
    : '/',
    pwa: {
      name: 'Bora Cumê?',
      themeColor: '#e63946',
      msTileColor: '#fff',
      appleMobileWebAppCapable: 'no',
      appleMobileWebAppStatusBarStyle: 'default',
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'src/registerServiceWorker.js',
        // ...other Workbox options...
      }
    }
}