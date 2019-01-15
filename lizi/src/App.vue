<template>
  <div id="App" class="container">
  <router-view />
    <!-- <mt-tabbar v-model="selected">
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
        <div class="iconfont" :class="tab.icon"></div>
        {{tab.text}}
      </mt-tab-item>
    </mt-tabbar> -->
  </div>
</template>

<script>
  import Vue from 'vue';
  import MintUI from 'mint-ui';
  import "mint-ui/lib/style.css";
  Vue.use(MintUI);

  // import "./sass/common.scss";

  import axios from "axios";
  Vue.prototype.$axios = axios;

  export default {
    name: 'App',
    // data() {
    //   return {
    //     tabs:[
    //       {
    //           text:'首页',
    //           icon:'icon-shouye',
    //           path:'/home',
    //           name:'Home'
    //       },{
    //           text:'分类',
    //           icon:'icon-fenlei',
    //           path:'/list',
    //           name:'List'
    //       },{
    //           text:'丽子圈',
    //           icon:'icon-iconquanzinor',
    //           path:'/circle',
    //           name:'Circle'
    //       },{
    //           text:'购物车',
    //           icon:'icon-gouwu',
    //           path:'/cart',
    //           name:'Cart'
    //       },{
    //           text:'我的',
    //           icon:'icon-my',
    //           path:'/person',
    //           name:'Person'
    //       }
    //     ],
    //     selected:'Home'
    //   }
    // },
   
    // methods: {
    //   goto(path) {
    //     this.$router.push({
    //       path
    //     });
    //   }

    // }

  }

</script>

<style lang="scss">
  //  #app {
  //   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;
  //   margin-top: 60px;
  //   height: 100%;
  // } 
  // html,body,#app{
  //   width: 100%
  // }
  // body{
  //   // width: 100%;
  //   height: 100%;
  //   margin: 0;
  //   padding: 0;
  // }
  html,
  body {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body>div {
    height: 100%;
  }

  ul>li {
    list-style: none;
  }

  // .page{height:100%;}
  // .is-selected {
  //   .mint-tab-item-label {
  //     color: rgb(235, 88, 88)
  //   }
  // }

  // .mint-tabbar {
  //   position: fixed;
  // }

  // .mint-tab-item-label {
  //   font-size: 12px;

  //   .iconfont {
  //     font-size: 18px;
  //   }
  // }

</style>
