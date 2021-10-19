<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Daftar <strong>Makanan</strong></h2>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Cari Makanan"
            aria-label="cari"
            aria-describedby="basic-addon1"
            @keyup="searchFood"
          />
          <span class="input-group-text" id="basic-addon1"
            ><i class="bi bi-search"></i
          ></span>
        </div>
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
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CardProduct from "../components/CardProduct.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
    CardProduct,
  },

  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log("error :", error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("error :", error));
  },
};
</script>

<style>
</style>