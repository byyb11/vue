<template>
  <header class="flex-center">
    <span class="iconfont left">&#xe615; </span>
    <div class=" middle " id="head-middle" >
      <router-link v-for="(item, index) in tabs" v-bind:to="item.links"  v-html="item.icons" :class="{active:index == num, iconfont:1}" @click.native=" homeTab(index) " :key="item.id">

      </router-link>
    </div>
    <span class="right iconfont">&#xe960;</span>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [
          {
            id: 'icon1',
            icons: '&#xe600;',
            links: '/HomeLeft'
          },
          {
            id: 'icon2',
            icons: '&#xe762;',
            links: '/'
          },
          {
            id: 'icon3',
            icons: '&#xe60b;',
            links: '/HomeLeft'
          }
        ],
        num: 1
      }
    },
    methods: {
      homeTab (index) {
        this.num = index
      }
    }

  }
</script>

<style lang="less">
  @import "../css/base";
  @font-face {
    font-family: 'iconfont';  /* project id 502757 */
    src: url('http://at.alicdn.com/t/font_502757_swkipk5u4kqyf1or.eot');
    src: url('http://at.alicdn.com/t/font_502757_swkipk5u4kqyf1or.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_502757_swkipk5u4kqyf1or.woff') format('woff'),
    url('http://at.alicdn.com/t/font_502757_swkipk5u4kqyf1or.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_502757_swkipk5u4kqyf1or.svg#iconfont') format('svg');
  }
  .flex-center{
    display: -webkit-flex;
    display: flex;
    -webkit-align-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
  }
  html{
    .wh(100%,100%);
    body{
      .wh(100%,100%);
    }
  }
  header{
    height: 0.88rem;
    background-color: #d33a32;

    .iconfont{
      font-family:"iconfont";
      font-size:0.37rem;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
      color:#fff;
      line-height: 0.88rem;
      text-align: center;
    }
    .left{
      -webkit-flex: 1;
      flex: 1;
      margin-left: 0.24rem;
    }
    .middle{
      -webkit-flex: 8;
      flex: 8;
      text-align: center;
      a{
        -webkit-flex: 1;
        flex: 1;
        margin-right: 0.53rem;
        color: #ee9991;
        font-size: 0.37rem;
        &:last-child{
          margin-right: 0;
        }
        &.active{
          color: #fff;
        }
      }
    }
    .right{
      -webkit-flex: 1;
      flex: 1;
      margin-right:0.21rem;
    }
  }
</style>
