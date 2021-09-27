<template>
  <div class="card navpizza text-white shadow p-1 mb-5 rounded">
    <div class="row">
      <div class="col-md-4">
        <img :src="producto.imagen" class="card-img" />
      </div>
      <div class="col-md-8 px-3">
        <div class="card-block px-3">
          <h2 class="card-title p-2 bg-warning text-danger">{{ producto.nombre }}</h2>
          
          <div class="row align-items-center">
            <div class="col">
              <p class="card-text">Precio: ${{producto.precio}}</p>
            <p class="card-text mb-0 mr-4">Cantidad: {{ producto.cantidad }}</p>
            
            
             <ul class="pagination pagination-lg mb-0 mr-4">
              <li class="page-item">
                <a class="page-link"
                @click="$store.dispatch('carrito/quitarProducto', producto)">-</a></li>
              <li class="page-item">
                <a class="page-link"
                @click="$store.dispatch('carrito/agregarProducto', producto)">+</a></li>
             </ul>
             </div>
          </div>
          <p class="card-text">Subtotal: ${{(producto.cantidad * producto.precio)}}</p>
          
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  producto: {type: Object, required: true}
},
}
</script>


<style scoped>
.navpizza {
  background-color: rgb(175, 35, 0);
  
}
</style>