<script setup>
import { isTechVariant } from '../config/siteVariant'
import HomeCorporate from '../components/variants/HomeCorporate.vue'
import HomeTech from '../components/variants/HomeTech.vue'
</script>

<template>
  <component :is="isTechVariant ? HomeTech : HomeCorporate" />
</template>
