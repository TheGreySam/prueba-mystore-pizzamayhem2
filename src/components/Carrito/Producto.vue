<template>
  <div class="card navpizza text-white shadow p-3 mb-2 rounded">
    <div class="row">
      <div class="col-md-4">
        <img :src="producto.imagen" class="card-img" />
      </div>
      <div class="col pt-5">
        <div class="card-block ">
          <h2 class="card-title px-2 bg-warning text-danger">{{ producto.nombre }}</h2>
          
          <div class="row align-items-center">
            <div class="col">
              <p class="card-text">Precio: ${{producto.precio}}</p>
            
             <ul class="">
                <button type="button" class="btn btn-outline-light btn-lg m-2"
                @click="$store.dispatch('carrito/quitarProducto', producto)">-</button>
                <button type="button" class="btn btn-outline-light btn-lg m-2"
                @click="$store.dispatch('carrito/agregarProducto', producto)">+</button>
                <p class="card-text mb-0 mr-4 align-items-center">Cantidad: {{ producto.cantidad }}</p>
             </ul>
             </div>
          </div>
          <h2 class="card-text p-3 bg-warning text-danger"
          >Subtotal: ${{producto.cantidad * producto.precio}}</h2>
          
          
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