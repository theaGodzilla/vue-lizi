<template>
    <div id="container">
        <div id="page">
            <header>
                <mt-header :title="lists.short_name">
                    <mt-button icon="back" slot="left" @click="$router.back(-1)"></mt-button>
                    <mt-button class="iconfont icon-shouye" slot="right" @click="to('Home')"></mt-button>
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
                    <span class="desc_iconv2" :style="{display:thelist.special_tags.jm_owner?'inline-block':'none'}">{{thelist.special_tags.jm_owner}}</span>
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
                <div class="page_sku_wrapper" @click="goto()">
                    <div class="page_sku_bar">
                        <span>请选择</span>
                        <div>
                            <strong>型号</strong>
                            <strong>分类</strong>
                        </div>
                    </div>
                    
                </div>
                <mt-popup class="popup" v-model="popupVisible" position="bottom" popup-transition="popup-fade">
                    <ul>
                        <li>
                            <img class="secondphoto" :src="lists.size[0].img" alt="" srcset="">
                            <div class="popuptip">
                                <p class="popprice">￥{{lists.jumei_price}}</p>
                                <p class="invertory">库存{{lists.size[0].stock}}件</p>
                                <!-- <p class="choose">已选："llll"</p> -->
                            </div>
                        </li>
                        <li>
                            <p class="content">化妆品净含量</p>
                            <div>
                                <!-- <button :class="{cbtn1:obtn1,sbtn1:nbtn1}" @click="btnchoose01">125ml</button>
                                <button :class="{cbtn2:obtn2,sbtn2:nbtn2}" @click="btnchoose02">250ml</button> -->
                                <input type="button" :value="lists.size[0].size" :class="{popbtn:popbtn,btnchoosed:btnchoosed}" @click="popchoose">
                            </div>
                        </li>
                    </ul>
                    <div class="popupbar">
                        <span class="btn-sure" @click="addcart">确定</span>
                        <span class="btn-detail">查看详情</span>
                    </div>
                    <b class="close" @click="closed">×</b>
                </mt-popup>
                <!-- <div class="conments">
                    <p>买过的人这样说</p>
                </div> -->
                <div class="det">
                    <img :src="thelist.description_url_set.detail[480]" alt="">
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
            thelist:[],
            // display:false,
            popupVisible: false,
            popbtn:true,
            btnchoosed:false,
        }
    },
    methods:{
        goto(){
            this.popupVisible = !this.popupVisible;
        },
        to(name){
             this.$router.push({path:name})
        },
        closed() {
            this.popupVisible = false;
        },
        popchoose(){
            this.btnchoosed = true;
        },
        addcart(){
            // console.log(this.lists.size[0].img)
            console.log(this.lists)
            this.$axios.get(`http://localhost:17171/addcart`,{
                params:{

                }
            }).then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        // console.log(this.$route);
        let id = this.$route.query.id;
        let type = this.$route.query.type;
        this.$axios.get(`http://localhost:17171/proxy/DynamicDetail?item_id=${id}&type=${type}`)
        .then(res=>{
            console.log(res.data.data.result);
            this.lists = res.data.data.result;
        });
        this.$axios.get(`http://localhost:17171/proxy/StaticDetail?item_id=${id}&type=${type}`)
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
                height: rem(320px);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .slide-left-icon{
                width: rem(60px);
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
                font-size: 13px;
            }
        }
        .normal_desc{
            // line-height: rem(26px);
            padding: rem(10px) rem(14px) rem(10px) rem(14px);
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
            font-size: 13px;
            label{
                line-height: rem(13px);
                width: 22%;
                color: #999;
                display: inline-block;
                font-size: rem(15px);
                // vertical-align: top;
                text-align: left;
                float: left;
                padding: rem(12px) 0;
            }
            .postage-wrap{
                border-bottom: 1px solid #eee;
                padding: rem(8px) 0;
                font-size: rem(13px);
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
            padding: rem(11px) 0;
            background: #eee;
            .page_sku_bar{
                display: flex;
                 padding: rem(15px);
                 font-size: rem(14px);
                 background: white;
                 span{
                     color: #999;
                     width: 22%;
                 }
                 strong{
                    font-weight: 400;
                 }
            }
        }
        .conments{
            padding: 0 rem(18px);
            p{
                line-height: rem(30px);
            }
        }
        .popup {
              background: #fff;
              width: 100%;
              height: 80%;
              border-radius: rem(10px) rem(10px) 0 0;
              // position: relative;

              ul {
                margin: rem(10px) rem(10px) 0 rem(10px);

                li {
                  height: rem(80px);
                  border-bottom: rem(1px) solid rgb(226, 225, 225);
                  font-size: rem(13px);

                  .secondphoto {
                    width: rem(60px);
                    height: rem(60px);
                    float: left;
                  }

                  .popuptip {
                    float: left;
                    width: 60%;
                    height: rem(60px);
                    margin-left: rem(10px);
                    font-size: rem(12px);

                    .popprice {
                      margin-top: rem(10px);
                      color: #ec3f0a;
                    }

                    .invertory,
                    .choose {
                      margin: rem(3px);
                      width: 100%;
                      padding: 0;
                      background: none;
                      font-size: rem(9px);
                    }
                  }

                  div {
                    width: 100%;
                    height: rem(60px);
                    margin-top: rem(10px);

                    .popbtn {
                      width: fit-content;
                      height: fit-content;
                      font-size: rem(12px);
                      text-decoration: underline;
                      background: rgba(252, 247, 205, 0.664);
                      border-radius: rem(5px);
                      padding: rem(5px) rem(10px) rem(5px)rem(10px);
                      outline: none;
                      display: block
                    }

                    .btnchoosed {
                      border: rem(1px) solid #f37752;
                      color: #f37752;
                    }
                  }


                }
                li:nth-child(2){
                  display: flex;
                  flex-direction: column;
                }
              }

              .popupbar {
                position: fixed;
                bottom: 0;
                width: 90%;
                margin-left: rem(10px);
                margin-right: rem(10px);
                text-align: center;
                color: #fff;
                font-size: rem(14px);
                font-weight: 100;
                font-family: '宋体';

                .btn-sure {
                  float: left;
                  width: 50%;
                  background: #f89602;
                  border-radius: rem(15px) 0 0 rem(15px);
                  padding: rem(5px) 0 rem(5px) 0;
                  text-decoration: underline;
                  letter-spacing: rem(3px);
                }

                .btn-detail {
                  float: left;
                  width: 50%;
                  background: #ec3f0a;
                  border-radius: 0 rem(15px) rem(15px) 0;
                  padding: rem(5px) 0 rem(5px) 0;
                  text-decoration: underline;
                  letter-spacing: rem(3px);
                }
              }

              .close {
                position: absolute;
                right: rem(7px);
                top: rem(5px);
                font-size: rem(18px);
                width: rem(15px);
                height: rem(15px);
                line-height: rem(12px);
                border-radius: 50%;
                text-align: center;
                border: rem(1px) solid rgb(197, 194, 194);
                // background: #e50232;
                color: rgb(197, 194, 194);
                font-weight: 100;
              }
            }
    }
    footer{
        height: rem(50px);
        width: 100%;
        
    }
}
</style>