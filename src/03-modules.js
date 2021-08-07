import {init} from "snabbdom/src/package/init"
import {h} from 'snabbdom/src/package/h'


// 1.导入模块
import {styleModule} from "snabbdom/src/package/modules/style"
import {eventListenersModule} from "snabbdom/src/package/modules/eventlisteners";

// 2.注册模块
const patch = init([
    styleModule,
    eventListenersModule
])
// 3.使用h()函数第二个参数传入模块中使用的数据（对象）
let vnode = h('div', [
    h('h1', {
        style: {
            color: '#fff',
            backgroundColor: '#f00'
        }
    }, 'Hello World'),
    h('p', {on: {
        click: eventHandler
        }}, 'This is a p')
])

function eventHandler() {
    console.log('eventHandler')
}

const app = document.querySelector('#app')
patch(app, vnode)
