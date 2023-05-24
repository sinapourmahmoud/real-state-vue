<template>
<main-header-vue></main-header-vue>
  <router-view/>
  <main-footer></main-footer>
</template>
<script>
import MainFooter from './components/MainFooter.vue';
import MainHeaderVue from './components/MainHeader.vue';

export default {
  components:{
    MainHeaderVue,
    MainFooter
  },


}
</script>
<style>

</style>
