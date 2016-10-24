const path = require('path');
const fs = require('fs');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin =require('extract-text-webpack-plugin');

var PATHS = {
    js:'src/js/entry'
    // js:'src/js/entry/*.jsx'  //用于getEntry() glob的方法
}

const getEntry = function () {  //fs.readdirSync()
    var jsPath = path.resolve(PATHS.js);  //入口文件单独定义到一个文件夹中，因为被引用过的js文件不可以再被作为入口文件

    var dirs = fs.readdirSync(jsPath);
    var matchs = null,entry = {};

    // console.log("jsPath:",jsPath)
    // console.log("dirs:",dirs)
    dirs.forEach(function (item) {

        matchs = item.match(/(.+)\.jsx?$/)
        // console.log("item:",item,"matchs:",matchs);
        if(matchs){
            // console.log("入口文件：",matchs[0])
            entry[matchs[1]] = path.resolve(PATHS.js,item)
        }
    })

    return entry;
}
// function getEntry() {  //glob.sync()
//     var files = glob.sync(PATHS.js);
//     console.log("files:",files)
//     var entries = {}, entry, dirname, basename,pathname;
//
//     for (var i = 0; i < files.length; i++) {
//         entry = files[i];
//
//         dirname = path.dirname(entry);
//         // console.log("dirname:",dirname)
//
//         basename = path.basename(entry, '.jsx');
//         // console.log("basename:",basename)
//         // entries[path.join(dirname, basename)] = './' + entry;
//         // entries[basename] = './' + entry;
//         entries[basename] = path.join(__dirname,entry)
//     }
//     console.log("entries:",entries)
//     return entries;
// }
var config = {
    // cache: true,
    /*
     问题一：使用getEntry()这种方式打包的文件会很大，猜测jquery,react等文件(公共文件common.js)都会被打包到每个文件中去了，貌似DllReferencePlugin无效
     问题二：但是经验证，问题一的猜测是错误的，问题在于入口文件夹中有一个空的demo.jsx，导致commm.js里内容会被重新打包到各个文件中，因为他没有使用公共文件啊，为什么这么坑！！)
     问题三：如何解决问题二的问题呢？可以设置CommonsChunkPlugin中的变量 minChunks至少为1,为零或者未设置的时候出现问题二的情况；
     * */
    entry:getEntry(),
    // entry:{
    //     CheckBoxDemo:path.join(__dirname,PATHS.js,'CheckBoxDemo.jsx'),
    //     CheckBoxGroupDemo:path.join(__dirname,PATHS.js,'CheckBoxGroupDemo.jsx'),
    //     RadioDemo:path.join(__dirname,PATHS.js,'RadioDemo.jsx'),
    //     RadioGroupDemo:path.join(__dirname,PATHS.js,'RadioGroupDemo.jsx'),
    //     DropDownDemo:path.join(__dirname,PATHS.js,'DropDownDemo.jsx'),
    //     // demo:path.join(__dirname,PATHS.js,'demo.jsx'),
    // },
    output:{
        path: path.join(__dirname, "dist/js/"), //文件输出目录
        // publicPath: "dist/js/",        //用于配置文件发布路径，如CDN或本地服务器
        filename:'[name].js'
    },
    resolve:{
        extensions:["",".js",".jsx",".scss",".json",'.less'],
        //配置别名，在项目中可缩减引用路径
        alias:{
            jquery:'jquery/dist/jquery.min.js',
            react:'react/dist/react.min.js',    //此处react,react-dom别名必须同时设置，否则会出现找不到ReactDOM的问题，同时设置时，不能使用react-dom.min.js
            'react-dom':'react-dom/dist/react-dom.js',  //此处必须设置别名重定向，否则会把ReactDOM重新打包一遍,但是这样浏览器中又找不到ReactDOM  ??
            // 'react-dom':'react/lib/ReactDOM.js',  //此处必须设置别名重定向，否则会把ReactDOM重新打包一遍,跟上面效果一直
            moment:'moment/min/moment-with-locales.min.js'
        }
    },
    //externals来将依赖的库指向全局变量，从而不再打包这个库
    externals: {
        // require("jquery") 是引用自外部模块的
        // 对应全局变量 jQuery
        // "jquery": "jQuery",
        // 'React':'react',
        // 'ReactDOM':'react-dom',
    },
    devServer:{
        port:8082,
        contentBase:'./dist'
    },
    module:{
        //略对已知文件的解析,提高打包速度
        noParse: [/moment-with-locales/,/jquery/],
        loaders:[
            // {test:/\.jsx?$/,loader:'babel',include:path.resolve('src'),exclude:/node_modules/},
            {test:/\.jsx?$/,loader:'babel',exclude:/node_modules/},
            {test:/\.scss$/,loader:ExtractTextPlugin.extract('style','css!sass'), exclude:/node_modules/},
            { test: /\.less$/, loader: "style!css!less" }
        ]
    },
    plugins:[
        // //压缩打包的文件
        // new webpack.optimize.UglifyJsPlugin({
        // mangle:{  //设置不压缩的变量
        //             except: ['$super', '$', 'exports', 'require']
        //         }
        //     compress: {
        //         //supresses warnings, usually from module minification
        //         warnings: false
        //     }
        // }),
        //允许错误不打断程序
        // new webpack.NoErrorsPlugin(),
        //把指定文件夹下的文件复制到指定的目录
        // new ExtractTextPlugin('css/[name].css'),
        // new webpack.optimize.CommonsChunkPlugin('common','common.js'),
        new webpack.optimize.CommonsChunkPlugin({name:'common',filename:'common.js',minChunks:2}), //模块间必须共享2个
        //提供全局的变量，在模块中使用无需用require引入
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            moment: "moment",
            'React':'react',
            'ReactDOM':'react-dom',
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/vendors-manifest.json'),
        })

    ]
}


module.exports = config;