<template>
    <div class="header">
      <ul>
          <li>
              <i class="iconfont icon-weibiaoti2fuzhi04"></i>
              <p>待付款</p>
          </li>
          <li>
              <i class="iconfont icon-daifahuo"></i>
              <p>待发货</p>
          </li>
          <li>
              <i class="iconfont icon-daishouhuofuben"></i>
              <p>待收货</p>
          </li>
          <li>
              <i class="iconfont icon-pingjia"></i>
              <p>待评价</p>
          </li>
          <li>
              <i class="iconfont icon-tuikuan"></i>
              <p>退款/售后</p>
          </li>
      </ul> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss" >
    .header{
        width: 100%;
        height: rem(50px);
        background: #fff;
        border-top: rem(3px) solid rgba(206, 180, 180, 0.692);
        color: rgb(78, 77, 77);
        ul{
            width: 100%;
            height: 100%;  
            li{
               width: 20%;
                height: 100%;
                text-align: center;
                float: left;
                font-size: rem(13px);
                font-weight: 100;
                i{
                    display: inline-block;
                    margin-top: rem(5px);
                    font-size: rem(22px);
                    color: rgb(182, 177, 177);
                } 
            }  
        }
    }
</style>