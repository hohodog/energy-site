<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import page01 from '../assets/site-content/sodium/display/page-01.jpg'
import page02 from '../assets/site-content/sodium/display/page-02.jpg'
import page03 from '../assets/site-content/sodium/display/page-03.jpg'
import page04 from '../assets/site-content/sodium/display/page-04.jpg'
import page05 from '../assets/site-content/sodium/display/page-05.jpg'
import page06 from '../assets/site-content/sodium/display/page-06.jpg'

const slideSize = { width: 3200, height: 1786 }

const images = [
  { src: page01, alt: 'Sodium-ion battery source deck page 1', ...slideSize },
  { src: page02, alt: 'Sodium-ion battery source deck page 2', ...slideSize },
  { src: page03, alt: 'Sodium-ion battery source deck page 3', ...slideSize },
  { src: page04, alt: 'Sodium-ion battery source deck page 4', ...slideSize },
  { src: page05, alt: 'Sodium-ion battery source deck page 5', ...slideSize },
  { src: page06, alt: 'Sodium-ion battery source deck page 6', ...slideSize },
]
</script>

<template>
  <ImageStackPage :images="images" />
</template>
