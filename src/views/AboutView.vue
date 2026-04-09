<script setup>
import { isTechVariant } from '../config/siteVariant'
import AboutCorporate from '../components/variants/AboutCorporate.vue'
import AboutTech from '../components/variants/AboutTech.vue'
</script>

<template>
  <component :is="isTechVariant ? AboutTech : AboutCorporate" />
</template>
