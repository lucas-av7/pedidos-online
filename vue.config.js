module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pedidos-online/'
    : '/',
    pwa: {
      name: 'Bora Cumê?',
      themeColor: '#e63946',
      msTileColor: '#fff'
    }
}