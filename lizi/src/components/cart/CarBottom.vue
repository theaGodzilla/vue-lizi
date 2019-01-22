<template>
  <!-- <div class="f_page"> -->
    <div class="cartbottom">
     <div class="left">
        <input type="checkbox" class="bigcheck" name="" @click="allche">
        <label for="check"></label>
        <span class="allchecked">全选</span>
     </div>
      <div class="right">
        <span class="total">合计:</span>
        <span class="totalprice"><b>￥</b>0</span>
        <span class="account">结算(0)</span>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
import bus from '../../assets/js/eventBus.js';
  export default {
    data(){
      return {

      }
    },
    methods:{
      allche(){
        // console.log($('.bigcheck').prop('checked'));
        var checkok = $('.bigcheck').prop('checked');
        bus.$emit('bigcheck',checkok);
      }
    },
  }

</script>
<style scoped lang="scss">
// .f_page{
// height: 100%;
// position: fixed;
// bottom: 0;

  .cartbottom {
    display: flex;
    // position: fixed;
    // bottom: rem(40px);

    width: 100%;
    z-index: 222;
    height: auto;
    overflow: hidden;
    line-height: rem(43px);
    border: rem(1px) solid #fff;
    background: #fff;
    font-size: rem(13px);
    font-weight: 100;
    color: #000;
    clear: both;
    border: none;

    .left{
      // float: left;
      flex: 1;
      width: 55%;
      display: flex;
      .bigcheck {
        display: inline-block;
        border-radius: 50%;
        width: rem(11px);
        height: rem(11px);
        text-align: center;
        vertical-align: middle;
        line-height: rem(12px);
        position: relative;
        margin-left: rem(10px);
        top: rem(15px);
        // float: left;
        background: none;

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

    .allchecked {
      margin-left: rem(5px);
    }
    }

    .right {
      // float: right;
      margin-right: rem(10px);
    }

    // .total{
    //     // float: right;
    // }
    .totalprice {
      color: rgb(226, 51, 51);

      b {
        font-size: rem(11px);
      }
    }

    .account {
      display: inline-block;
      margin-left: rem(10px);
      height: rem(30px);
      line-height: rem(30px);
    //   margin-bottom: rem(5px); 
      background: #f5581a;
      padding: 0 rem(15px) 0 rem(15px);
      color: #fff;
      border-radius: rem(14px);
    }


  }
// }
</style>
