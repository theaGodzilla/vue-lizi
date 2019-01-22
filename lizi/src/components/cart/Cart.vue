<template>
  <div class="page">
    <div class="cart_page">
      <mt-header title="购物车(10)">
      </mt-header>
      <div class="cart-center">
        <div class="store">
          <input type="checkbox" name="" class="checkdian" id="check" @click="all">
          <label for="check"></label>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dianpu1"></use>
          </svg>
          <span class="storename">丽子自营</span>
          <span class="fuhao">></span>
        </div>

        <cart-list />
      </div>
    </div>

  </div>
</template>

<script>
  import bus from '../../assets/js/eventBus.js';
  import CartList from './CartList';
  export default {
    data(){
      return {
        // turecheck:false,
      }
    },
    methods:{
      all(){
        // this.turecheck = !this.turecheck;
        // console.log($('#check').prop('checked'));
        var allshop = $('#check').prop('checked');
        // if( allshop ){
          bus.$emit('allshop',allshop);
        // }else{
          // bus.$emit('allshop',this.turecheck);
        // }
      }
    },
    created(){
      //大全选
      // bus.$off('bigcheck');
      bus.$on('bigcheck',checktar=>{
        console.log(checktar);
        console.log(666);
        // if(checktar){
        //   console.log($('.checkdian'));
        //    $('.checkdian').prop('checked',true);
        // }else{
        //   console.log($('.checkdian'));
        //   $('.checkdian').prop('checked',false);
        // }
        
      })
    },
    
    components: {
      CartList,
    },
    
  }

</script>

<style scoped lang="scss">
.page{
  background: #ecebeb;

  .cart_page {
    width: 100%;
    height: auto;
    overflow: hidden;
    background: rgb(236, 235, 235);
    position: relative;

    .mint-header {
      background: rgb(235, 88, 88);
      font-size: rem(20px);
      font-weight: 100;
      height: 8%;
      width: 100%;
      top: 0;
      position: fixed;
      z-index: 222;

      h1 {
        border-bottom: rem(1px) solid #fff;
        flex: none;
        font-size: rem(15px);
      }
    }

    .cart-center {
      width: 95%;
      margin-left: rem(10px);
      margin-right: rem(10px);
      background: #fff;
      border-radius: rem(10px);
      // margin-top: 20%;
      height: auto;
      overflow: hidden;
      position: relative;
      margin-top: 18%;
      margin-bottom: 35%;

      .store {
        height: rem(50px);
        line-height: rem(50px);
        position: relative;
        font-size: rem(13px);
        font-weight: 100;

        .fuhao {
          display: inline-block;
          width: rem(20px);
          height: 100%;
          line-height: rem(50px);
          font-size: rem(14px);
          font-family: '宋体';
          margin-left: rem(5px);
          color: #7e7c7c;
          font-weight: bold;
        }

        .icon {
          width: rem(15px);
          height: rem(15px);
          margin-left: rem(5px);
          position: absolute;
          top: rem(17px);
        }

        .storename {
          margin-left: rem(25px);
        }
      }

      input {
        display: inline-block;
        border-radius: 50%;
        width: rem(11px);
        height: rem(11px);
        text-align: center;
        vertical-align: middle;
        line-height: rem(11px);
        position: relative;
        margin-left: rem(10px);
        top: rem(20px);
        float: left;

        &::before {
          content: "";
          position: absolute;
          width: rem(13px) !important;
          height: rem(13px) !important;
          top: rem(-2px);
          left: rem(-2px);
          background: #fff;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: rem(1px) solid #7e7c7c;
        }

        &:checked::before {
          content: "\2713";
          background-color: #fff;
          position: absolute;
          top: rem(-2px);
          left: rem(-2px);
          width: 100%;
          border: rem(1px) solid #e50232;
          color: #e50232;
          font-size: rem(20px);
          border-radius: 50%;
          font-weight: bold;
        }

      }




    }
  }

  .fixfloor {
    position: fixed;
    bottom: rem(45px);
    width: 100%;
    height: auto;
    overflow: hidden;
    clear: both;

    // overflow: hidden;
    p {
      height: 45%;
      &:nth-child(1){
        height: 55%;
        // padding-bottom:  rem(10px);
        
      }
        .mint-tabbar {
          height: 100%;
          bottom: unset;
        }
      }
    }
}  

</style>
