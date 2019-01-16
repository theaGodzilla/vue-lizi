<template>
  <div id="App" class="container">
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
        <div class="iconfont" :class="tab.icon"></div>
        {{tab.text}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import MintUI from 'mint-ui';
import "mint-ui/lib/style.css";
Vue.use(MintUI);

import axios from 'axios';
Vue.prototype.$axios = axios;

//请求拦截（拦截器）
import { Indicator } from 'mint-ui';
 axios.interceptors.request.use(
      config => {
        Indicator.open();
        // console.log('config:',config);
        // config.params.token = '10086';
        return config
    }, error => {
        Indicator.close();
        return Promise.reject(error)
    })
    // http响应拦截器
    axios.interceptors.response.use(data => {
        // 响应成功关闭loading
        Indicator.close();
        return data
    }, error => {
        Indicator.close();
        return Promise.reject(error)
  })

export default {
  name: 'App',
  data() {
    return {
      tabs:[
        {
            text:'首页',
            icon:'icon-shouye',
            path:'/home',
            name:'Home'
        },{
            text:'分类',
            icon:'icon-fenlei',
            path:'/list',
            name:'List'
        },{
            text:'宝贝',
            icon:'icon-iconquanzinor',
            path:'/circle',
            name:'Circle'
        },{
            text:'购物车',
            icon:'icon-gouwu',
            path:'/cart',
            name:'Cart'
        },{
            text:'我的',
            icon:'icon-my',
            path:'/person',
            name:'Person'
        }
      ],
      selected:'Home'
    }
  },
  methods: {
    goto(path){
      this.$router.push({path});
    }
  },
   

}
</script>

<style lang="scss">

html,body{height:100%;}
*{margin:0;padding:0;}
body>div{height:100%;}
.is-selected{
  .mint-tab-item-label{
    color: rgb(235, 88, 88)
  }
}
.mint-tabbar{
  position: fixed;
}
.mint-tab-item-label{
  font-size: 12px;
  .iconfont{
    font-size: 18px;
  }
}
</style>
