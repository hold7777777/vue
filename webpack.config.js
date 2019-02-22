var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')
// 当以命令行形式运行 webpack 或 webpack-dev-server 的时候，工具会发现，我们并没有提供 要打包 的文件的 入口 和 出口文件，此时，他会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个 配置对象，然后根据这个对象，进行打包构建
 
var VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin.js')


module.exports = {
    entry: path.join(__dirname, './src/index.js'), //入口文件 即被打包的js文件
    output: { //指定输出选项
        path: path.join(__dirname, './dist'), //输出路径
        filename: 'main.js' //指定输出文件名
    },
    plugins: [ //所有webpack插件的配置节点 即webpack插件在此做配置
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定模板文件路径，即以此路径的文件为模板
            filename: 'index.html' // 设置生成的内存页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: { //配置所有的第三方匹配(loader) 模块
        rules: [{
            test: /\.css$/, //匹配规则
            use: ['style-loader', 'css-loader'] //匹配到某种规则时调用的模块
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },{
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },{ test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7777&name=[hash:8]-[name].[ext]' }
        ,{ test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }
        ,{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ,{ test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    resolve:{
        // extensions:['.js','.vue','.css']
        // alias:{
            
        // }
    }
}