
import $ from 'jquery'
window.Vue = require('vue/dist/vue.js')
import VueResource from 'vue-resource'

import Env from './components/Env'

new Vue({
  el: '#vueapp',

  data: {
    hello: 'A message from vuejs'
  },

  'created' () {
    Env.version()
  }
})

$(document).ready(_ => {
  $('#jqeryapp').html('Hello from jQuery')
})
