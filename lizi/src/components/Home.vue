<template>
  <div id="Home" class="page">
    <h1>Home</h1>
    <tabbar/>
  </div>
</template>
<script>
  import Tabbar from './Tabbar';

  export default {

    name: 'Home',
    data() {
      return {}

    },
    components: {
      Tabbar
    },
  }

</script>

  <style scoped lang="scss">
    /* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
    // .ceshi{
    //   background: red;
    //   width: rem(200px);
    //   height: rem(100px);
    // }

  </style>
