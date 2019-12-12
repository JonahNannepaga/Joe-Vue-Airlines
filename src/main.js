import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//filter to generate state-code
Vue.filter('state-code', function (value) {
  if (value == undefined) {
    return
  }
  value = value.toUpperCase();
  var str = value.substring(0, 3);
  return str;
});

new Vue({
  render: h => h(App),
}).$mount('#app')