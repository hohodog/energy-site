<script setup>
import { isTechVariant } from '../config/siteVariant'
import ContactCorporate from '../components/variants/ContactCorporate.vue'
import ContactTech from '../components/variants/ContactTech.vue'
</script>

<template>
  <component :is="isTechVariant ? ContactTech : ContactCorporate" />
</template>
