import Vue from 'vue';
import store from './vue/store';
import App from './vue/components/App.vue';

new Vue({
  el: '#root',
  store,
  render: h => h(App)
});