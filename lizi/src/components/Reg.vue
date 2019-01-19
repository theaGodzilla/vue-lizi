<template>
  <div class="input-group">
    <mt-header>
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <h4>丽子美妆</h4>
    <form action="" method="POST">
      <ul>
        <li>
          <input type="text" name="" id="user" maxlength="11" placeholder="手机号" v-model.trim="tel" @keyup="check">
          <i class="iconfont icon-my"></i>
          <p class="inpText" :style="{display:istelshow?'inline-block':'none'}">{{isteltip?'手机号已被注册惹':'请输入正确手机号码'}}</p>
        </li>
        <li>
          <div class="cha">
            <input type="text" name="" id="Txtidcode" class="txtVerification" placeholder="验证码" v-model.trim="iden">
            <div class="verify-box" @click="refreshCode" id="idcode">
              <Identify :identifyCode="identifyCode"></Identify>
            </div>
          </div>
          <i class="iconfont icon-weibiaoti2fuzhi04"></i>
          <p class="inpText" :style="{display:isideshow?'inline-block':'none'}">验证码错误</p>

        </li>
        <li>
          <input type="password" name="" id="psw" maxlength="20" placeholder="密码" v-model.trim="psw">
          <i class="iconfont icon-gouwu"></i>
          <p class="inpText" :style="{display:ispsdshow?'inline-block':'none'}">8-20位字符，推荐字母、数字和符号组合的密码</p>
        </li>
      </ul>
      <div class="bottom">
        <button id="reg_btns" class="btn" type="button" @click="reg">注册</button>
        <router-link to="/login">哈哈哈，已经有账号了？马上登录咯！</router-link>
      </div>

    </form>

  </div>
</template>
<script>
  // 引入验证码插件
  import Identify from '../plugin/Identify';

  export default {
    data() {
      return {
        identifyCodes: "1234567890",
        identifyCode: "",
        tel: "",
        iden: '',
        psw: '',
        timer: '',
        istelshow: false,
        isideshow: false,
        ispsdshow: false,
        isteltip: false,
      };
    },
    mounted() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    watch: {

      iden() {
        setTimeout(() => {
          // console.log(this.iden)
          let val = this.iden;
          let idencode = this.identifyCode;
          if (val === idencode) {
            this.isideshow = false;
          } else {
            this.isideshow = true;
          }
        }, 2000)

      },
      psw() {
        setTimeout(() => {
          // console.log(this.psw)
          let psw = this.psw;
          let reg = /^[A-Za-z0-9_-\w\W]{8,20}$/;
          if (reg.test(psw)) {
            // console.log(6666);
            this.ispsdshow = false;
          } else {
            this.ispsdshow = true;
          }
        }, 3000)

      }
    },
    methods: {
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
          ];
        }
        // console.log(this.identifyCode);
      },
      // 检查用户名
      check() {
        clearTimeout(this.timer);
        let num = this.tel;
        let reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
        if (reg.test(num)) {
          this.istelshow = false;
          this.timer = setTimeout(() => {
            this.$axios.get('http://localhost:17171/checkname', {
              params: {
                username: num
              }
            }).then(res => {

              // console.log(res.data);
              let code = res.data.code;
              if (code == 0) {
                this.istelshow = false;
              } else {
                this.istelshow = true;
                this.isteltip = true;
              }

            }).catch(function (error) {
              console.log(error)
            })
          }, 1000)
        } else {
          this.istelshow = true;
        }
      },
      // 注册
      reg() {
        let istelshow = this.istelshow;
        let isideshow = this.isideshow;
        let ispsdshow = this.ispsdshow;
        if (this.tel == '' && this.iden == '' && this.psw == '') {
          alert('请输入正确的信息！');

        } else {
          if (!istelshow && !isideshow && !ispsdshow) {
            let username = this.tel;
            let password = this.psw;
            this.$axios.post(`http://localhost:17171/reg?username=${username}&password=${password}`).then(res => {
              console.log(res);
              let code = res.data.code;
              if (code = 1) {
                this.$router.push('/login')
              } else {
                alert('注册失败啦！☹')
              }
            })
          } else {
            alert('信息有误！')
          }
        }

      },
    },
    components: {
      Identify
    }
  }

</script>
<style lang="scss">
  .input-group {
    width: 100%;
    height: 100%;
    background: url(../images/degback.jpg) no-repeat;
    background-size: cover;
    overflow: hidden;

    header {
      background: none;

      .is-left {
        color: rgb(92, 89, 89);

        .mintui-back {
          font-size: rem(20px);
        }
      }
    }

    h4 {
      color: rgba(192, 158, 166, 0.897);
      text-shadow: 0 0 rem(7px) #fdf7f7;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      position: relative;
      top: 15%;
      letter-spacing: rem(5px);
    }

    form {
      position: relative;
      left: rem(30px);
      height: 60%;
      margin-right: rem(60px);
      top: 30%;

      ul {
        width: 100%;
        position: absolute;
        top: rem(10px);

        li {
          height: auto;
          width: 100%;
          margin-bottom: rem(5px);
          line-height: rem(30px);
          position: relative;

          input {
            display: inline-block;
            width: 90%;
            height: rem(20px);
            padding: rem(10px);
            padding-left: rem(30px);
            font-size: rem(16px);
            color: rgb(92, 89, 89);
            // color: #fdf7f7;
            background: none;
            border: none;
            border-bottom: rem(1px) solid rgb(112, 112, 112);
            // border-bottom: rem(1px) solid #fdf7f7;

            &::placeholder {
              color: rgb(92, 89, 89);
            }
          }

          p {
            color: #f32f2f;
            font-size: rem(11px);
            padding-left: rem(5px);
            // display: none;
          }

          i {
            display: inline-block;
            position: absolute;
            left: rem(3px);
            top: rem(8px);
            font-size: rem(22px);
            color: rgb(92, 89, 89);
            // color: #fff;
          }

          .cha {
            height: rem(40px);
            width: 100%;
            position: relative;

            .txtVerification {
              width: 60%;
              left: 0;
              position: absolute;
            }

            #idcode {
              position: absolute;
              right: rem(-10px);
              display: flex;
              width: 30%;
              height: rem(40px);
              overflow: hidden;

              // margin-left: 1px;
              // border: rem(1px) solid #000;
              .s-canvas {
                width: 100%;
                height: 100%;

                canvas {
                  width: 100%;
                  height: 100%;
                }

              }
            }
          }

        }


      }

      .bottom {
        position: absolute;
        bottom: rem(20px);
        width: 100%;

        .btn {
          width: 100%;
          height: rem(40px);
          line-height: rem(40px);
          font-size: rem(20px);
          font-family: 'Courier New', Courier, monospace;
          letter-spacing: rem(2px);
          background: rgba(104, 90, 90, 0.87);
          color: #fff;
          border-radius: rem(10px);
          border: none;
          box-shadow: 0 0 rem(10px) #5e52529f;
        }

        a {
          display: inline-block;
          width: 100%;
          color: #3b3636;
          font-size: rem(15px);
          text-align: center;
          // text-decoration: none;
        }
      }
    }
  }

</style>
