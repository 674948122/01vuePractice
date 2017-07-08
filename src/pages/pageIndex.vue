<template>
    <div id="index">
        <!--自定义标签使用-->
        <navBox></navBox>
        <Carousel></Carousel>
    </div>
</template>
<script>
    //引入组件
    import navBox from '@/components/navBox.vue'
    import Carousel from '@/components/Carousel.vue'
    /*引用*/
    export default {
        components: {
          'navBox': navBox,
          'Carousel':Carousel,
        }
    }
</script>
