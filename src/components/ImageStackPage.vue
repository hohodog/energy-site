<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="image-stack-page" aria-label="Page image content">
    <figure v-for="image in images" :key="image.src" class="image-frame">
      <img :src="image.src" :alt="image.alt" />
    </figure>
  </section>
</template>

<style scoped>
.image-stack-page {
  display: grid;
  gap: 0;
  width: min(100%, 1440px);
  margin: 0 auto;
  padding: 0 0 36px;
  background: #fff;
}

.image-frame {
  margin: 0;
}

.image-frame img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
