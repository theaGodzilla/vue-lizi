<template>
  <div id="App" class="container">
    <router-view />
    <table class="floor">
      <tr>
        <td :style="{display:cartshow?'block':'none'}">
          <car-bottom />
        </td>
      </tr>
      <tr>
        <td :style="{display:barshow?'block':'none'}">
        <footer>
          <mt-tabbar v-model="selected">
            <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
              <div class="iconfont" :class="tab.icon"></div>
              {{tab.text}}
            </mt-tab-item>
          </mt-tabbar>
        </footer>
          
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import Vue from 'vue';
import MintUI from 'mint-ui';
import "mint-ui/lib/style.css";
Vue.use(MintUI);

import axios from 'axios';
Vue.prototype.$axios = axios;

import CarBottom from './components/cart/CarBottom';

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
      tabs: [{
          text: '首页',
          icon: 'icon-shouye',
          path: '/home',
          name: 'Home'
        }, {
          text: '分类',
          icon: 'icon-fenlei',
          path: '/classify',
          name: 'Classify'
        }, {
          text: '宝贝',
          icon: 'icon-iconquanzinor',
          path: '/circle',
          name: 'Circle'
        }, {
          text: '购物车',
          icon: 'icon-gouwu',
          path: '/cart',
          name: 'Cart'
        }, {
          text: '我的',
          icon: 'icon-my',
          path: '/person',
          name: 'Person'
        }],
        selected: '',
        cartshow: false,
        barshow: true
      // url:''
    }
  },
  methods: {
    goto(path){
      this.$router.push({path});
    }
  },
  created(){
    // console.log(this.$route);
    // if( this.$route.name == 'Lizi' || 'Top' ){
    //   this.selected = 'Home';
    // }else{
    //   this.selected =this.$route.name;
    // }
    // console.log(this.$route)
      let path = this.$route.name;
      this.selected = path;
      // console.log(this.selected)
      if (this.selected === 'Cart') {
        this.cartshow = true;
      } else {
        this.cartshow = false;
      }
      if (this.$route.name === 'Login' || this.$route.name === 'Reg' || this.$route.name === 'Classify' || this.$route.name === 'Circle') {
        this.barshow = false;
      } else {
        this.barshow = true;
      }
       if (this.$route.name === 'Lizi' || this.$route.name === 'Top') {
        this.selected = 'Home';
      }

  },
  watch: {
      '$route': function (to, from) {
        // console.log(to.name);
        let path = to.name;
        this.selected = path;
        if (to.name === 'Login' || to.name === 'Reg' || this.$route.name === 'Classify' || this.$route.name === 'Circle') {
          this.barshow = false;
        } else {
          this.barshow = true;
        }
        if (to.name === 'Lizi' || to.name === 'Top') {
          this.selected = 'Home';
        } 
        if (to.name === 'Cart') {
          this.cartshow = true;
        } else {
          this.cartshow = false;
        }
      }
    },components: {
      CarBottom
    }
}

</script>

<style lang="scss">
.container{
  display: flex;
  flex-direction: column;
}
header{

}
main{
  flex: 1;
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
  font-size: rem(12px);
  .iconfont{
    font-size: rem(18px);
  }
}

  .floor {
    width: 100%;
    // height: rem(80px);
    height: auto;
    overflow: hidden;
    // display: flex;
    position: fixed;
    bottom: 0;
    clear: both;
    background: #fff;
    border-collapse: collapse;

    tr {
      width: 100%;
      // height: 50%;
      height: auto;
      overflow: hidden;
      margin: 0;
      white-space: normal;
      border-collapse: collapse;
      border: none;

      td {
        width: 100%;
        // height: 50%;
        height: auto;
        overflow: hidden;

        .is-selected {
          .mint-tab-item-label {
            color: rgb(235, 88, 88)
          }
        }

        .mint-tabbar {
          // position: fixed;
          height: auto;
          overflow: hidden;
          position: inherit;
        }


        .mint-tab-item-label {
          font-size: rem(12px);

          .iconfont {
            font-size: rem(18px);
          }
        }
      }
    }
  }

</style>

