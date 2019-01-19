<template>
  <div class="page" id="Circle">
    <!-- 头部导航 -->
    <div id="header">
      <div id="headerdiv">
        <mt-header title="丽子美妆">
          <router-link to="/" slot="left" class="iconfont icon-my"></router-link>-->
          <mt-button icon="search" slot="right" @click="goto('Search')"></mt-button>
        </mt-header>
        <div class="heabottom">
          <mt-navbar v-model="selected">
            <mt-tab-item
              v-for="(nav,index) in arr"
              :id="index"
              :key="index"
              @click.native="to(nav.path)"
            >
              <span>{{nav.text}}</span>
            </mt-tab-item>
          </mt-navbar>
        </div>
      </div>
      <!-- <router-view></router-view> -->
    </div>
   

    <!-- 内容模块 -->
    <div class="partbd">
      <ul class="product_list" id="search_list">
        <li v-for="item in goodslist" :key="item.goods_id">
          <a href="#">
            <div class="pic">
              <img :src="item.image_url_set.dx_image[320]">
            </div>
            <div class="info">
              <p class="name">{{item.middle_name}}</p>
              <p class="price">
                <span class="now">{{item.jumei_price}}</span>
                <del class="old">{{item.market_price}}</del>
              </p>
              <p class="sale">{{item.product_desc}}
                <i class="iconfontfa fa-shopping-bag" aria-hidden="true"></i>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Circle",
  data() {
    return {
      selected: "/number",
      // active: 0,
      arr: [
        { text: "销量", name: "number", path: "number" },
        { text: "人气", name: "hold", path: "hold" },
        { text: "价格", name: "price", path: "price" }
      ],
      goodslist: [],
      page:1
    };
  },
  methods: {
    goto(name) {
      // let obj = {name};
      // console.log(this.$route.matched[0].path);
      // let path = this.$route.matched[0].path.replace('/home','/');
      // console.log(path);
      // console.log(this.$router.options.routes[0].path);
      this.$router.push({ path: this.$router.options.routes[0].path + name });
    },
    to(name) {
      // console.log(obj)
      this.$router.push({ path: name });
      // console.log(this.$router);
    },
    getdata() {
      this.$axios.get("/dbapi/getIndexNavigator?_=1547221028227").then(res => {
        // console.log(res.data.model);
        this.navs = res.data.model.list;
        // console.log(this.navs);
        this.navs.unshift({
          id: "ndckdnksv2312313fcsdfnks",
          mark: "",
          title: "丽子",
          type: "ITEM"
        });
        // console.log(this.navs[0].id);
        this.selected = this.navs[0].id;
      });
    },
    //bpi/index.php?act=goods&op=goods_list&keyword=&page=10&curpage=1
    getmain() {
      this.$axios
        .get(`/api/index?&page=${this.page}&ajax=get`)//,{params:{act:'goods',op:'item_list',keyword:'',page:10,curpage:1}
        .then(res => {
          // console.log(res.data.data.item_list);
          // this.item_list = res.data.data.item_list;
          this.goodslist = res.data.data.item_list;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // beforeCreate() {
  //
  // },
  created() {
    this.getdata();
    this.getmain();
     window.onscroll = () => {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight; //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        this.page = this.page + 1;
        this.$axios
          .get(`/api/index?&page=${this.page}&ajax=get`)
          .then(res => {
            // console.log(res.data.data);
            if (res.data.data.item_list.length == 0) {
              return false;
            } else {
              this.goodslist = this.goodslist.concat(res.data.data.item_list);
            }
          })
          .catch(error => {
            console.log("error", error);
          });
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body{
  *{
    margin: 0;padding: 0;
  }
}
.iconfont {
  font-weight: 700;
}

#header {
  position: relative;
  height: rem(87px);
}

#headerdiv {
  height: rem(87px);
  position: fixed;
  z-index: 1;
  width: 100%;
}

.heabottom {
  height: rem(37px);
  background: white;
  box-shadow: 1px 1px 1px #ccc;
  overflow-x: scroll;
  font-size: rem(14px);

  // height: rem(40px);
  .mint-navbar {
    width: 100%;
    height: 100%;
    display: block;
    display: flex;
    .mint-tab-item {
      float: left;
      margin: rem(10px) rem(10px) 0 rem(10px);
      // line-height: rem(34px);
      padding: 0 0 rem(10px) 0;
    }
    .is-selected {
      // border-color:;
      border-bottom: 2px solid #ff666b;
    }
  }
}
.heabottom::-webkit-scrollbar {
  display: none;
}

.mint-header {
  height: rem(44px);
  font-size: rem(18px);
  font-weight: unset;
  background: #ff666b;
}
.mintui-search {
  font-size: rem(18px);
}

.partbd {
  padding: 0 10px;
  // background: #ddd;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    // padding-inline-start: 40px;
    li {
      display: list-item;
      height: 100px;
      text-align: -webkit-match-parent;
      margin-bottom: 10px;
      // background: white;
      border-bottom: 1px solid #ddd;
      .pic {
        width: 90px;
        height: 90px;
        float: left;
        max-width: 200px;
        padding-right: 10px;
        img{
          width: 90px;
          height: 90px;
        }
      }
      .info {
        -webkit-box-flex: 1;
        color: black;
        // float: right;
      }
    }
  }
}

//底部
#footer {
  height: rem(100px);
}
</style>
