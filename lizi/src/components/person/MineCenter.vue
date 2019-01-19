<template>
  <div class="center">
    <table>
      <tbody>
        <tr>
          <td>
            <router-link to="">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gerenzhongxin_wodeshoucang"></use>
            </svg>
            </router-link>
            <p>我的收藏</p>
          </td>
          <td>
            <router-link to="">
            <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-youhuiquan"></use>
            </svg>
            </router-link>
            <p>我的优惠券</p>
          </td>
          <td>
            <router-link to="">
            <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-jiaoya"></use>
            </svg>
            </router-link>
            <p>我的足迹</p>
          </td>
        </tr>
        <tr>
          <td>
            <router-link to="">
            <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-xiaoxi"></use>
            </svg>
            </router-link>
            <p>我的消息</p>
          </td>
          <td>
            <router-link to="">
            <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-yaoqing"></use>
            </svg>
            </router-link>
            <p>邀请新用户</p>
          </td>
          <td>
            <router-link to="">
            <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-wodedizhi"></use>
            </svg>
            </router-link>
            <p>我的地址</p>
          </td>
        </tr>
        <tr>
          <td>
            <router-link to="">
              <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-bangzhuyufankui"></use>
              </svg>
            </router-link>
            <p>意见反馈</p>
          </td>
          <td>
            <router-link to="">
            <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-changjianwenti"></use>
            </svg>
            </router-link>
            <p>常见购物问题</p>
          </td>
          <td>
            <router-link to="">
            <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-iconsheji-"></use>
            </svg>
            </router-link>
            <p>联系平台</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

  export default {
      methods:{
          
      }
  }

</script>
<style lang="scss">
  .center {
    width: 100%;
    height: 80%;
    
    table{
        width: 100%;
        height: 100%;
        font-size: rem(13px);
        border: rem(1px) solid rgb(197, 193, 193);
        border-left: none;
        border-right: none;
        border-collapse: collapse;
        tr{
            width: 100%;
            height: 30%;
            background: #fff;
            border: rem(1px) solid rgb(197, 193, 193);
            border-left: none;
            border-right: none;
            td{
                width: 33%;
                height: 30%;
                border: rem(1px) solid rgb(197, 193, 193);
                text-align: center;
                &:nth-child(1){
                    border-left: none;
                }
                &:nth-child(3){
                    border-right: none;
                }
                .icon{
                    width: rem(25px);
                    height: rem(25px);
                }
            }

        }
    }
  }

</style>
