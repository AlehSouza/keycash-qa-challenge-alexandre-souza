<template>
  <div class="row">
    <div v-for="(property, index) in properties" :key="index" class="column">
      <Card :property="property" />
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "CardList",
  components: {
    Card,
  },
  props: {
    properties: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* Float four columns side by side */
.column {
  float: left;
  width: 33.333%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>
