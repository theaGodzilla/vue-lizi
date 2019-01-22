<template>
    <div class="list">
        <mine-head></mine-head>
        <mine-center></mine-center>
    </div>
</template>
<script>
import MineHead from './MineHead';
import MineCenter from './MineCenter';

export default {
    components:{
        MineHead,
        MineCenter
    }
}
</script>
<style scoped lang="scss" >
    .list{
        height: 68%;
    }
</style>
