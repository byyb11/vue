<template>
  <nav id="subnav" >
    <router-link v-for="nav in  subnav" :to="nav.link"  :key="nav.id" class="iconfont">
        <span v-html="nav.icon">
        </span>
        <div>{{nav.title}}</div>
    </router-link>
  </nav>
</template>
<script>
  export default {
    data () {
      return {
        subnav: [
          {
            id: 'subnav1',
            icon: '&#xe629;',
            title: '私人FM',
            link: '/'
          },
          {
            id: 'subnav2',
            icon: '&#xe658;',
            title: '每日推荐',
            link: ''
          },
          {
            id: 'subnav3',
            icon: '&#xe600;',
            title: '歌单',
            link: ''
          },
          {
            id: 'subnav4',
            icon: '&#xe679;',
            title: '排行榜',
            link: ''
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 514729 */
    src: url('http://at.alicdn.com/t/font_514729_bknwpv8itchaor.eot');
    src: url('http://at.alicdn.com/t/font_514729_bknwpv8itchaor.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_514729_bknwpv8itchaor.woff') format('woff'),
    url('http://at.alicdn.com/t/font_514729_bknwpv8itchaor.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_514729_bknwpv8itchaor.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont";
    font-size:0.36rem;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color:#b82d26;

    text-align: center;
  }
  #subnav{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    height: 1.56rem;
    border-bottom: 1px solid #e8e9eb;
    .iconfont{
      flex: 1;
      span{
        display: block;
        width: 0.75rem;
        margin:0 auto;
        height: 0.75rem;
        border: 1px solid #b82d26;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        line-height: 0.75rem;
      }
      div{
        font-size: 0.18rem;
        color: #000;
        line-height: 0.34rem;
        height: 0.34rem;
        display: block;
      }
    }
  }

</style>
