<template>
  <div id="app">
    <router-link to="/login"></router-link>
    <router-link to="/register"></router-link>
    <router-link to="/shopping"></router-link>
   <router-view></router-view>
    <div>
      <router-view name="head-nav"></router-view>
      <router-view name="search"></router-view>
      <router-view name="side-nav"></router-view>
      <router-view name="product"></router-view>
      <router-view name="short-cut"></router-view>
      <router-view name="desc_footer"></router-view>
      <router-view name="main_footer"></router-view>
    </div>
   </div>

</template>

<script>



export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
