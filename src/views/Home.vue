<template>
  <div class="home">
    <i class="fas fa-pizza-slice fa-10x p-3"></i>
    
    <h1>Bienvenido a <span class="mayhem">PIZZA MAYHEM</span></h1>
        <h3>Donde podras armar tu pizza</h3>
        <h3>y pagarla con</h3>
        <h2>CRIPTOMONEDAS</h2>

        <b-carousel
          controls
          indicators
          img-width="1024"
          img-height="480"
          >
        <b-carousel-slide img-src="@/assets/284245.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="@/assets/284677.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="@/assets/284777.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="@/assets/287411.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="@/assets/350606.jpg"></b-carousel-slide>


          </b-carousel>

          

        

        
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";


export default {
  name: "Home",
  components: {
    
  },
};
</script>
