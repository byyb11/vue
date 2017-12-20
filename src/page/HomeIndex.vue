<template>
  <section>
    <home-index-header></home-index-header>
    <home-scroll></home-scroll>
    <sub-nav></sub-nav>
  </section>
</template>
<script>
  import HomeIndexHeader from '../components/homeIndexHeader'
  import HomeScroll from '../components/HomeScroll'
  import SubNav from '../components/homeIndexSubNav'
  export default {
    data () {
      return {}
    },
    components: {
      HomeIndexHeader,
      HomeScroll,
      SubNav
    }
  }
</script>
<style>

</style>
