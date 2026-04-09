<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  lead: {
    type: String,
    required: true,
  },
  pages: {
    type: Array,
    required: true,
  },
  buyerTypes: {
    type: Array,
    required: true,
  },
  buyThroughUs: {
    type: Array,
    required: true,
  },
  ctaEyebrow: {
    type: String,
    default: 'Sourcing Inquiry',
  },
  ctaTitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="brochure-page">
    <section class="section-wrap intro-shell">
      <div class="intro-copy">
        <p class="eyebrow">{{ eyebrow }}</p>
        <h1>{{ title }}</h1>
        <p class="lead">{{ lead }}</p>
      </div>

      <div class="intro-side">
        <strong>Best-fit buyers</strong>
        <ul>
          <li v-for="item in buyerTypes" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="section-wrap brochure-shell">
      <div class="section-head">
        <p class="eyebrow">Brochure Pages</p>
        <h2>Original Source Slides, In Order</h2>
      </div>

      <div class="brochure-stack">
        <article v-for="(page, index) in pages" :key="page.alt" class="page-card">
          <div class="page-label">Page {{ String(index + 1).padStart(2, '0') }}</div>
          <img :src="page.src" :alt="page.alt" />
        </article>
      </div>
    </section>

    <section class="section-wrap value-shell">
      <div class="section-head">
        <p class="eyebrow">Why Buy Through Us</p>
        <h2>Useful If You Want China Supply Access Without Starting From Zero</h2>
      </div>

      <div class="value-grid">
        <article v-for="item in buyThroughUs" :key="item.title" class="value-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section-wrap cta-shell">
      <div class="cta-card">
        <div>
          <p class="eyebrow inverse">{{ ctaEyebrow }}</p>
          <h2>{{ ctaTitle }}</h2>
        </div>

        <div class="cta-actions">
          <RouterLink class="cta-btn primary" to="/contact">Send a Sourcing Request</RouterLink>
          <RouterLink class="cta-btn secondary" to="/about">See How We Work</RouterLink>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.brochure-page {
  padding-top: 28px;
  padding-bottom: 56px;
  display: grid;
  gap: 28px;
  background:
    radial-gradient(circle at top right, rgba(121, 211, 219, 0.12), transparent 24%),
    linear-gradient(180deg, #eff4f2 0%, #f8faf9 100%);
}

.intro-shell,
.brochure-shell,
.value-shell,
.cta-shell {
  display: grid;
  gap: 20px;
}

.intro-shell {
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 380px);
  align-items: start;
}

.intro-copy,
.intro-side,
.page-card,
.value-card,
.cta-card {
  border-radius: 28px;
  border: 1px solid rgba(206, 220, 214, 0.95);
  background:
    radial-gradient(circle at top right, rgba(121, 211, 219, 0.08), transparent 28%),
    rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 50px rgba(24, 45, 35, 0.08);
}

.intro-copy,
.intro-side,
.value-card,
.cta-card {
  padding: 28px;
}

.eyebrow,
.inverse {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 11px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.eyebrow {
  background: rgba(44, 182, 195, 0.14);
  color: #1b8f98;
}

.inverse {
  background: rgba(255, 255, 255, 0.14);
  color: #b0edf0;
}

h1 {
  margin-top: 14px;
  font-size: clamp(36px, 5.2vw, 62px);
  line-height: 1.02;
  color: #163028;
  max-width: 900px;
}

.lead {
  margin-top: 18px;
  font-size: 18px;
  line-height: 1.7;
  color: #536860;
  max-width: 760px;
}

.intro-side strong {
  display: block;
  color: #17362d;
  font-size: 22px;
}

.intro-side ul {
  margin: 16px 0 0;
  padding-left: 20px;
  display: grid;
  gap: 10px;
  color: #496057;
}

.section-head {
  display: grid;
  gap: 12px;
  max-width: 860px;
}

.section-head h2 {
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.05;
  color: #19332b;
}

.brochure-stack {
  display: grid;
  gap: 20px;
}

.page-card {
  overflow: hidden;
  padding: 18px;
}

.page-label {
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #567169;
}

.page-card img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  display: block;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.value-card h3 {
  font-size: 24px;
  color: #17362d;
}

.value-card p {
  margin-top: 12px;
  color: #556a62;
  line-height: 1.7;
}

.cta-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 34px;
  background:
    radial-gradient(circle at top right, rgba(75, 219, 231, 0.18), transparent 24%),
    linear-gradient(135deg, #13312c 0%, #1d433c 58%, #2d5d53 100%);
  border-color: rgba(255, 255, 255, 0.08);
}

.cta-card h2 {
  margin-top: 14px;
  max-width: 820px;
  font-size: clamp(28px, 3.8vw, 42px);
  line-height: 1.08;
  color: #eef6f5;
}

.cta-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 20px;
  border-radius: 999px;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.cta-btn:hover {
  transform: translateY(-1px);
}

.cta-btn.primary {
  color: #11312a;
  background: linear-gradient(135deg, #68d5df 0%, #31b5c1 100%);
}

.cta-btn.secondary {
  color: #eef6f5;
  border: 1px solid rgba(238, 246, 245, 0.28);
  background: rgba(255, 255, 255, 0.06);
}

@media (max-width: 980px) {
  .intro-shell {
    grid-template-columns: 1fr;
  }

  .value-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    display: grid;
  }
}

@media (max-width: 640px) {
  .brochure-page {
    padding-top: 20px;
    padding-bottom: 40px;
  }

  .intro-copy,
  .intro-side,
  .value-card,
  .cta-card,
  .page-card {
    padding: 18px;
    border-radius: 22px;
  }

  .cta-actions {
    display: grid;
  }

  .cta-btn {
    width: 100%;
  }
}
</style>
