<template>
  <div class="container">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-4 d-flex justify-content-between">
        <div class="col-md-3">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col-md-3">
          <router-link to="/foods" class="btn btn-success"
            ><i class="bi bi-eye"></i> Lihat Semua</router-link
          >
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md col-sm m-3 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  components: {
    Navbar,
    Hero,
    CardProduct,
  },

  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/fachrul-dev/json-kuliner/products"
      )
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("error :", error));
  },
};
</script>
