<template>
  <div class="tabbar">
    <mt-tabbar v-model="selected">
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
        <div class="iconfont" :class="tab.icon"></div>
        {{tab.text}}
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>
<script>
  export default {
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
        selected: ''
      }
    },
    methods: {
      goto(path) {
        this.$router.push({
          path
        });
      }

    },
    created() {
      // console.log(this.$route)
      let path = this.$route.name;
      this.selected = path;
      // console.log(this.selected )
    },

  }

</script>

<style lang="scss">
  .tabbar {

    .is-selected {
      .mint-tab-item-label {
        color: rgb(235, 88, 88)
      }

      .mint-tabbar {
        position: fixed;
        height: 100%;
      }

    }


    .mint-tab-item-label {
      font-size: rem(12px);

      .iconfont {
        font-size: rem(18px);
      }
    }
  }

</style>
