<script setup>
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'flow',
  },
  slides: {
    type: Array,
    required: true,
  },
})

const leadSlide = computed(() => props.slides[0])
const supportingSlides = computed(() => props.slides.slice(1, 3))
const gallerySlides = computed(() => props.slides.slice(3))
</script>

<template>
  <section class="deck-page" :data-theme="theme">
    <div class="section-wrap deck-layout">
      <figure v-if="leadSlide" class="lead-frame">
        <img :src="leadSlide.src" :alt="leadSlide.alt" />
      </figure>

      <div v-if="supportingSlides.length" class="support-grid">
        <figure v-for="slide in supportingSlides" :key="slide.src" class="support-frame">
          <img :src="slide.src" :alt="slide.alt" />
        </figure>
      </div>

      <div v-if="gallerySlides.length" class="gallery-grid">
        <figure v-for="slide in gallerySlides" :key="slide.src" class="gallery-frame">
          <img :src="slide.src" :alt="slide.alt" />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.deck-page {
  --page-accent-glow: rgba(43, 195, 214, 0.14);
  padding-top: 8px;
  padding-bottom: 20px;
  background:
    radial-gradient(circle at top right, var(--page-accent-glow), transparent 24%),
    linear-gradient(180deg, #eef3f5 0%, #f8faf9 42%, #f2f3f0 100%);
}

.deck-page[data-theme='sodium'] {
  --page-accent-glow: rgba(185, 125, 34, 0.14);
}

.deck-page[data-theme='solid'] {
  --page-accent-glow: rgba(47, 143, 87, 0.14);
}

.deck-page[data-theme='super'] {
  --page-accent-glow: rgba(21, 151, 187, 0.14);
}

.deck-layout {
  display: grid;
  gap: 18px;
}

.lead-frame,
.support-frame,
.gallery-frame {
  margin: 0;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(206, 218, 212, 0.94);
  box-shadow: 0 18px 44px rgba(18, 34, 27, 0.08);
  background:
    radial-gradient(circle at top right, var(--page-accent-glow), transparent 24%),
    linear-gradient(180deg, rgba(253, 254, 254, 0.98), rgba(247, 250, 249, 0.98));
  padding: clamp(10px, 1.4vw, 18px);
}

.lead-frame {
  max-width: 1120px;
  justify-self: center;
  width: 100%;
}

.lead-frame img,
.support-frame img,
.gallery-frame img {
  width: 100%;
  display: block;
  border-radius: 18px;
  object-fit: contain;
  margin: 0 auto;
}

.lead-frame img {
  max-height: min(62vh, 760px);
}

.support-frame img,
.gallery-frame img {
  max-height: min(46vh, 520px);
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 540px));
  justify-content: center;
  gap: 18px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 540px));
  justify-content: center;
  gap: 18px;
}

@media (max-width: 900px) {
  .support-grid,
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .lead-frame,
  .support-frame,
  .gallery-frame {
    border-radius: 22px;
    padding: 10px;
  }
}

@media (max-width: 640px) {
  .deck-page {
    padding-top: 6px;
    padding-bottom: 18px;
  }

  .deck-layout {
    gap: 14px;
  }
}
</style>
