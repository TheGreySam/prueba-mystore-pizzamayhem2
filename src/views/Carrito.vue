<template>
  <div>
    <h4>Carrito de compras</h4>
    <pre>{( $store.state.carrito.todosLosProductos)}</pre>

    <button>Comprar</button>
    <Producto v-for="(producto, $index) in $store.state.carrito.todosLosProductos"
    v-bind:key="$index" :producto="producto" 
    />
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