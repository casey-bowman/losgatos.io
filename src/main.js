import Vue from 'vue'
import App from './App'
import { add } from './add/src/lib.rs'

Vue.config.productionTip = false

console.log(add(5, 4))
console.log(add(3, 9))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
