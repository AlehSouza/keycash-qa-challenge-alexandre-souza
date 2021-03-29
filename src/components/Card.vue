<template>
  <div class="card">
    <img :src="property.images[0]" :alt="property.address.formattedAddress" />
    <p>{{ property.address.formattedAddress }}</p>
    <p>{{ property.price | currency }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    property: {
      type: Object,
      default: () => {},
    },
  },
  filters: {
    currency(value) {
      if (!value) value = 0;
      return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  box-shadow: 0 4px 8px 0 rgba(104, 104, 104, 0.2); /* this adds the "card" effect */
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #c4c4c4;
  margin: 8px 0px;
  color: #fff;

  img {
    height: 325px;
    max-width: 100%;
  }
}
</style>
