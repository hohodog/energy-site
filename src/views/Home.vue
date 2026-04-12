<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import { makeImage } from '../utils/responsiveImages'

const images = [
  makeImage({
    path: 'home/01-hero-no-title',
    alt: 'Homepage hero image without the title from the source deck',
    width: 1952,
    height: 544,
  }),
  makeImage({
    path: 'home/02-team-introduction',
    alt: 'Team introduction from the source deck',
    width: 1792,
    height: 998,
  }),
  makeImage({
    path: 'home/03-home-overview',
    alt: 'Homepage source deck page 2',
    width: 1932,
    height: 1090,
  }),
  makeImage({
    path: 'home/04-technology-comparison',
    alt: 'Homepage source deck page 3',
    width: 960,
    height: 540,
  }),
  makeImage({
    path: 'home/05-technology-focus',
    alt: 'Homepage source deck page 4',
    width: 1925,
    height: 1089,
  }),
  makeImage({
    path: 'home/06-why-storagelink',
    alt: 'Homepage source deck page 5',
    width: 1924,
    height: 1085,
  }),
  makeImage({
    path: 'home/07-partner-with-us',
    alt: 'Homepage source deck page 6',
    width: 1923,
    height: 1085,
  }),
]
</script>

<template>
  <ImageStackPage :images="images" />
</template>
