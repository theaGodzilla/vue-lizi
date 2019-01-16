<template>
    <div>
        <div id="header">
            <a href="javascript:;"><i class="iconfont icon-chakantiezifenxiang"></i></a>
            <div><input type="text" v-model="key">{{key}}</div>
            <a href="javascript:;"><i class="iconfont icon-shouye"></i></a>
        </div>
        <!-- <mt-navbar v-model="selected">
            <mt-tab-item :id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar> -->
        <div id="Main">
            <ul>
                <li v-for="item in lists" :key="item.item_id">
                    <a href="">
                        <div class="img_div">
                            <img :src="item.original_image" alt="">
                        </div>
                        <div class="lis_main">
                            <p class="name">{{item.name}}</p>
                            <p class="price"></p>
                            <p class="sale"></p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import bus from '../assets/js/eventBus.js';
export default {
    data() {
        return {
            // props:['keyword'],
            selected:'',
            key:'',
            lists:[]
        }
    },
    created() {
        bus.$on("keyword",(arg)=>{
            // console.log(arg);//面霜
            this.key = arg;
            // console.log(this.key);
            this.$axios.get(`/api?search=${arg}&ajax=get`)
            .then(res=>{
                // console.log(res);
                this.lists = res.data.data.item_list;
                console.log(this.lists);
            })
        })
        
        
        
    },
    
}
</script>
<style scoped lang="scss">
.icon-shouye{
    font-size: rem(20px);
}
#header{
    display: flex;
    height: rem(48px);
    background: #ff666b;
    line-height: rem(48px);
    a{
        flex: 1;
        display: block;
        color:white;
        text-align: center;
        i{
            font-size: rem(25px);
        }
    }
    div{
        flex: 5;
        text-align: center;
        input{
        background: white;
        border-radius: rem(10px);
        padding: 0 rem(44px) 0 rem(10px);
        // width: 100%;
        height: rem(32px);
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
            a{
                display: -webkit-box;
                width: 100%;
                .img_div{
                    width: rem(80px);
                    height: rem(80px);
                    max-width: rem(200px);
                    padding-right: reb(10px);
                }
                .lis_main{
                    -webkit-box-flex: 1;
                    .name{
                        font-size: rem(15px);
                        line-height: rem(18px);
                        margin-bottom: rem(15px);
                        height: rem(35px);
                        overflow: hidden;
                    }
                    .price{

                    }
                    .sale{

                    }
                }
            }
        }
    }
}

</style>