<template>
  <div class="page">
    <div class="cli-search">
      <mt-cell to='/Search'>
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

    <div class="center">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul class="left">
            <li v-for="(item,ind) in sortlist" :key="item.category_id" @click="sortItem(ind)" :class="{active: idx === ind}">{{item.name}}</li>
          </ul>
          <ul class="right">
            <li v-for="item in sub_categories" :key="item.category_id" @click="subItem(item.name)">{{item.name}}</li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-index-list>
            <mt-index-section v-for="(brands,letter) in indexBrands" :key="letter" :index="letter" >
              <mt-cell v-for="brand in brands" :key="brand.id" :title="brand.name"></mt-cell>
            </mt-index-section>
          </mt-index-list>

        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <!-- <mt-cell v-for="n in 6" :title="'选项 ' + n" /> -->
        </mt-tab-container-item>
      </mt-tab-container>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sortlist: [],
        sub_categories: [],
        idx: 0,
        selected: '1',
        indexBrands: {}
      }
    },
    methods: {
      sortItem(ind) {
        // console.log(ind)
        this.idx = ind;
        this.sub_categories = this.sortlist[ind].sub_categories;
        // console.log(this.sub_categories)
      },
      subItem(val) {
        console.log(val);
        // this.$router.push();
      }
    },
    created() {
      this.$axios.get('http://localhost:17171/jmproxy/Classifys').then(res => {
        // console.log(res.data.data);
        let {
          data
        } = res.data;
        // console.log(data)
        this.sortlist = data;
        this.sub_categories = data[0].sub_categories;
        // console.log(this.sortlist);
      })

      
      // 品牌分类
      this.$axios.get('http://localhost:17171/mjmproxy/CBrand?category_id=62&page=2&ajax=get').then(res => {
        // console.log(res);
        let {
          data
        } = res.data;
        // console.log(data.filter.brand);
        let indexBrand = {};

        // 以字母作为属性写入对象indexBrand
        'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('').forEach(letter => {
          indexBrand[letter] = [];
        }); //{A:[],B:[]....Z:[]}

        let items = data.filter.brand;
        // console.log(items)
        for (let item of items) {
          let {
            id,
            name,
            index
          } = item;

          if (typeof (indexBrand[item.index[0]]) != 'undefined') {
            indexBrand[item.index].push({
              id,
              name,
              index
            });
          }
          // indexBrand[item.index].push({
          //   id,
          //   name,
          //   index 
          // });
        }

        this.indexBrands = indexBrand;
        // console.log(this.indexBrands)

      }).catch(err => {
        console.log(err)
      })

    },
    

  }

</script>

<style lang="scss" >
  .page {
    display: flex;
    flex-direction: column;
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
          // color: #fff;
          border-bottom: 3px solid #fff;
          // text-decoration: underline;
          margin-bottom: 0;
          .mint-tab-item-label{
            color: white;
          }
        }
      }
    }

    .center {
      // height: 78%;
      flex: 1;
      overflow: hidden;
      // margin-top: rem(2px);
      background: #fff;

      .mint-tab-container {
        height: 100%;
        width: 100%;
        // float: left;

        .mint-tab-container-wrap {
          width: 100%;
          height: 100%;


          .mint-tab-container-item {
            width: 100%;
            font-size: rem(14px);

            .left {
              width: 33%;
              height: 100%;
              float: left;
              background: rgb(240, 238, 238);
              text-align: center;

              li {
                display: inline-block;
                width: 100%;
                min-height: rem(44px);
                line-height: rem(44px);
                // padding: rem(15px) 0 rem(15px) 0;
                // color: rgb(151, 149, 149);
              }
            }

            .right {
              float: right;
              width: 60%;
              height: 100%;
              overflow-y: scroll;
              overflow-x: hidden;
              font-size: rem(14px);

              li {
                width: 100%;
                min-height: rem(44px);
                line-height: rem(44px);
                padding-left: 5%;
              }
            }

            .active {
              background: #fff;
            }

            .mint-indexlist{
              height: 100%;
              .mint-indexlist-navitem{
                padding: 0 rem(6px);
              }
            }
          }


        }
      }


    }
  }

</style>
