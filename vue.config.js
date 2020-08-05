
//vue.config.js
 
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
 
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '',
    productionSourceMap: false,
 
    //postcss-pxtorem
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              autoprefixer(),
              pxtorem({
                rootValue: 192, //设计稿宽度为1920px的
                propList: ['*']
              })
            ]
          }
        }
      },
}