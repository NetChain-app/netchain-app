// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var fontSize = window.innerWidth / (750 / 100)
document.querySelector('html').style = 'font-size:'+ fontSize +'px'

if( process.env.NODE_ENV === 'production' ){
  let script = document.createElement('script')
  script.src = 'cordova.js'

  document.querySelector('head').appendChild(script)
}
