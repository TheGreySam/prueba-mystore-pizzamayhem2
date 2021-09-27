<template>
  <div class="home">


<div class="card navpizza text-black">
  <img class="card-img" src="@/assets/285777.jpg" alt="Card image"  style="height: 650pt; object-fit: cover;"/>
  <div class="card-img-overlay ">
	  <section class="h-500 gradient-form" >
  <div class="container py-5 h-100 ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card navpizza rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body  p-md-5 mx-md-4">

                <div class="text-center">
                  <i class="fas fa-pizza-slice fa-10x text-warning pb-3"></i>
                  <h4 class="mt-1 mb-5">PIZZA MAYHEM</h4>
                </div>

                <form>
                  <p>Porfavor ingresa a tu cuenta</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control" placeholder="Número telefónico o correo electrónico"/>
                    <label class="form-label" for="form2Example11">Usuario</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Contraseña</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-warning btn-block fa-lg gradient-custom-2 mb-3" type="button">Ingresa</button>
                    <a class="text-muted" href="#!"> Olvidaste tu contraseña?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">No tienes una cuenta?</p>
                    <button type="button" class="btn btn-danger">Regístrate</button>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-black px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">Aceptamos las siguientes Criptomonedas</h4>
				<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      <i class="fab fa-bitcoin fa-3x m-2"></i>
    </div>
    <div class="col-md-auto">
      <i class="fab fa-ethereum fa-3x p-2"></i>
    </div>
    <div class="col col-lg-2">
      <i class='fab fa-galactic-republic fa-3x p-2'></i>
    </div>
  </div>
  <br>
 
 </div>
                <br>
				<h3>DISCLAIMER</h3>
				<p class="small mb-0">El mercado de criptográfico es altamente volátil.</p>
				<p class="small mb-0"> PIZZA MAYHEM no se responsabiliza por pérdidas generadas por especulación generada con nuestros productos.</p>
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

</script>

<style scoped>
.card-img-home {
  width: 100%;
  
  object-fit: cover;
  opacity: 30%;
}

@media screen and (max-width: 299px) {
    
    .card-img-home {
  width: 0px;
  
  
  object-fit: cover;
  opacity: 30%;
}
}

@media screen and (min-width: 300px) and (max-width: 899px) {
    
    .card-img-home {
  width: 100%;
  max-height: 55vw;
  
  object-fit: cover;
  opacity: 30%;
}
}

@media screen and (min-width: 900px) {
    .fas {
        font-size: 8em;
    }
    .card-img-home {
  width: 100%;
  max-height: 20vw;
  
  object-fit: cover;
  opacity: 30%;
}
}
</style>