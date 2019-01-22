<template>
    <div class="page">
        <div id="main">
            <ul>
                <!-- <li v-for="item in Mainlist" :key="item.name">{{ item }}</li> -->
                <li v-for="item in Mainlist" :key="item.id">
                    <a href="">
                        <img :src="getImage(item.pic)" alt="">
                        <div class="info">
                            <h2>{{item.title}}</h2>
                            <p>
                                <span class="sale">已售出：{{item.salesCount}}</span>
                                <span class="oldprice">市场价：{{item.marketPrice}}</span>
                            </p>
                            <div class="price"><span>￥{{item.liziPrice}}</span><i class="iconfont icon-gouwu"></i></div>
                        </div>
                    </a>
                    
                </li>
            </ul>
        </div>
        <!-- 底部 -->
         <div id="footer">

        </div>
    </div>
</template>
<script>
import Vue from 'vue';
//懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default {
    data() {
        return {
            Mainlist:[]
        }
    },
    methods: {
        // loadMore() {
        //     this.loading = true;
        //     setTimeout(() => {
        //         let last = this.Mainlist[this.Mainlist.length - 1];
        //         for (let i = 1; i <= 2; i++) {
        //             this.Mainlist.push(last + i);
        //         }
        //         this.loading = false;
        //     }, 2500);
        // },
        getImage(url){
        // 把现在的图片连接传进来，返回一个不受限制的路径
        if(url !== undefined){
        let _u = url.substring(7);//http://
            return 'https://images.weserv.nl/?url='+_u;
            
        }
        
    }
    },
    created() {
        this.$axios.get("/dbapi/getItemDetailList?max=10&url=%2FnewIndex%2FgetItemDetailList&id=5767c678e4b0edc8bf0af2c1&type=ITEM&offset=0")
        .then(res=>{
            // console.log(res.data.model.data);
            this.Mainlist = res.data.model.data;//懒加载五条
            // console.log(this.Mainlist);
        })
    },
}
</script>
<style scoped lang="scss">
#main{
    padding: rem(10px);
    background: #f5f5f5;
    ul{
        margin-bottom: rem(-10px);
        li{
            margin-bottom: rem(10px);
            padding: rem(6px);
            background: #fff;
            box-shadow: 0 0 rem(3px) 0 rgba(0,0,0,.1);
            border-radius: rem(2px);
            border: 1px solid #fff;
            a{
                display: flex;
                color: #333;
                img{
                    width: rem(100px);
                    height: rem(100px);
                    // float: left;
                }
                .info{
                    // float: left;
                    flex: 1;
                    padding: rem(7px);
                    h2{
                        height: rem(35px);
                        overflow: hidden;
                        padding: rem(5px) 0;
                        font-size: rem(12px);
                        font-weight: 400;
                    }
                    p{
                        display: flex;

                        span{
                            flex: 1;
                            font-size: rem(12px);
                            color: gray;
                        }
                    }
                    .price{
                        display: flex;
                        padding-top: rem(5px);
                        span{
                            flex: 1;
                            color: #fd686e;
                            font-size: rem(16px);
                        }
                        i{
                            flex: 1;
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
}
#footer{
    height: rem(200px);
}
</style>