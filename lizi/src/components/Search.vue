<template>
    <div>
        <div class="">
            <mt-header title="搜索">
                <router-link to="/home" slot="left">
                <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button class="iconfont icon-shouye" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="search_form">
            <div class="search">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" value=""  v-model="search" placeholder="搜索商品或品牌">
            </div>

            <div class="search_btn">
                <input type="button" value="搜索" @click="goto('Thelists')">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search:'',//搜索的关键词
            arr:[],//用于储存关键词条
        }
    },
    methods: {
        goto(name,id){
            //路由传参
            let obj = {id};
            obj.params = { keyword:this.search };//把搜索词传到列表页
            console.log(obj.params);
            // console.log(this.$router.options.routes[0].path);
            this.$router.push({path:name});
        }
    },
    created() {
        // this.search = input.value
    },
}
</script>

<style scoped lang="scss">
.iconfont{
    // font-weight: 700;
    font-size: rem(22px);
}
.mint-header{
    background: #ff666b;
    .mint-header-title{
        font-size: rem(22px);
    }
}
.search_form{
    padding: rem(10px);
    display: flex;
    .search{
        flex: 5;
        height: rem(46px);
        line-height: rem(40px);
        border-radius: rem(20px);
        color: #999;
        background: #f5f5f5;
        i{
            margin: 0 rem(4px) 0 rem(10px);
            line-height: rem(46px);
        }
    }
    .search_btn{
        flex: 1;
        input{
            width: rem(55px);
            height: rem(45px);
            color: #999;
        }
    }
}
    
    
</style>