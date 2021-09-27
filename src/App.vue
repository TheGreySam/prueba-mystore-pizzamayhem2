<template>
  <div id="app">
    <Navbar class="shadow"/>
    <Carousel />

    <transition name="vista">
      <router-view class="bgpizza p-3" style="height: 100%"></router-view>
    </transition>

    

    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Carousel from "./components/Carousel.vue";
import TarjetaProductos from "./components/Productos/TarjetaProductos.vue";
import Producto from "./components/Carrito/Producto.vue";

export default {
  components: { Navbar, Footer, Carousel, TarjetaProductos, Producto },
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
  display: flexbox;
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
  position:relative;
  
  
  color:snow;
  width: 100%;
  

}

.vista-enter-active,
.vista-leave-active {
    transition: opacity 0.5s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
