<template>
    <div>
        <h1>详情</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    created(){
        console.log(this.$route);
        let id = this.$route.query.id;
        let type = this.$route.query.type;
        this.$axios.get(`/api/product/ajaxStaticDetail?item_id=${id}&type=${type}`)
        .then(res=>{
            console.log(res);
        })
    }
}
</script>
<style scoped lang="scss">

</style>