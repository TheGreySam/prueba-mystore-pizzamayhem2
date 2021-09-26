<template>
  <div class="home">
    <div>
      

<div class="card bg-dark text-white">
  <img class="card-img-home" src="@/assets/350606.jpg" alt="Card image">
  <div class="card-img-overlay">
    <i class="fas fa-pizza-slice p-3 text-warning"></i>
    <h5 class="card-title">Bienvenido a PIZZA MAYHEM</h5>
    <p class="card-text">Donde podras armar tu pizza y pagarla con</p>
    <h5 class="card-text">CRIPTOMONEDAS</h5>
  </div>
</div>



    </div>

    <div class="bg-danger">
    <h2 class="text-white p-3 bg-">Elige tu Pizza!</h2>
    <div class="row">
      <div
        class="col-sm mb-4 mb-md-0"
        v-for="(producto, $index) in $store.state.productos.todosLosProductos"
        :key="$index"
      >
        <TarjetaProducto :producto="producto" class="mx-auto" />
      </div>
    </div>
  </div>
   </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//import Producto from "@/components/Carrito/Producto.vue";
import TarjetaProducto from '../components/Productos/TarjetaProductos.vue'
export default {
  components: { TarjetaProducto }
}


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
  
  object-fit: cover;
  opacity: 30%;
}

@media screen and (max-width: 299px) {
    .fas {
        font-size: 1.5em;
    }
    .card-img-home {
  width: 100%;
  max-height: 20vw;
  min-height: 50vw;
  object-fit: cover;
  opacity: 30%;
}
}

@media screen and (min-width: 300px) and (max-width: 899px) {
    .fas {
        font-size: 4em;
    }
    .card-img-home {
  width: 100%;
  max-height: 55vw;
  
  object-fit: cover;
  opacity: 30%;
}
}

@media screen and (min-width: 900px) {
    .fas {
        font-size: 8em;
    }
    .card-img-home {
  width: 100%;
  max-height: 20vw;
  
  object-fit: cover;
  opacity: 30%;
}
}

</style>