import {init} from "snabbdom/src/package/init";
import {h} from 'snabbdom/src/package/h'

let patch = init([])

let vnode = h('div.container', [
    h('h1', 'Hello World'),
    h('p', 'Hello BoBlog.com')
])

let app = document.querySelector('#app')
let oldVNode = patch(app, vnode)
console.log('oldVNode', oldVNode)

setTimeout(() => {
    vnode = h('div.container', [
        h('h1', 'Hello Snabbdom'),
        h('p','This is a p')
    ])
    patch(oldVNode, vnode)
    // 空
    patch(oldVNode, h('!'))
}, 2000)

