import './module'
import 'jquery'
window.$ = window.jQuery = jquery;


$(document).ready(() => {
  console.log($('body'))
  module()
})

