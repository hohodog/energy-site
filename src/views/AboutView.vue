<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import teamIntroduction from '../assets/site-content/home/02-team-introduction.webp'

const images = [{ src: teamIntroduction, alt: 'Team introduction', width: 1792, height: 998 }]
</script>

<template>
  <ImageStackPage :images="images" />
</template>
