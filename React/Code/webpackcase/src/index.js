import React from 'react'
import ReactDom from 'react-dom'

// let myH1 = React.createElement('h1', {
//     id: 'mygod'
// }, 'h1的内容1')


/* const mydiv = <div id='mydiv'>
    这是div元素
    <h1>也可以直接来一个H1</h1>
    </div> */

let num = 99
let str = 'string'
let bool = true
let title = 'p的title'
ReactDom.render(<div>
<h2>{num}</h2>
<h2>{str}</h2>
<h2>{bool?'真':'假'}</h2>
<p title={title}>p标签</p>
</div>,document.getElementById('app'))