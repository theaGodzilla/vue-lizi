<template>
    <div id="page">
        <div id="header">
            <a href="javascript:;"><i class="iconfont icon-chakantiezifenxiang"></i></a>
            <div><input type="text" v-model="key"></div>
            <a href="javascript:;"><i class="iconfont icon-shouye"></i></a>
        </div>
        <!-- <mt-navbar v-model="selected">
            <mt-tab-item :id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar> -->
        <div id="Main">
            <ul>
                <li v-for="item in lists" :key="item.item_id" :id="item.item_id">
                    <a href="javascript:;" @click="goto('Detail',item)">
                        <div class="img_div">
                            <img :src="item.original_image" alt="">
                        </div>
                        <div class="lis_main">
                            <p class="name">{{item.name}}</p>
                            <p class="price">
                                <span class="new">￥{{item.jumei_price}}</span>
                                <del class="old" :style="{display:item.market_price?'block':'none'}">￥{{item.market_price}}</del>
                            </p>
                            <p class="sale"></p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
// import bus from '../assets/js/eventBus.js';
export default {
    data() {
        return {
            // props:['keyword'],
            selected:'',
            key:'',
            lists:[]
        }
    },
    methods:{
        goto(name,id){
            // console.log(this.$router);
            this.$router.push({path:name,query:{id:id.item_id,type:id.type}})
        }
    },
    created() {
        // bus.$off('keyword');
        // bus.$on("keyword",(arg)=>{
            // console.log(arg);//面霜
            let arg = this.$route.query.keyword;
            console.log(arg);
            this.key = arg;
            // console.log(arg);
            this.$axios.get(`/api/search/index?search=${arg}&ajax=get`)
            .then(res=>{
                // console.log(res);
                this.lists = res.data.data.item_list;
                console.log(this.lists);
            })
        // })
    },
    
}
</script>
<style scoped lang="scss">
.icon-shouye{
    font-size: rem(20px);
}
#header{
    display: flex;
    height: rem(45px);
    background: #ff666b;
    // line-height: rem(45px);
    font-size: rem(17px);
    a{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color:white;
        // text-align: center;
        i{
            font-size: rem(25px);
        }
    }
    div{
        flex: 5;
        text-align: center;
            display: flex;
    align-items: center;
        input{
        background: white;
        border-radius: rem(10px);
        padding: 0 rem(44px) 0 rem(10px);
        // width: 100%;
        height: rem(30px);
        }
    }
}

#Main{
    padding: 0 rem(10px);
    ul{
        li{
            margin-top: rem(10px);
            position: relative;
            background-color: #fff;
            padding: rem(10px);
            border-bottom: 1px solid #ccc;
            a{
                display: -webkit-box;
                width: 100%;
                color: #222;
                .img_div{
                    width: rem(100px);
                    height: rem(100px);
                    // max-width: rem(200px);
                    padding-right: reb(10px);
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .lis_main{
                    -webkit-box-flex: 1;
                    .name{
                        font-size: rem(15px);
                        // line-height: rem(18px);
                        margin-bottom: rem(15px);
                        // height: rem(35px);
                        overflow: hidden;
                        font-size: rem(15px);
                        // line-height: rem(19px);
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .price{
                        display: flex;
                        align-items: center;
                        margin-top: rem(20px);
                        span{
                            font-size: rem(16px);
                            margin-right: rem(10px);
                            color: #ff666b;
                        }
                        del{
                            font-size: rem(12px);
                            color: #999;
                        }
                    }
                    .sale{

                    }
                }
            }
        }
    }
}

</style>