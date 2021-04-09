<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.profession}}</p>
      </div>

      <div class="stats">
        <h3>str {{product.str}}</h3>
        <h3>dex {{product.dex}}</h3>
        <h3>con {{product.con}}</h3>
        <h3>int {{product.int}}</h3>
        <h3>cha {{product.cha}}</h3>
        <h3>wis {{product.wis}}</h3>
      </div>
      <div class="delete">
          <form v-on:submit.prevent="delChar">
              <button v-on:click='delChar("product_id" - 1)' class="delete">Delete</button>
          </form>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    delChar(location) {
        this.$root.$data.products.splice(location, 1);
    },
  }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.info {
  background: #ff0000;
  color: #000;
  padding: 10px 30px;
  height: 80px;

  justify-content: center;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.stats {
  display: inline;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>