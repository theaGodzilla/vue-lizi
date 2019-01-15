// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import "./assets/font/iconfont.css";
// import "lib-flexible/flexible";

// import "./sass/common.scss";


// Vue.config.productionTip = false;

// window.onresize = setHtmlFontSize;
// function setHtmlFontSize(){
//     const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//     const htmlDom = document.getElementsByTagName('html')[0];
//     htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// };
// setHtmlFontSize();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // render:h=>h(App),
  router
})
