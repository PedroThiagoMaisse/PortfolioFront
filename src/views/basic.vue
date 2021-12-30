<template>
  <div>Espere um segundo...</div>
</template>

<script>
import router from "../router";

export default {
  mounted() {
    router.push("/home");
  },
};
</script>

<style></style>
