<template>
  <footer>
      <section class="son-detail clearfix">
        <img src="http://p2.music.126.net/wL2nXqCdRqbmHn43TbgbcA==/18538865557888439.jpg?imageView=1&thumbnail=540z540&type=webp&quality=80" alt="">
        <span class="son-title">
          <h6>画风</h6>
          <span>横滑可以切换上下首哦</span>
        </span>
      </section>
    <section class="son-btn iconfont">
      <span class="play">&#xe605;</span>
      <span class="son-list">&#xe615;</span>
    </section>
  </footer>
</template>
<script>
export default {
}
</script>

<style lang="less" scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 162648 */
    src: url('https://at.alicdn.com/t/font_162648_ab7zi36jjtwt57b9.eot');
    src: url('https://at.alicdn.com/t/font_162648_ab7zi36jjtwt57b9.eot?#iefix') format('embedded-opentype'),
    url('https://at.alicdn.com/t/font_162648_ab7zi36jjtwt57b9.woff') format('woff'),
    url('https://at.alicdn.com/t/font_162648_ab7zi36jjtwt57b9.ttf') format('truetype'),
    url('https://at.alicdn.com/t/font_162648_ab7zi36jjtwt57b9.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
   font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  footer{
    height: 0.77rem;
    background: #fff;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    -webkit-box-shadow:0 -1px 0 #d9d8d7 ;
    -moz-box-shadow:0 -1px 0 #d9d8d7  ;
    box-shadow:0 -1px 0 #d9d8d7  ;
    display: -webkit-flex;
    display: flex;

    section{
      height: 100%;
      &.son-detail{
        -webkit-flex: 4;
        flex: 4;
        position: relative;
        img{
          width: auto;
          height: 100%;
          padding-top: 0.09rem;
          padding-bottom: 0.09rem;
          margin-left: 0.09rem;
          margin-right: 0.09rem;
          box-sizing: border-box;
          float: left;
        }
        .son-title{
          float: left;
          position: absolute;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          -o-transform: translateY(-50%);
          transform: translateY(-50%);
          h6{
            font-size: 0.18rem;
            color: #2c2d2c;
            line-height: 0.28rem;
          }
          span{
            font-size: 0.16rem;
            color: #858688;
          }
        }

      }
      &.son-btn{
        -webkit-flex: 1;
        flex: 1;
        display: -webkit-flex;
        display: flex;
        .play{
          -webkit-flex: 1;
          flex: 1;
          font-size: 0.4rem;
          line-height: 0.77rem;
          text-align: center;
        }
        .son-list{
          -webkit-flex: 1;
          flex: 1;
          line-height: 0.77rem;
          font-size: 0.26rem;
          text-align: center;
        }
      }
    }
  }
</style>
