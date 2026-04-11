<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import teamIntroduction from '../assets/site-content/home/02-team-introduction.png'

const images = [{ src: teamIntroduction, alt: 'Team introduction' }]
</script>

<template>
  <ImageStackPage :images="images" />
</template>
