<script setup>
import DeckMaterialPage from '../components/DeckMaterialPage.vue'
import page01 from '../assets/sodium/slides/page-01.jpg'
import page02 from '../assets/sodium/slides/page-02.jpg'
import page03 from '../assets/sodium/slides/page-03.jpg'
import page04 from '../assets/sodium/slides/page-04.jpg'
import page05 from '../assets/sodium/slides/page-05.jpg'
import page06 from '../assets/sodium/slides/page-06.jpg'

const slides = [
  { src: page01, alt: '钠离子电池资料第 1 页' },
  { src: page02, alt: '钠离子电池资料第 2 页' },
  { src: page03, alt: '钠离子电池资料第 3 页' },
  { src: page04, alt: '钠离子电池资料第 4 页' },
  { src: page05, alt: '钠离子电池资料第 5 页' },
  { src: page06, alt: '钠离子电池资料第 6 页' },
]
</script>

<template>
  <DeckMaterialPage
    theme="sodium"
    :slides="slides"
  />
</template>
