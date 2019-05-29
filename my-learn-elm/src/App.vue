<template>
  <div id="app">
    <div class="nav-menu-container">
      <nav-menu></nav-menu>
    </div>
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  border: 1px solid #ccc;
}
.nav-menu-container{
  width: 25%;
  float: left;
  border: 1px solid #ccc;
  height: 1000px;
}
.main-container{
  /* width: 60%; */
  width: calc(75% - 4px );
  float: left;
  border: 1px solid #ccc;
}
</style>
