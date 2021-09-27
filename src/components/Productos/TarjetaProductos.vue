<template>
    <div class="card text-white shadow p-1 mb-5 rounded" style="width: 25rem">
    <img class="card-img-top" :src="producto.imagen" alt="Card image cap" />
    <div class="card-body bg-warning text-success ">
      <h1>{{ producto.nombre }}</h1>
    </div>
    <ul class="list-group">
      <li class="list-group-item">Categoria: {{ producto.categoria }}</li>
      <li class="list-group-item">Peso: {{ producto.peso }}</li>
      <li class="list-group-item">Precio: ${{ producto.precio.toString().toLocaleLowerCase() }}</li>
      <li class="list-group-item text-danger bg-warning">
        <h3>Descuento:</h3>
        <h1>{{ producto.oferta ? `${producto.descuento}% off` : 'Sin descuento asociado' }}</h1>
      </li>
    </ul>
    <div class="card-actions">
      <button class="btn btn-danger" @click="agregarProductoAlCarrito">Agregar al Carrito</button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        producto: { type: Object, required: true}
    },
    methods: {
        agregarProductoAlCarrito() {
            this.$store.dispatch("carrito/agregarProducto", this.producto)
        }
    }
}
</script>

<style scoped>

</style>