<template>
  <div>
    
    <!--pre>{{ $store.state.carrito.todosLosProductos }}</pre-->

    
    <h1 class="text-white p-5 bg-dark">Carrito</h1>
    

    
    
    <Producto v-for="(producto, $index) in $store.state.carrito.todosLosProductos"
    :key="$index" 
    :producto="producto" 
    />

    <button>Comprar</button>

    
  </div>
</template>

<script>
import Producto from "../components/Carrito/Producto.vue";

export default {
  components: {
    Producto,
  },
  
//  methods: [
  //async clickPagar() {
  //    await this.$store.dispatch('carrito/comprar'),
  //    alert('compra procesada, muchas gracias por su preferencia'),
  //    this.$router.push('/'),
//  }];
};
</script>


<style scoped>
</style>