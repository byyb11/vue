<template>
  <section>
    <home-header></home-header>
    <section id="main">
      <router-view></router-view>
    </section>
    <home-footer></home-footer>
  </section>
</template>
<script>
  import HomeHeader from '../components/header'
  import HomeIndex from './HomeIndex'
  import HomeFooter from '../components/homeFooter'
  export default {
    data () {
      return {

      }
    },
    components: {
      HomeHeader,
      HomeFooter,
      HomeIndex
    }
  }
</script>
