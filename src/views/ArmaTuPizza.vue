<template>
  <div class="home">


<div class="card navpizza text-black">
  <img class="card-img " src="@/assets/285677.jpg" alt="Card image" style="height: 650pt; object-fit: cover;">
  <div class="card-img-overlay ">
	  <section class="h-500 gradient-form" >
  <div class="container py-5 h-100 ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card navpizza rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body   ">
                <img class="card-img opacity-50" src="@/assets/284245.jpg" alt="Card image" style="height: 500pt; object-fit: cover;">
                         

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center">
              <div class="card-body p-md-5 mx-md-4">
                <div class="text-center">
                  <i class="fas fa-pizza-slice fa-10x text-warning pb-3"></i>
                  <h4 class="mt-1 mb-2">PIZZA MAYHEM</h4>
                </div>
    <h3>ARMA TU PIZZA</h3>
    <form @submit.prevent="agregarNuevoProducto">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          name="nombre"
          minlength="4"
          maxlength="40"
          required
          v-model="producto.nombre"
        />
      </div>

      <div class="form-group">
        <label for="categoria">Categoría</label>
        <input
          type="text"
          class="form-control"
          id="categoria"
          name="categoria"
          minlength="4"
          maxlength="40"
          required
          v-model="producto.categoria"
        />
        
      </div>

      <div class="form-group">
        <label for="imagen">URL Imagen</label>
        <input
          type="text"
          class="form-control"
          id="imagen"
          name="imagen"
          required
          v-model="producto.imagen"
        />
      </div>

      <div class="form-group">
        <label for="oesi">Peso</label>
        <input
          v-model.number="producto.peso"
          type="number"
          min="100"
          max="9999"
          step="1"
          class="form-control"
          id="peso"
          name="peso"
          required
        />
      </div> 

      <div class="form-group">
        <label for="stock">Stock</label>
        <input
          v-model.number="producto.stock"
          type="number"
          min="100"
          max="9999"
          step="1"
          class="form-control"
          id="stock"
          name="stock"
          required
        />
      </div>      

      <div class="form-group">
        <label for="precio">Precio</label>
        <input
          v-model.number="producto.precio"
          type="number"
          min="100"
          max="9999"
          step="100"
          class="form-control"
          id="precio"
          name="precio"
          required
        />
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="oferta"
          v-model="producto.oferta"
        />
        <label class="form-check-label" for="oferta"> Oferta </label>
      </div>

      <div class="form-group" v-if="producto.oferta">
        <label for="descuento">Descuento</label>
        <input
          type="number"
          class="form-control"
          id="descuento"
          name="descuento"
          required
          v-model.number="producto.descuento"
          min="0"
          max="99"
          step="1"
        />
      </div>
      <h4>Añade tu pizza a nuestra lista</h4>

      <button class="btn btn-warning" type="submit">Añadir</button>
    </form>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</div>
</div>  
</template>

<script>
export default {
  data: () => ({
    producto: {
      nombre: null,
      categoria: null,
      peso: null,
      precio: null,
      oferta: false,
      descuento: null,
      imagen: ''
    }
  }),
  methods: {
    agregarNuevoProducto() {
      this.$store.dispatch('productos/crearProducto', { ...this.producto })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>