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

//filter to convert date to string
Vue.filter('date-string', function (value) {
  if (value == undefined) {
    return;
  }
  var mydate = new Date(value);
  var finalval = mydate.toDateString().slice(4, 10).split(" ").reverse().join("-");
  return finalval;
});

new Vue({
  render: h => h(App),
}).$mount('#app')