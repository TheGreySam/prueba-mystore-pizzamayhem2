<template>
  <div id="app">
    <Navbar />
    <Carousel />

    <transition name="vista">
      <router-view class="bgpizza p-3"></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Carousel from "./components/Carousel.vue";

export default {
  components: { Navbar, Footer, Carousel },
  name: "App",
};
</script>

<style>
#app {
  font-family: 'Fredericka the Great', cursive;
  background-color: rgb(228, 194, 0);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.bgpizza {
  background-color: rgb(228, 194, 0);
}
.navpizza {
  background-color: rgb(175, 35, 0);
  
}
.logopizza {
  color:rgb(9, 104, 21)
}
.footer {
  position:fixed;
  bottom:0;
  color:snow;
  width: 100%;
  font-weight: lighter;
}

.vista-enter-active,
.vista-leave-active {
    transition: opacity 0.5s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
