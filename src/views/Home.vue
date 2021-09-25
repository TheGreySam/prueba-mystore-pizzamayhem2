<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Bienvenido a <span class="mayhem">PIZZA MAYHEM</span></h1>
        <h3>Donde podras armar tu pizza</h3>
        <h3>y pagarla con</h3>
        <h2>CRIPTOMONEDAS</h2>

        <Carousel />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>
