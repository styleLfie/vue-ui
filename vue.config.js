// const path = require('path');
// console.log(path)
module.exports = {
  // 方法一
//   chainWebpack: (config) => {
//     // @element 给模块起的别名
//     config.resolve.alias.set('@element', path.resolve(__dirname, 'src/components/element'));
//   },
  // 方法二
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element',
      },
    },
  },
};
