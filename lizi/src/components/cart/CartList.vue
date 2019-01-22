<template>
    <div>
        <ul class="lists">
        <li>
          <input type="checkbox" name="" id="check" :key="0" class="checklist">
          <label for="check"></label>
          <img class="firstphoto" src="@img/photo.jpg" alt="" srcset="">
          <div class="title">
            <p>2018新款韩范李玲系带百搭纯色长袖宽松衬衫女</p>
            <p :class="popupVisible" @click="popups">Lffffffff <b>∨</b>
            </p>
            <p class="product-price">￥145</p>
            <mt-popup class="popup" v-model="popupVisible" position="bottom" popup-transition="popup-fade">
              <ul>
                <li>
                  <img class="secondphoto" src="@img/photo.jpg" alt="" srcset="">
                  <div class="popuptip">
                    <p class="price">￥475</p>
                    <p class="invertory">库存198件</p>
                    <p class="choose">已选："llll"</p>
                  </div>
                </li>
                <li>
                  <p class="content">化妆品净含量</p>
                  <button class="btn1">125ml</button>
                  <button class="btn2">250ml</button>
                </li>
              </ul>
              <div class="popupbar">
                <span class="btn-sure">确定</span>
                <span class="btn-detail">查看详情</span>
              </div>
              <b class="close" @click="closed">×</b>
            </mt-popup>
            <div class="controlnum">
              <span class="sub" @click="reducenum(0)">-</span>
              <textarea class="num">1</textarea>
              <span class="plus" @click="addnum(0)">+</span>
            </div>
          </div>
        </li>
        
        <li>
          <input type="checkbox" name="" id="check" :key="1" class="checklist">
          <label for="check"></label>
          <img class="firstphoto" src="@img/photo.jpg" alt="" srcset="">
          <div class="title">
            <p>2018新款韩范李玲系带百搭纯色长袖宽松衬衫女</p>
            <p :class="popupVisible" @click="popups">Lffffffff <b>∨</b>
            </p>
            <p class="product-price">￥145</p>
            <mt-popup class="popup" v-model="popupVisible" position="bottom" popup-transition="popup-fade">
              <ul>
                <li>
                  <img class="secondphoto" src="@img/photo.jpg" alt="" srcset="">
                  <div class="popuptip">
                    <p class="price">￥475</p>
                    <p class="invertory">库存198件</p>
                    <p class="choose">已选："l25ml"</p>
                  </div>
                </li>
                <li>
                  <p class="content">化妆品净含量</p>
                  <div>
                    <input type="button" value="125ml" class="btn1">
                  </div>
                </li>
              </ul>
              <div class="popupbar">
                <span class="btn-sure">确定</span>
                <span class="btn-detail">查看详情</span>
              </div>
              <b class="close" @click="closed">×</b>
            </mt-popup>
            <div class="controlnum">
              <span class="sub" @click="reducenum(1)">-</span>
              <textarea class="num">1</textarea>
              <span class="plus" @click="addnum(1)">+</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
import bus from '../../assets/js/eventBus.js';
export default {
        data() {
      return {
        popupVisible: false,
        // obtn1: true,
        // nbtn1: false,
        // obtn2: true,
        // nbtn2: false,
        btnchoosed: ''
      }
    },
    methods: {
      popups() {
        this.popupVisible = true;
      },
      closed() {
        this.popupVisible = false;
      },
      btnchoose01() {
        this.obtn1 = false;
        this.nbtn1 = true;
      },
      btnchoose02() {
        this.obtn2 = false;
        this.nbtn2 = true;
      },
      //加数量
      addnum(key){
        // console.log(666);
        console.log( $('.plus').eq(key));
        let val1 =  $('.plus').eq(key).prev().val();
        val1++;
        // console.log(val1);
        $('.plus').eq(key).prev().val(val1);
      },
      //减数量
      reducenum(key){
        let val1 =  $('.sub').eq(key).next().val();
        if( val1<=1 ){
          val1=1;
        }else{
          val1--;
        }
        // console.log(val1);
        $('.sub').eq(key).next().val(val1);
      },
    },
    created(){
      //店铺全选
      bus.$off('allshop');
      bus.$on('allshop',target=>{
        // console.log(target);
        if(target){
          // console.log(target);
          $('.checklist').prop('checked','checked');
          console.log($('.checklist'));
        }else{
          // console.log(target);
          $('.checklist').prop('checked',false);
        }
      })

      //大全选
      bus.$off('bigcheck');
      bus.$on('bigcheck',checktar=>{
        console.log(checktar);
        if(checktar){
          // console.log($('.checklist'));
           $('.checklist').prop('checked','checked');
        }else{
          // console.log(target);
          $('.checklist').prop('checked',false);
        }
        
      })
      
    }
}
</script>
<style lang="scss">
    .lists {
        width: 100%;
        height: auto;
        overflow: hidden;
        li {
          width: 100%;
          font-size: rem(13px);
          font-weight: 100;
          margin-bottom: rem(10px);
          display: flex;
            #check {
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

          .firstphoto {
            width: rem(60px);
            height: rem(60px);
            border-radius: rem(5px);
            margin-left: rem(10px);
            float: left;
          }

          .title {
            width: 60%;
            margin-left: rem(10px);
            float: left;
            font-size: rem(12px);
            padding-bottom: rem(10px);

            p:nth-child(1){
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            p:nth-child(2) {
              width: fit-content;
              background: #edeee0;
              color: rgb(107, 105, 105);
              padding-left: rem(5px);
              padding-right: rem(5px);
              font-size: rem(11px);
              margin-top: rem(10px);

              b {
                color: rgb(206, 205, 205);
                font-size: rem(13px);
                margin-left: rem(5px);
              }
            }

            .product-price {
              margin-top: rem(10px);
              float: left;
              color: #ec3f0a;
              font-size: rem(14px);
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
                    width: 80%;
                    height: rem(60px);
                    margin-left: rem(10px);
                    font-size: rem(12px);

                    .price {
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

                    .btn1 {
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

          .controlnum {
            float: right;
            color: #ccc;
            margin-right: rem(15px);

            .sub,
            .plus {
              float: left;
              display: inline-block;
              width: rem(17px);
              height: rem(17px);
              line-height: rem(15px);
              text-align: center;
              border: rem(1px) solid #ccc;
            }

            .num {
              float: left;
              border: rem(1px) solid #ccc;
              border-left: none;
              border-right: none;
              text-align: center;
              width: rem(45px);
              height: rem(17px);
              line-height: rem(17px);
              font-size: rem(13px);
              color: #ccc;
            }
          }
        }

      }

</style>
