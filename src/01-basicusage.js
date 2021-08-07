import {init} from "snabbdom/src/package/init";
import {h} from 'snabbdom/src/package/h'

const patch = init([])

// 生成vnode
let vnode = h('div.container.cls', 'Hello World')
const app = document.querySelector('#app')

/**
 * path 函数 对比两个新旧节点
 * params1：旧的 VNode，还可以是 DOM 元素
 * params2：新的 VNode
 * @return 返回新的 VNode
 */
const oldVNode = patch(app, vnode)

vnode = h('div.container.cls', 'Hello Snabbdom')
patch(oldVNode, vnode)
