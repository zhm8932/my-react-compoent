使用 webpack 和gulp 打包项目，browser-sync自动刷新浏览器

webpack

使用webpack.DllPlugin 打包第三方库，使第三方库和自己写的代码分开，避免每次打包都去打包第三方库的文件；
Dll是Webpack最近新加的功能
打包dll的时候，Webpack会将所有包含的库做一个索引，写在一个manifest文件中，而引用dll的代码（dll user）在打包的时候，只需要读取这个manifest文件，就可以了

这么一来有几个好处：

    Dll打包以后是独立存在的，只要其包含的库没有增减、升级，hash也不会变化，因此线上的dll代码不需要随着版本发布频繁更新。

    App部分代码修改后，只需要编译app部分的代码，dll部分，只要包含的库没有增减、升级，就不需要重新打包。这样也大大提高了每次编译的速度。

    假设你有多个项目，使用了相同的一些依赖库，它们就可以共用一个dll。

使用方法

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendors: ['react', 'react-dom','moment','jquery']
    },
    output: {
        path: path.join(__dirname, 'dist','js'),
        filename: '[name].js',
        /**
         * output.library
         * 将会定义为 window.${output.library}
         * 在这次的例子中，将会定义为`window.vendor_library`
         */
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            /**
             * path
             * 定义 manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: path.join(__dirname,'dist','[name]-manifest.json'),
            /**
             * name
             * dll bundle 输出到那个全局变量上
             * 和 output.library 一样即可。
             */
            name: '[name]',
            context: __dirname
        })
    ]
};
webpack.DllPlugin的选项中，
path是manifest文件的输出路径；
name是dll暴露的对象名，要跟output.library保持一致；
context是解析包路径的上下文，这个要跟接下来配置的dll user一致。

运行Webpack(在这里我使用gulp配置任务 运行 gulp dll)，会输出两个文件一个是打包好的vendors.js，一个就是manifest.json，,长这样：
...json
{
  "name": "vendors",
  "content": {
    "./node_modules/react/react.js": 1,
    "./node_modules/react/lib/React.js": 2,
    "./node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js": 3,
    "./node_modules/react/node_modules/object-assign/index.js": 4,
    "./node_modules/react/lib/ReactChildren.js": 5,
    "./node_modules/react/lib/PooledClass.js": 6,
    "./node_modules/react/lib/reactProdInvariant.js": 7,
    "./node_modules/react/node_modules/fbjs/lib/invariant.js": 8,
    "./node_modules/react/lib/ReactElement.js": 9,
    "./node_modules/react/lib/ReactCurrentOwner.js": 10,
    "./node_modules/react/node_modules/fbjs/lib/warning.js": 11,
    "./node_modules/react/node_modules/fbjs/lib/emptyFunction.js": 12,
    "./node_modules/react/lib/canDefineProperty.js": 13,
    "./node_modules/react/lib/traverseAllChildren.js": 14,
    "./node_modules/react/lib/getIteratorFn.js": 15,
    "./node_modules/react/lib/KeyEscapeUtils.js": 16,
    "./node_modules/react/lib/ReactComponent.js": 17,
    "./node_modules/react/lib/ReactNoopUpdateQueue.js": 18,
    "./node_modules/react/node_modules/fbjs/lib/emptyObject.js": 19,
    "./node_modules/react/lib/ReactPureComponent.js": 20,
    "./node_modules/react/lib/ReactClass.js": 21,
    "./node_modules/react/lib/ReactPropTypeLocations.js": 22,
    "./node_modules/react/node_modules/fbjs/lib/keyMirror.js": 23,
    "./node_modules/react/lib/ReactPropTypeLocationNames.js": 24,
    "./node_modules/react/node_modules/fbjs/lib/keyOf.js": 25,
    "./node_modules/react/lib/ReactDOMFactories.js": 26,
    "./node_modules/react/lib/ReactElementValidator.js": 27,
    "./node_modules/react/lib/ReactComponentTreeHook.js": 28,
    "./node_modules/react/lib/checkReactTypeSpec.js": 29,
    "./node_modules/react/lib/ReactPropTypesSecret.js": 30,
    "./node_modules/react/lib/ReactPropTypes.js": 31,
    "./node_modules/react/lib/ReactVersion.js": 32,
    "./node_modules/react/lib/onlyChild.js": 33,
    "./node_modules/react-dom/dist/react-dom.min.js": 34,
    "./node_modules/moment/min/moment-with-locales.min.js": 35,
    "./node_modules/webpack/buildin/module.js": 36,
    "./node_modules/jquery/dist/jquery.min.js": 37,
    "./node_modules/webpack/buildin/amd-options.js": 38
  }
}
...

Webpack将每个库都进行了编号索引，之后的dll user可以读取这个文件，直接用id来引用。

Dll user的配置：

const webpack = require('webpack');

module.exports = {
  output: {
    path: 'build',
    filename: '[name].[chunkhash].js',
  },
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./dist/vendors-manifest.json'),
            })
  ],
};

同时配置中搭配noParse和alias使用 可以提高打包速度

noParse: [/moment-with-locales/,/jquery/],
...json
alias:{
            jquery:'jquery/dist/jquery.min.js',
            react:'react/dist/react.min.js',    //此处react,react-dom别名必须同时设置，否则会出现找不到ReactDOM的问题，同时设置时，不能使用react-dom.min.js
            'react-dom':'react-dom/dist/react-dom.js',  //此处必须设置别名重定向，否则会把ReactDOM重新打包一遍,但是这样浏览器中又找不到ReactDOM  ??
            moment:'moment/min/moment-with-locales.min.js'
        }
...

项目中如果使用ES6或者React则还需要配置.babelrc文件

### Demo

[demo](http://imiao.in)