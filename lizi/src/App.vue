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
          <mt-tabbar v-model="selected">
            <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
              <div class="iconfont" :class="tab.icon"></div>
              {{tab.text}}
            </mt-tab-item>
          </mt-tabbar>
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

  // import "./sass/common.scss";

  import axios from "axios";
  Vue.prototype.$axios = axios;

  import CarBottom from './components/cart/CarBottom';

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
      }
    },
    methods: {
      goto(path) {
        // console.log(path)
        this.$router.push({
          path
        });
      },
    },
    created() {
      // console.log(this.$route)
      let path = this.$route.name;
      this.selected = path;
      // console.log(this.selected)
      if (this.selected === 'Cart') {
        this.cartshow = true;
      } else {
        this.cartshow = false;
      }
      if (this.$route.name === 'Login' || this.$route.name === 'Reg') {
        this.barshow = false;
      } else {
        this.barshow = true;
      }
    },
    watch: {
      '$route': function (to, from) {
        // console.log(to.name);
        let path = to.name;
        this.selected = path;
        if (to.name === 'Login' || to.name === 'Reg') {
          this.barshow = false;
        } else {
          this.barshow = true;
        }
        if (to.name === 'Cart') {
          this.cartshow = true;
        } else {
          this.cartshow = false;
        }
      }
    },
    components: {
      CarBottom
    }

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
