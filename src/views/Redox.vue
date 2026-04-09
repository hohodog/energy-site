<script setup>
import DeckMaterialPage from '../components/DeckMaterialPage.vue'
import page01 from '../assets/redox/deck/1.jpeg'
import page02 from '../assets/redox/deck/2.jpeg'
import page03 from '../assets/redox/deck/3.jpeg'
import page04 from '../assets/redox/deck/4.jpeg'
import page05 from '../assets/redox/deck/5.jpeg'
import page06 from '../assets/redox/deck/6.jpeg'
import page07 from '../assets/redox/deck/7.jpeg'
import page08 from '../assets/redox/deck/8.jpeg'
import page09 from '../assets/redox/deck/9.jpeg'

const slides = [
  { src: page01, alt: '液流电池资料第 1 页' },
  { src: page02, alt: '液流电池资料第 2 页' },
  { src: page03, alt: '液流电池资料第 3 页' },
  { src: page04, alt: '液流电池资料第 4 页' },
  { src: page05, alt: '液流电池资料第 5 页' },
  { src: page06, alt: '液流电池资料第 6 页' },
  { src: page07, alt: '液流电池资料第 7 页' },
  { src: page08, alt: '液流电池资料第 8 页' },
  { src: page09, alt: '液流电池资料第 9 页' },
]
</script>

<template>
  <DeckMaterialPage
    theme="flow"
    :slides="slides"
  />
</template>
