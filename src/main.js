// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

Array.prototype.remove = function(elem, all) {
  for (var i=this.length-1; i>=0; i--) {
    if (this[i] === elem) {
      this.splice(i, 1);
      if(!all) break;
    }
  }
  return this;
};

import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import Test from './components/partials/Test';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueResource);
window.isAuthenticated = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Test }
});
