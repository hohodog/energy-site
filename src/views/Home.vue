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
  { src: heroNoTitle, alt: 'Homepage hero image without the title from the source deck' },
  { src: teamIntroduction, alt: 'Team introduction from the source deck' },
  { src: homeOverview, alt: 'Homepage source deck page 2' },
  { src: technologyComparison, alt: 'Homepage source deck page 3' },
  { src: technologyFocus, alt: 'Homepage source deck page 4' },
  { src: whyStorageLink, alt: 'Homepage source deck page 5' },
  { src: partnerWithUs, alt: 'Homepage source deck page 6' },
]
</script>

<template>
  <ImageStackPage :images="images" />
</template>
