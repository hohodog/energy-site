<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import { makeImage } from '../utils/responsiveImages'

const images = [
  makeImage({
    path: 'home/02-team-introduction',
    alt: 'Team introduction',
    width: 1792,
    height: 998,
  }),
]
</script>

<template>
  <ImageStackPage :images="images" />
</template>
