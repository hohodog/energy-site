<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import page01 from '../assets/site-content/redox/1.jpeg'
import page02 from '../assets/site-content/redox/2.jpeg'
import page03 from '../assets/site-content/redox/3.jpeg'
import page04 from '../assets/site-content/redox/4.jpeg'
import page05 from '../assets/site-content/redox/5.jpeg'
import page06 from '../assets/site-content/redox/6.jpeg'

const images = [
  { src: page01, alt: 'Flow battery source deck page 1' },
  { src: page02, alt: 'Flow battery source deck page 2' },
  { src: page03, alt: 'Flow battery source deck page 3' },
  { src: page04, alt: 'Flow battery source deck page 4' },
  { src: page05, alt: 'Flow battery source deck page 5' },
  { src: page06, alt: 'Flow battery source deck page 6' },
]
</script>

<template>
  <ImageStackPage :images="images" />
</template>
