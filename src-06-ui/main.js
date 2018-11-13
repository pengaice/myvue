/*
入口JS
 */
import Vue from 'vue'
import {Button} from 'mini-ui'
import App from './App.vue'
Vue.components(Button.name,Button)


new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
