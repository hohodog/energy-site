<script setup>
import DeckMaterialPage from '../components/DeckMaterialPage.vue'
import page01 from '../assets/solid/slides/page-01.jpg'
import page02 from '../assets/solid/slides/page-02.jpg'
import page03 from '../assets/solid/slides/page-03.jpg'
import page04 from '../assets/solid/slides/page-04.jpg'
import page05 from '../assets/solid/slides/page-05.jpg'
import page06 from '../assets/solid/slides/page-06.jpg'
import page07 from '../assets/solid/slides/page-07.jpg'

const slides = [
  { src: page01, alt: '固态电池资料第 1 页' },
  { src: page02, alt: '固态电池资料第 2 页' },
  { src: page03, alt: '固态电池资料第 3 页' },
  { src: page04, alt: '固态电池资料第 4 页' },
  { src: page05, alt: '固态电池资料第 5 页' },
  { src: page06, alt: '固态电池资料第 6 页' },
  { src: page07, alt: '固态电池资料第 7 页' },
]
</script>

<template>
  <DeckMaterialPage
    theme="solid"
    :slides="slides"
  />
</template>
