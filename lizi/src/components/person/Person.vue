<template>
  <div class="page">
    <div class="mine_page">
      <div class="minetop">
        <i class="iconfont icon-shezhi"></i>
        <div class="photo">
          <p class="headimg" @click="goto"><img src="@img/photo.jpg" alt=""></p>
          <!-- <p class="headimg" @click="goto" :style="{display:isshowname?'inline-block':'none'}"><img src="@img/photo.jpg" alt=""></p> -->
          <p class="headdeg" @click="goto" :style="{display:isshowname?'none':'inline-block'}">点击登录账户</p>
          <p class="headdeg" :style="{display:isshowname?'inline-block':'none'}">{{user}}</p>
        </div>
      </div>
      <mine-list />
    </div>
  </div>
</template>

<script>

  import MineList from './MineList';

  export default {
    data() {
      return {
        user: '',
        headerphoto: '',
        isshowname: false,
      }
    },
    methods: {
      goto() {
        if (!this.isshowname) {
          // console.log(111);
          this.$router.push('/login')
        } else {
          // console.log(222)
        }
      }
    },
    components: {
      MineList
    },
    created() {
      // console.log(localStorage.getItem('name'));
      if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        // let slice = name.substr(3, 4)
        // let showname = name.replace(slice, '****');
        // console.log(showname);
        // let showname = parseInt(Math.random()*10000000);
        // console.log(Math.random().toString(36).substr(2));
        this.$axios.get('47.112.14.49:17171/checknickname',{
          params:{
            username:name
          }
        }).then(res=>{
          // console.log(res);
          let {data} = res.data;
          this.user = data.nickname;
          this.headerphoto = data.headerphoto;
          this.isshowname = true;
          localStorage.setItem('Nname',data);
        })
        
      }else{
        this.user = '';
        this.isshowname = false;
      }
    }
  }

</script>
<style scoped lang="scss" >
  .page {
    .mine_page {
      width: 100%;
      height: 100%;
      background: rgb(228, 227, 227);

      .minetop {
        width: 100%;
        height: 25%;
        background: url(../../images/mineback.jpg) no-repeat;
        background-size: cover;
        background-clip: content-box;
        position: relative;

        i {
          display: flex;
          position: absolute;
          right: rem(3px);
          top: rem(3px);
          color: #fff;
          font-size: rem(24px);
        }

        .photo {
          display: inline-block;
          position: relative;
          left: 50%;
          top: 50%;
          margin-top: rem(-50px);
          margin-left: rem(-50px);
          width: rem(100px);
          height: rem(120px);
          font-size: rem(12px);
          color: rgb(78, 77, 77);

          // padding-top: rem(15px);
          .headimg {
            width: 100%;
            height: rem(84px);
            margin-bottom: rem(5px);

            img {
              display: flex;
              width: rem(80px);
              height: rem(80px);
              border: rem(2px) solid rgba(216, 216, 216, 0.932);
              border-radius: 50%;
              box-shadow: 0 0 rem(5px) rgb(238, 236, 236);
            }
          }

          .headdeg {
            width: 100%;
            color: rgb(48, 37, 37);
            font-size: rem(13px);
            // height: rem(36px);
          }

        }

      }
    }
  }

</style>
