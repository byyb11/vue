<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-on:style="" v-for="imgurl in scrollUrl">
        <img v-bind:src="imgurl.img" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

  </div>
</template>
<script>
  import Swiper from '../../static/swiper-3.4.2.min'
  export default {
    data () {
      return {
        scrollUrl: [
          {
            'img': 'http://p3.music.126.net/UEO26gFnq4jKh94IWNVa9w==/19194174486574776.jpg?imageView=1&type=webp&quality=80'
          },
          {
            'img': 'http://p4.music.126.net/Xr0R-_QlKT5eBHJgVtXG1A==/19161189137739548.jpg?imageView=1&type=webp&quality=80'
          },
          {
            'img': 'http://p4.music.126.net/2eRULgGsGwVex7Bx8Cb7cA==/18676304512107587.jpg?imageView=1&type=webp&quality=80'
          }
        ]
      }
    },
    mounted () {
      this.scroll()
    },
    methods: {
      scroll () {
        var mySwiper = new Swiper('.swiper-container', {
          loop: true,
          autoplay: 5000,
          // 如果需要分页器
          pagination: '.swiper-pagination'
        })
        console.log(mySwiper)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/swiper-3.4.2.min.css";
  .swiper-container{
    height: 2.48rem;
    width: 100%;
    .swiper-wrapper{
      height: 100%;
      .swiper-slide{
        height: 100%;
        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>
