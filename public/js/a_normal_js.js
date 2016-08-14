
;'use strict'

$(document).ready(function () {
  $('#jqeryapp').html('Hello from jQuery')
})

new Vue({
  el: '#vueapp',

  data: {
    hello: 'A message from vuejs'
  }
})
