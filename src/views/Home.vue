<template>
  <div>
    <h1>Welcome to the QA Challenge</h1>
    <CardList :properties="properties" />
  </div>
</template>

<script>
import axios from "axios";
import CardList from "@/components/CardList.vue";

export default {
  name: "Home",
  components: {
    CardList,
  },
  data() {
    return {
      properties: [],
    };
  },
  beforeMount() {
    axios
      .get("http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge")
      .then(({ data }) => {
        this.properties = data;
      });
  },
};
</script>
