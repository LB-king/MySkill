import React from 'react'
import ReactDOM from 'react-dom'

let myH1 = React.createElement('h1', {
    id: 'mygod'
}, 'h1的内容')

ReactDOM.render(myH1,document.getElementById('app'))