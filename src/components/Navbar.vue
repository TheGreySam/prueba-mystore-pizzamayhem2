<template>
  <nav class="navbar navbar-expand-lg navbar-dark navpizza shadow p-3">
    <a class="mayhem navbar-brand p-2" href="#">
      <i class="fas fa-pizza-slice p-3" style="color: white"></i>PIZZA MAYHEM
    </a>
    <button
      class="navbar-toggler btn"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/busquedas" class="nav-link">
            Arma tu pizza
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ventas" class="nav-link">Ventas</router-link>
        </li>
        <li class="carrito">
          <router-link to="/carrito" class="nav-link">
            <i class="fas fa-shopping-cart">
              <span class="cantidad-carrito">0</span>
              <div class="dropdown-carrito">
                <ul class="dropdown-carrito-lista">
                  <li>Producto</li>
                </ul>
              </div>
            </i>
          </router-link>
        </li>
        
      </ul>
    </div>

  </nav>
</template>

<script>
export default {};
</script>

<style></style>
