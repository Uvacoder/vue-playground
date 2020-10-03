<template>
  <div>
    <p>{{ details }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    details: {
      type: String,
      required: true,
    },
  },
};
</script>