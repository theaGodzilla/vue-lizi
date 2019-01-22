<template>
    <div>
         <!-- 轮播图 -->
        <div id="banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="banner in Banner" :key="banner.key">
            <img :src="getImage(banner.image)">
            </mt-swipe-item>
        </mt-swipe>
        <!-- <img src="http://img.lizi.com/lizi/user/5923a571e4b0dac1dc1a3907/179a77571cd06.jpg" alt=""> -->
        </div>
        <!-- 一行小图标 -->
        <div id="navlist">
        <ul>
            <li v-for="Navlist in Navlists" :key="Navlist.name">
            <a href="">
                <img :src="getImage(Navlist.image)" alt="">
            </a>
            <p>{{Navlist.name}}</p>
            </li>
        </ul>
        </div>
        <!-- 热门活动 -->
        <div id="parthd">
        <strong>热门活动</strong>
        <span>POPULAR ACTIVITY</span>
        </div>
        <!-- 热门活动下面的产品图 -->
        <div id="partbd">
        <ul>
            <li v-for="partbd in Partbds" :key="partbd.name">
            <a href="">
                <img :src="getImage(partbd.picUrl)" alt="">
            </a>
            </li>
        </ul>
        </div>

        <!-- 人气单品标题 -->
        <div id="parthd">
        <strong>人气单品</strong>
        <span>HOT PRODUCT</span>
        </div>

        <!-- 人气单品列表 -->
        <div id="hotlist">
        <ul>
            <li v-for="hlis in Hotlist" :key="hlis.itemId">
            <a href="">
                <img :src="getImage(hlis.picSmall)" alt="">
                <h2>{{hlis.productTitle}}</h2>
                <p>{{hlis.recommend}}</p>
                <div class="price">
                <span>￥<em>{{hlis.proPrice}}</em></span>
                <del>￥{{hlis.marketPrice}}</del>
                <span>已售出：{{hlis.salesCount}}</span>
                </div>
                <div class="addcart">
                <span>加入购物车</span>
                </div>
            </a>
            </li>
        </ul>
        </div>

        <!-- <h1>丽子</h1> -->
        <router-view/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Banner:[],
            Navlists:[],
            Partbds:[],
            Hotlist:[],
        }
    },  
    methods: {
    // goto(name){
    //   let obj = {name};
    //   this.$router.push(obj);
    // },
    // getdata(){
    //   this.$axios.get("/dbapi/getIndexNavigator?_=1547221028227").then(res=>{
    //     // console.log(res.data.model);
    //     this.navs = res.data.model.list;
    //     console.log(this.navs);
    //     this.navs.unshift({'id':'ndckdnksv2312313fcsdfnks','mark':'','title':'丽子','type':'ITEM'});
    //     console.log(this.navs);
    //   })
    // },
    getImage(url){
        // console.log(url);
        // 把现在的图片连接传进来，返回一个不受限制的路径
        if(url !== undefined){
        let _u = url.substring(7);//http://
        // console.log(_u)
        // console.log(url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p'));
            return 'https://images.weserv.nl/?url='+_u;
            
        }
        
    }
  },
  created() {
    // this.getdata();
    
    this.$axios.get("/dbapi").then(res=>{
        // console.log(res.data.model);
        this.Banner = res.data.model.banners.list;
        // console.log(this.Banner);
        this.Navlists = res.data.model.menus.list;
        // console.log(this.Navlists);
        this.Partbds = res.data.model.sourceAdv.model;
        // console.log(this.Partbds);
    })
    this.$axios.get("/dbapi/recItems?max=10&url=%2FnewIndex%2FrecItems&id=&type=HOT&off").then(res=>{
        // console.log(res.data.model);
        this.Hotlist = res.data.model;

    })
  },
}

</script>
<style scoped lang="scss">
//轮播图
#banner{
  height: rem(201px);
  img{
    width: 100%;
    height: 100%;
  }
  .mint-swipe-indicators{
    .is-active{
      background: red;//???????????????????
    }
  }
  .mint-swipe-indicator{
    background: red;
  }
}
// 小图标导航
#navlist{
  width: 100%;
  ul{
    width: 100%;
    border: solid #eee;
    border-width: rem(5px) 0;
    overflow: hidden;
    li{
      float: left;
      width: 25%;
      padding: rem(5px) 0 rem(3px);
      text-align: center;
      a{
        display: block;
        text-align: center;
        width: rem(40px);
        height: rem(40px);
        padding-left: rem(20px);
        img{
          width: 100%;
          height: 100%;
    //  vertical-align: middle;
        }
      }
      p{
        padding: rem(5px) 0;
        font-size: rem(12px);
      }
    }
  }
}

//热门活动
#parthd{
  background: #f5f5f5;
  text-align: center;
  padding: rem(5px) 0;
  height: rem(32px);
  font-size: rem(21px);
  strong{
    // font-size: rem(16px);
  }
  span{
    font-size: rem(10px);
    color: #666;
    margin-left: rem(10px);
  }
}

//热门活动下面的产品图
#partbd{
  // width: 100%;
  background: #f5f5f5;
  padding: 0 rem(10px);
  ul{
    width: 100%;
    li{
      width: 100%;
      margin-bottom: rem(8px);
      a{
        display: block;
        width: 100%;
        img{
          width: 100%;
          height: rem(187px);
        }
      }
    }
  }
}

//人气单品列表
#hotlist{
  background: #f5f5f5;
  padding: 0 rem(10px);
  
  ul{
    li{
      background: white;
      border-bottom: solid 1px #f0f0f0;
      a{
        display: block;
        color: #222;
        padding-bottom: rem(15px);
        padding: 0 rem(25px);
        img{
          // margin: 0 auto;
          width: rem(250px);
          height: rem(250px);
        }
        h2{
          font-size: rem(14px);
          height: rem(23px);
          line-height: rem(23px);
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          padding: rem(5px) 0;
        }
        p{
          text-align: center;
          color: #bbb;
          font-size: rem(14px);
        }
        .price{
          text-align: center;
          color: #bbb;
          font-size: rem(14px);
          padding-top: rem(8px);
          span:nth-child(1){
            color: #ff666b;
            font-size: rem(20px);
            em{
              font-weight: 600;
              // font-size: rem(20px);
            }
          }
        }
        .addcart{
          text-align: center;
          padding-bottom: rem(8px);
          span{
            font-size: rem(14px);
                color: #fff;
                border-radius: rem(20px);
                background: #ff666b;
                display: inline-block;
                padding: rem(7px) rem(12px);
                box-shadow: 0 rem(2px) rem(8px) 0 #ff666b;
                margin-left: rem(10px);
          }
        }
      }
    }
  }
}

</style>