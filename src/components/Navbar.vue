<template>
  <nav class="navbar navbar-expand-lg navbar-dark navpizza shadow p-3">
    <a class="mayhem navbar-brand p-2" href="#">
      <i class="fas fa-pizza-slice p-3 text-warning"></i>PIZZA MAYHEM
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
          <router-link to="/armatupizza" class="nav-link">
            Arma tu pizza
          </router-link>
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
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>

        <li>
          <!-- Collapse button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav6"
    aria-controls="basicExampleNav6" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Links -->
  <div class="collapse navbar-collapse" id="basicExampleNav6">

    <!-- Right -->
    <ul class="navbar-nav nav-flex-icons ml-auto">
      <li class="nav-item dropdown notifications-nav pr-md-3">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink151" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="true">
          <span class="badge badge-pill bg-danger">1</span>
          <span><i class="fas fa-bell"></i></span>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink151">
          <a class="dropdown-item" href="#!">
            <i class="far fa-money-bill-alt mr-2" aria-hidden="true"></i>
            <span>New order received</span>
            <span class="float-right"><i class="far fa-clock" aria-hidden="true"></i> 13 min</span>
          </a>
          <a class="dropdown-item" href="#!">
            <i class="far fa-money-bill-alt mr-2" aria-hidden="true"></i>
            <span>New order received</span>
            <span class="float-right"><i class="far fa-clock" aria-hidden="true"></i> 33 min</span>
          </a>
          <a class="dropdown-item" href="#!">
            <i class="fas fa-chart-line mr-2" aria-hidden="true"></i>
            <span>Your campaign is about end</span>
            <span class="float-right"><i class="far fa-clock" aria-hidden="true"></i> 53 min</span>
          </a>
        </div>
      </li>
      
    </ul>

  </div>
        </li>
        
      </ul>
    </div>
    

  </nav>
</template>

<script>
export default {};
</script>

<style></style>
