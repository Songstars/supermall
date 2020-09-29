// 配置别名
module.exports = {
  configureWebpack:{
    resolve:{
      alias: {
        // router store  不需要配置  可以通过this.@router  别名一般都需要配置
        'assets': '@/assets',
        'assets': '@/common',
        'assets': '@/components',
        'assets': '@/network'
      }
    }
  }
}