<template>
  <section class="subnav clearfix">
    <ul>
      <li v-for="(item,index) in subNav" :class="{active: index==num}" @click="subTab(index)">
        {{item}}
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        subNav: ['音乐', '视频', '电台'],
        num: 0
      }
    },
    methods: {
      subTab (index) {
        this.num = index
      }
    }
  }
</script>
<style lang="less" scoped>
  .subnav{
    ul{
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
      li{
        float: left;
        -webkit-flex: 1;
        flex: 1;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.2rem;
        position: relative;
        &.active{
          color: #c1261f;
          &:before{
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            height:0.04rem;
            width: 1.31rem;
            background: #f03a31;
          }
        }
      }
    }

  }
</style>
