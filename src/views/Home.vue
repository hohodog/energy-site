<script setup>
import ImageStackPage from '../components/ImageStackPage.vue'
import heroNoTitle from '../assets/site-content/home/01-hero-no-title.png'
import teamIntroduction from '../assets/site-content/home/02-team-introduction.png'
import homeOverview from '../assets/site-content/home/03-home-overview.png'
import technologyComparison from '../assets/site-content/home/04-technology-comparison.png'
import technologyFocus from '../assets/site-content/home/05-technology-focus.png'
import whyStorageLink from '../assets/site-content/home/06-why-storagelink.png'
import partnerWithUs from '../assets/site-content/home/07-partner-with-us.png'

const images = [
  {
    src: heroNoTitle,
    alt: 'Homepage hero image without the title from the source deck',
    width: 1952,
    height: 544,
  },
  {
    src: teamIntroduction,
    alt: 'Team introduction from the source deck',
    width: 1792,
    height: 998,
  },
  { src: homeOverview, alt: 'Homepage source deck page 2', width: 1932, height: 1090 },
  { src: technologyComparison, alt: 'Homepage source deck page 3', width: 960, height: 540 },
  { src: technologyFocus, alt: 'Homepage source deck page 4', width: 1925, height: 1089 },
  { src: whyStorageLink, alt: 'Homepage source deck page 5', width: 1924, height: 1085 },
  { src: partnerWithUs, alt: 'Homepage source deck page 6', width: 1923, height: 1085 },
]
</script>

<template>
  <ImageStackPage :images="images" />
</template>
