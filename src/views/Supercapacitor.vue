<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import page01 from '../assets/site-content/supercapacitor/page-01.jpg'
import page02 from '../assets/site-content/supercapacitor/page-02.jpg'
import page03 from '../assets/site-content/supercapacitor/page-03.jpg'
import page04 from '../assets/site-content/supercapacitor/page-04.jpg'
import page05 from '../assets/site-content/supercapacitor/page-05.jpg'
import page06 from '../assets/site-content/supercapacitor/page-06.jpg'

const images = [
  { src: page01, alt: 'Supercapacitor source deck page 1' },
  { src: page02, alt: 'Supercapacitor source deck page 2' },
  { src: page03, alt: 'Supercapacitor source deck page 3' },
  { src: page04, alt: 'Supercapacitor source deck page 4' },
  { src: page05, alt: 'Supercapacitor source deck page 5' },
  { src: page06, alt: 'Supercapacitor source deck page 6' },
]
</script>

<template>
  <ImageStackPage :images="images" />
</template>
