<template>
  <div class="page">
    <div class="cli-search">
      <mt-cell to=''>
        <span class="search-mer">
          <i class="iconfont icon-sousuo"></i>
          搜索品牌/商品
        </span>
      </mt-cell>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">分类</mt-tab-item>
        <mt-tab-item id="2">品牌</mt-tab-item>
        <mt-tab-item id="3">功效</mt-tab-item>
      </mt-navbar>
    </div>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n" /> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!-- <mt-cell v-for="n in 6" :title="'选项 ' + n" /> -->
      </mt-tab-container-item>
    </mt-tab-container>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: '1'
      }
    },
    created(){
        this.$axios.get('/jmapi/msapi/mall/allcategories.json').then(res=>{
          console.log(res)
        })
    }
    
  }
      
  
  

</script>

<style lang="scss">
  .cli-search {
    width: 100%;
    // height: 20%;
    background: rgb(235, 88, 88);

    .mint-cell {
      background: rgb(235, 88, 88);

      .mint-cell-value {
        width: 100%;

        .search-mer {
          display: inline-block;
          width: 95%;
          margin: rem(10px) rem(5px) rem(10px) rem(5px);
          background: #f19a8b;
          text-align: center;
          padding-top: rem(8px);
          padding-bottom: rem(5px);
          border-radius: rem(5px);
          color: #dedfa9da;
          letter-spacing: rem(2px);
        }

      }

    }

    .mint-navbar {
      background: none;
      color: #dedfa9da;

      .mint-tab-item-label {
        font-size: rem(16px);
      }

      .is-selected {
        color: #fff;
        border-bottom: 3px solid #fff;
        text-decoration: underline;
        margin-bottom: 0;
      }
    }
  }

</style>
