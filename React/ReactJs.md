### 1.简介

- 起源于Facebook公司的内部项目，用来架设Instagram...**2013年5月开源**
- 清楚两个概念：
  - library(库):`小而巧，只提供了特定的API`，优点就是：可以很方便的从一个库切换到另外的库 ；但是代码几乎不会改变
  - Framework(框架):`大而全` ，框架提供了一整套的解决方案；所以在项目中间想切换到另外的框架，是比较困难的

### 2.三大主流框架

- Angular
  - 最早
- Vue
  - 最火
- React
  - 最流行

### 3.React与Vue的对比

- **组件化方面**
  1. **什么是模块化？**是从**代码**的角度来进行分析的；把一些可复用的代码，抽离为单个的模块；便于项目的维护和开发

  2. **什么是组件化？**是从**UI界面**的角度进行分析的；把一些可复用的UI元素，抽离为单独的组件

  3. **组件化的好处？**随着项目规模的增大，组件会越来越多；能方便的使用

  4. **Vue**是如何实现组件的：通过.vue文件，来创建对应的组件

     - Vue.component()
     - Vue.extends()
     - .vue模板文件
       - template - 结构
       - script - 行为
       - style - 样式

  5. **React**：一切都是以JS来表现的

- **移动APP**

  - vue---->weex

  - react---->ReactNative

### 4.React中的几个核心概念

#### 4.1-虚拟DOM(Virtual Document Object Model)

- **DOM的本质**：浏览器中的概念，用js对象来表示页面上的元素，并提供了操作DOM对象的API
- **什么是react中的虚拟DOM**：是框架中的概念，是程序员用js对象来模拟页面上的dom和dom嵌套
- **为什么需要虚拟DOM**：为了实现页面中，DOM元素的高效更新

#### 4.2-Diff算法

- **tree diff**：新旧两棵DOM树对比的过程，就是Tree Diff;当整棵DOM逐层对比完毕，则所有需要按需更新的元素，必然能够找到

- **component diff**：在进行tree diff的时候，每一层的组件级别的对比叫做component diff
  - 如果对比前后，则**暂时**认为此组件不需要被更新
  - 如果对比前后，类型不同，则需要移除旧组件，创建新组件，并追加到页面上
- **element diff**：在进行组件对比的时候，如果组件类型相同，则要进行元素级别的对比，这就叫做Element Diff
### 5.webpack创建应用

```powershell
npm init -y
```

1. 在项目根目录创建`src`源代码目录和`dist`产品目录

2. 在`src`目录下新建`index.html`

3. 安装webpack

   ```shell
   npm i webpack webpack-cli -D
   ```

   > 注意：卸载全局安装的webpack和webpack-cli失败
   >
   > `npm cache clean --force`清一下缓存

   **webpack.config.js**

   ```javascript
   let path = require('path')
   module.exports = {
       mode:"production", //development
       //自定义打包的入口文件
       entry:path.resolve(__dirname,"./src/test.js")
       //自定义打包的出口文件
       output:{
           path:path.resolve(__dirname,'bundle'),
           filename:'b.js'
       }
   }
   ```

4. 注意：webpack 4.x提供了约定大于配置的概念；目的是为了减少配置文件的体积

   - 默认约定了
   - 打包入口是：`src`--->`index.js`
   - 打包输出文件是：`dist`--->`main.js`
   - `mode`必须要，选项`production`和`development`

5. webpack-dev-server

   ```shell
   npm i webpack-dev-server -D
   ```

   > WDS打包好的main.js是托管到内存中；所以在项目根目录看不到；
   >
   > 但是我们可以认为在根目录中有一个main.js

**package.json**

```json
{
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
   	"dev": "webpack-dev-server --open firefox --port 8081 --progress --hot --compress --host 127.0.0.1"
  }
}
```

ie：`iexplore`

6.html-webpack-plugin (在内存中生成index.html，它会将打包后的main.js自动导入到项目中)

```javascript
let path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html' //生成的内存中首页的名称
})
module.exports = {
    plugins: [
        htmlPlugin
    ]
}
```

### 6.在项目中使用react

安装`react`、`react-dom`

```shell
cnpm i react react-dom -S
```



- react:专门用于创建组件和虚拟dom，组件的生命周期都在这个包中
- react-dom：专门进行dom操作的，最主要场景：ReactDom.render()

