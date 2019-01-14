module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/calcmask/'
    : '/',
    outputDir: '../docs',
  }