<template>
    <div class="input-group">
        <mt-header>
            <router-link to="/person" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <h4>丽子美妆</h4>
       <form action="" method="POST">
            <ul>
                <li>
                    <input type="text" name="" id="user" maxlength="11" v-model="username">
                    <i class="iconfont icon-my"></i>
                </li>
                <li>
                    <input type="password" name="" id="psw" maxlength="20" v-model="password">
                    <i class="iconfont icon-gouwu"></i>
                </li>
                <li>
                    <router-link to="" active-class="forget">忘记密码？</router-link>
                </li>
            </ul>
            <div class="bottom">
                <button id="login_btns" class="btn" type="button" @click="login">登录</button>
                <router-link to="/reg">还没有账号？马上注册惹！</router-link>
            </div>
        </form> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            if(this.username=='' && this.password==''){
                alert('请输入有效的信息');
            }else{
                let username = this.username;
                let password = this.password;
                this.$axios.post('http://localhost:17171/login',{
                    params:{
                        username: username,
                        password: password
                    }
                }).then(res=>{
                    // console.log(res)
                    let code = res.data.code;
                    if(code = 1){
                        localStorage.setItem('name',username);
                        this.$router.push('/person');
                    }else{
                        alert('账号或密码错误!');
                    }

                }).catch(err=>{
                    console.log(err)
                })
            }

        }
    },
}
</script>
<style lang="scss">
    .input-group {
        width: 100%;
        height: 100%;
        background: url(../images/degback.jpg) no-repeat;
        background-size: cover;
        overflow: hidden;
        header{
            background: none;
            .is-left{
                color: rgb(92, 89, 89);
                .mintui-back{
                   font-size: rem(15px); 
                }
            }
        } 
        h4{
            color: rgba(192, 158, 166, 0.897);
            text-shadow: 0 0 rem(7px) #fdf7f7;
            text-align: center;
            font-family:Arial, Helvetica, sans-serif;
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
                    margin-bottom: rem(10px);
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
                        background: none;
                        border:none;
                        border-bottom: rem(1px) solid rgb(112, 112, 112);
                    }

                    i{
                        display: inline-block;
                        position: absolute;
                        left: rem(3px);
                        top: rem(12px);
                        font-size: rem(22px);
                        color:  rgb(92, 89, 89);
                    }

                    p {
                        color: #f32f2f;
                        font-size: rem(11px);
                        padding-left: rem(5px);
                        display: none;
                    }
                    
                    .forget{
                        color: #999;
                        font-size: rem(13px);
                        // text-decoration: none;
                        float: right;
                    }

                }


            }
            .bottom{
                position: absolute;
                bottom: rem(20px);
                width: 100%;
                .btn{
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
                a{
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
