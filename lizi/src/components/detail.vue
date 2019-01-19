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
                        <!-- lists.image_url_set.single_many[0][0] -->
                        <img :src="lists.img" alt="">
                    </div>
                    <div class="slide-left-icon">
                        <img :src="thelist.area_icon_v2?thelist.area_icon_v2:thelist.tag" alt="">
                    </div>
                </div>
                <div class="price">
                    <span class="cur_price">￥{{lists.jumei_price}}</span>
                    <del class="cost_price">￥{{lists.market_price}}</del>
                    <span class="detail_text">价格详情</span>
                    <span class="cur_num">{{lists.buyer_number_text}}</span>
                </div>
                <div class="normal_desc">
                    <span class="desc_iconv2">{{thelist.special_tags?thelist.special_tags.jm_owner:''}}</span>
                    {{thelist.qrshare_product_name}}
                </div>
                <!-- 说明和运费 -->
                <div class="additional-info">
                    <div class="postage-wrap">
                        <label>运费</label>
                        <span class="">{{lists.freight?lists.freight.text:''}}</span>
                    </div>
                    <div class="introduction-wrap">
                        <label>说明</label>
                        <span v-for="item in lists.icon_tag" :key="item.label" :style="{display:item.name?'inline-block':'none'}"><i class="iconfont icon-pingjia"></i>{{item.name}}</span>
                    </div>
                </div>
                <!-- 型号分类 -->
                <div class="page_sku_wrapper">

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
            padding:rem(15px) rem(14px) 0 rem(14px); 
            height: rem(33px);
            .cur_price{
                float: left;
                color: #f33873;
                font-size: rem(28px);
                line-height: rem(33px);
            }
            .cost_price{
                float: left;
                color: #666;
                font-size: rem(13px);
                margin-left: rem(8px);
                margin-top: rem(8px);
            }
            .detail_text{
                float: left;
                color: #666;
                font-size: rem(15px);
                margin-left: rem(8px);
                line-height: rem(33px);
            }
            .cur_num{
                float: right;
                line-height: rem(33px);
            }
        }
        .normal_desc{
            line-height: rem(26px);
            padding: rem(15px) rem(14px) rem(10px) rem(14px);
            // line-height: rem(12px);
            font-size: rem(15px);
            // width: 20rem;
            // -webkit-box-sizing: border-box;
            box-sizing: border-box;
            .desc_iconv2{
                margin-right: rem(4px);
                color: white;
                font-size: rem(10px);
                padding: 1px rem(4px);
                background: #fe4070;
                border-radius: rem(4px);
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }

        }
        .additional-info{
            padding: 0 rem(14px) rem(10px) rem(14px);
            label{
                line-height: rem(13px);
                width: 22%;
                color: #999;
                display: inline-block;
                font-size: rem(15px);
                // vertical-align: top;
                text-align: center;
                float: left;
                padding: rem(12px) 0;
            }
            .postage-wrap{
                border-bottom: 1px solid #eee;
                padding: rem(8px) 0;
            }
            .introduction-wrap{
                padding: rem(8px) 0;
                span{
                    padding-right: rem(8px);
                    .icon-pingjia{
                        color: #f33873;
                    }
                }
            }
            
        }
        .page_sku_wrapper{
            padding: rem(15px) 0;
            background: #eee;
        }
    }
    footer{
        height: rem(44px);
        width: 100%;
    }
}
</style>