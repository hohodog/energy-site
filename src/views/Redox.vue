<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import page01 from '../assets/site-content/redox/1.webp'
import page02 from '../assets/site-content/redox/2.webp'
import page03 from '../assets/site-content/redox/3.webp'
import page04 from '../assets/site-content/redox/4.webp'
import page05 from '../assets/site-content/redox/5.webp'
import page06 from '../assets/site-content/redox/6.webp'

const slideSize = { width: 1376, height: 768 }

const images = [
  { src: page01, alt: 'Flow battery source deck page 1', ...slideSize },
  { src: page02, alt: 'Flow battery source deck page 2', ...slideSize },
  { src: page03, alt: 'Flow battery source deck page 3', ...slideSize },
  { src: page04, alt: 'Flow battery source deck page 4', ...slideSize },
  { src: page05, alt: 'Flow battery source deck page 5', ...slideSize },
  { src: page06, alt: 'Flow battery source deck page 6', ...slideSize },
]
</script>

<template>
  <ImageStackPage :images="images" />
</template>
