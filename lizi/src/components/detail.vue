<template>
    <div id="container">
        <div id="page">
            <header>
                <mt-header :title="lists.short_name">
                    <mt-button icon="back" slot="left"></mt-button>
                    <mt-button class="iconfont icon-shouye" slot="right"></mt-button>
                </mt-header>
            </header>
            <main>
                <div class="con-img">
                    <div class="main-img">
                        <img :src="lists.img" alt="">
                    </div>
                    <div class="slide-left-icon">
                        <img :src="thelist.area_icon_v2" alt="">
                    </div>
                </div>
                <div class="price">
                    <span>￥{{lists.jumei_price}}</span>
                    <span>价格详情</span>
                    <span>{{lists.buyer_number_text}}</span>
                </div>
                <div class="list-name">
                    <span>{{thelist.special_tags.jm_owner?thelist.special_tags.jm_owner:''}}</span>
                    {{thelist.qrshare_product_name}}
                </div>
                <div class="additional-info">
                    <div class="">
                        <label>运费</label>
                        <span>{{lists.freight.text}}</span>
                    </div>
                    <div>
                        <label>说明</label>
                        <span>{{lists.icon_tag[0].name}}</span>
                        <span>{{lists.icon_tag[1].name}}</span>
                        <span>{{lists.icon_tag[2].name}}</span>
                        <span>{{lists.icon_tag[3].name}}</span>
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lists:[],
            thelist:[]
        }
    },
    methods:{

    },
    created(){
        // console.log(this.$route);
        let id = this.$route.query.id;
        let type = this.$route.query.type;
        this.$axios.get(`/api/product/ajaxDynamicDetail?item_id=${id}&type=${type}`)
        .then(res=>{
            console.log(res.data.data.result);
            this.lists = res.data.data.result;
        });
        this.$axios.get(`/api/product/ajaxStaticDetail?item_id=${id}&type=${type}`)
        .then(res=>{
            console.log(res.data.data);
            this.thelist = res.data.data;
        })
    }
}
</script>
<style scoped lang="scss">
#page{
    display: flex;
    flex-direction: column;
    header{
        background: white;
        border-bottom: 1px solid #eee;
        .is-left{
            .mint-button{
                color: #ccc;
                font-size: rem(20px);
            }
        }
        .is-right{
            .icon-shouye{
                color: #ccc;
                font-size: rem(20px);
                font-weight: 700;
            }
        }
    }
    main{
        flex: 1;
        overflow: auto;
        .con-img{
            position: relative;
            .main-img{
                 width: 100%;
                height: rem(380px);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .slide-left-icon{
                width: rem(61px);
                height: rem(49px);
                position: absolute;
                top: 0;
                left: 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .price{
            padding:0 rem(10px);
        }
        .list-name{

        }
        .additional-info{
            
        }
    }
    footer{

    }
}
</style>