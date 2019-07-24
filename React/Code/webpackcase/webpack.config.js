const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let htmlPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})

module.exports = {
    mode:'development',
    plugins:[
        htmlPlugin
    ],
    //所有第三方 模块的配置规则
    //webpack默认只能处理.js后缀名类型的文件
    module:{
        rules:[
            {
                test:/\.js|jsx$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}