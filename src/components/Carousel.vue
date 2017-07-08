<template>
    <div class="Carousel">
      <!--<img :src="carouselUrl" alt="">-->
      <div id="myCarousel" class="carousel slide">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner">
          <div class="item active">
            <img :src="carouselUrl" alt="First slide">
          </div>
          <div class="item">
            <img :src="carouselUrl" alt="First slide">
          </div>
          <div class="item">
            <img :src="carouselUrl" alt="First slide">
          </div>
        </div>
        <!-- 轮播（Carousel）导航 -->
        <a class="carousel-control left" href="#myCarousel"
           data-slide="prev">&lsaquo;</a>
        <a class="carousel-control right" href="#myCarousel"
           data-slide="next">&rsaquo;</a>
      </div>
    </div>



</template>

<script>
    export default {
        name:'Carousel',
        data(){
            return{
              carouselUrl:'http://img.zcool.cn/community/focus/079e595c4b1f0000012396958f9d.jpg'
            }

        }
    }
</script>
<style scoped>
    /*@import './css/reset.import.css';*/
  .Carousel{
    width:1200px;
    margin:20px auto;
    overflow: hidden;
  }
</style>
