<template>
  <div class="home">
    <div class="">
      <div class="card bg-dark text-white">
  <img class="card-img-home " src="@/assets/350606.jpg" alt="Card image">
  <div class="card-img-overlay">
    <i class="fas fa-pizza-slice fa-10x p-3"></i>
    <h5 class="card-title">Bienvenido a PIZZA MAYHEM</h5>
    <p class="card-text">Donde podras armar tu pizza y pagarla con</p>
    <p class="card-text">Last updated 3 mins ago</p>
    <h5 class="card-text">CRIPTOMONEDAS</h5>
  </div>
</div>

    </div>

    <section class="productos">
      <div
      
      >
        <h3></h3>
      </div>
    </section>

    <TarjetaProductos />
    
    
    
    
        
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

<style scoped>
.homeImgtxt {
  position:absolute;
  top: 200px;
  left: 0;
  width: 100%;
}
.homeImg {
  object-fit: contain;
  width: 100%;
  
}
.card-img-home {
  width: 100%;
  height: 20vw;
  object-fit: cover;
  opacity: 30%;
}

</style>