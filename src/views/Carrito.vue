<template>
  <div>
    
    <!--pre>{{ $store.state.carrito.todosLosProductos }}</pre-->
    <div class="text-white pt-2 p-3 bg-dark">

      <i class="fas fa-shopping-cart fa-5x p-3"></i>
      
          
    <h1 >Carrito 
      
      </h1>
      <div class="col">
        <p>Total a Pagar: {{ $store.getters['carrito/totalTotal'] }}</p>
      <button 
      class="btn btn-outline-light btn-lg m-2" 
      @click="clickPagar">Comprar</button>
      </div>
      
      </div>
    
    <Producto v-for="(producto, $index) in $store.state.carrito.todosLosProductos"
    :key="$index" 
    :producto="producto" 
    class="shadow m-5"
    />
   
  </div>
</template>

<script>
import Producto from "../components/Carrito/Producto.vue";

export default {
  components: {
    Producto,
  },
  methods: {
    async clickPagar() {
      console.log('Productos comprados')
      console.table(context.state.todosLosProductos)
      await this.$store.dispatch('carrito/comprar')
      this.$router.push('/')
    }
  }
}
</script>


<style scoped>
</style>