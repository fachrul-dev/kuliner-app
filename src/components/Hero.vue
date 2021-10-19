<template>
  <div class="d-none d-md-block">
    <div class="row mt-4">
      <div class="col">
        <div class="d-flex h-100">
          <div class="justify-content-center align-self-center">
            <h2>
              <strong>Delicious Food Menu,</strong> <br />
              in Your Gadget
            </h2>
            <p>Order your favorite food now !</p>
            <router-link to="/foods" class="btn btn-lg btn-success text-white">
              <i class="bi bi-arrow-right"></i> Pesan
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img src="../assets/image/hero.png" width="500" />
      </div>
    </div>
  </div>

  <!-- mobile -->
  <div class="d-sm-block d-md-none">
    <div class="row mt-4">
      <div class="col-md-6 mb-3">
        <img src="../assets/image/hero.png" width="500" />
      </div>
      <div class="col">
        <div class="d-flex h-100">
          <div class="justify-content-center align-self-center">
            <h2>
              <strong>Delicious Food Menu,</strong> <br />
              in Your Gadget
            </h2>
            <p>Order your favorite food now !</p>
            <button class="btn btn-lg btn-success text-white">
              <i class="bi bi-arrow-right"></i> Pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>