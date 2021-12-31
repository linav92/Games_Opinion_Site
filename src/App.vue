<template>
  <div id="app">
    <Nav></Nav>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
body {
  background-color: #f0f0f0;
  font-family: 'Montserrat', sans-serif;
}
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}


</style>
