<template>
  <div id="app">
    <!--<navBox></navBox>-->
    <router-view>

    </router-view>
  </div>
</template>

<script>
  //引入组件
  import navBox from '@/components/navBox.vue'
  /*引用*/
  export default {
    components: {
      'navBox': navBox,
    }
  }
</script>

<style>
  body {
    font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
    margin: 0px;
    padding: 0px;
  }

  #app {
  }
</style>
