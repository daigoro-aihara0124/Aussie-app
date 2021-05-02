<template>
  <div>
    <h3>こちらは、{{ idData.name }}さんのページです。</h3>
  </div>
</template>

<script>
export default {
computed: {
  idData() {
    return this.$store.getters.idData;
  },
},
};

</script>
