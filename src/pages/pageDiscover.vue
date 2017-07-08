<template>
    <div id="Discover">
        <!--自定义标签使用-->
      <navBox></navBox>
        <Discover></Discover>
    </div>
</template>
<script>
    //引入组件
    import Discover from '@/components/Discover.vue'
    import navBox from '@/components/navBox.vue'
    /*引用*/
    export default {
        components: {
            'Discover': Discover,
          'navBox': navBox,
        }
    }
</script>
