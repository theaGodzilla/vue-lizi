<template>
    <div>
        <div id="header">
            <a href="javascript:;"><i class="iconfont icon-chakantiezifenxiang"></i></a>
            <div><input type="text" name="" id=""></div>
            <a href="javascript:;"><i class="iconfont icon-shouye"></i></a>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item :id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            props:['keyword'],
            selected:'',
        }
    },
    created() {
        // this.$axios.get("/dbapi/search")
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

</style>