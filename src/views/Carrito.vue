<template>
  <div>
    <h4>Carrito de compras</h4>
    <pre>{( $store.state.carrito.todosLosProductos)}</pre>

    <button>Comprar</button>
    <Producto v-for="(producto, $index) in $store.state.carrito.producto
    :key="$index" :producto="producto" />
  </div>
</template>

<script>
import Producto from "../components/Carrito/Producto.vue";
export default {
  components: {
    Producto,
  },
};
</script>


<style scoped>
</style>