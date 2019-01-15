<template>
  <div id="Home" class="page">
    
    <!-- 头部导航 -->
    <div id="header">
        <div id="headerdiv">
          <mt-header title="丽子美妆">
            <router-link to="/" slot="left" class="iconfont icon-my">
            </router-link>
            <mt-button icon="search" slot="right" @click="goto('Search')"></mt-button>
          </mt-header>
          <div class="heabottom">
            <mt-navbar v-model="selected">
              <mt-tab-item v-for="nav in navs" :id="nav.id"
                :key="nav.title" 
                @click.native="to(nav.id)"
                >
                <span>{{nav.title}}</span>
              </mt-tab-item>
            </mt-navbar>
          </div>
      </div>
    </div>
    <router-view/>
   

    <!-- 底部 -->
    <!-- <div id="footer">

    </div> -->
  </div>
</template>

<script>
export default {
  name:'Home',
  data() {
    return {
      navs:[],
      selected:'ndckdnksv2312313fcsdfnks',
    };
  },
  methods: {
    goto(name){
      // let obj = {name};
      // console.log(this.$route.matched[0].path);
      // let path = this.$route.matched[0].path.replace('/home','/');
      // console.log(path);
      console.log(this.$router.options.routes[0].path);
      this.$router.push({path:this.$router.options.routes[0].path+name});
    },
    to(name){
      // console.log(obj)
      this.$router.push({path:'/home/'+name});
      console.log(this.$router);
    },
    getdata(){
      this.$axios.get("/dbapi/getIndexNavigator?_=1547221028227").then(res=>{
        // console.log(res.data.model);
        this.navs = res.data.model.list;
        // console.log(this.navs);
        this.navs.unshift({'id':'ndckdnksv2312313fcsdfnks','mark':'','title':'丽子','type':'ITEM'});
        // console.log(this.navs[0].id);
        // this.selected = this.navs[0].id;
      })
    }
  },
  // beforeCreate() {
  //   
  // },
  created() {
    this.getdata();
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.iconfont{
  font-weight: 700;
}

#header{
  position: relative;
  height: rem(87px);
}

#headerdiv{
  height: rem(87px);
  position: fixed;
  z-index: 1;
  width: 100%;
}

.heabottom{
  height: rem(37px);
  background: white;
  box-shadow: 1px 1px 1px #ccc;
  overflow-x: scroll;
  font-size: rem(14px);

    // height: rem(40px);
    .mint-navbar{
      width: rem(660px);
      height: 100%;
      display: block;
      .mint-tab-item{
        float: left;
        margin: rem(10px) rem(10px) 0 rem(10px);
        // line-height: rem(34px);
        padding:0 0 rem(10px) 0;
        
      }
      .is-selected{
          // border-color:;
          border-bottom: 2px solid #ff666b;
        }
    }
  
  
}
.heabottom::-webkit-scrollbar{
  display: none;
}

.mint-header{
  height: rem(44px);
  font-size: rem(18px);
  font-weight: unset;
  background: #ff666b;
}
.mintui-search{
  font-size: rem(18px);
}




//底部
#footer{
  height: rem(100px);
}

</style>
