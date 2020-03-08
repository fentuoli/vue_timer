// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import globalVariable from './global_variable.js'

Vue.config.productionTip = false
Vue.prototype.global = globalVariable

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.to_time = function (t) {
  var t1 = t + ''
  if (t1.length < 2) {
    t1 = '0' + t
    return t1
  } else {
    return t1
  }
}
