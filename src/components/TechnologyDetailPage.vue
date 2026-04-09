<script setup>
defineProps({
  page: {
    type: Object,
    required: true,
  },
  sourceSlides: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="technology-page section-wrap" :data-theme="page.theme">
    <header class="panel hero">
      <div class="hero-copy">
        <p class="eyebrow">{{ page.eyebrow }}</p>
        <h1>{{ page.title }}</h1>
        <p class="hero-lead">{{ page.lead }}</p>

        <div class="hero-actions">
          <RouterLink class="hero-btn hero-btn-primary" to="/contact">Start a Sourcing Request</RouterLink>
          <RouterLink class="hero-btn hero-btn-secondary" to="/">Back to Overview</RouterLink>
        </div>
      </div>

      <div class="metrics-grid">
        <article v-for="metric in page.metrics" :key="metric.label" class="metric-card">
          <span class="metric-label">{{ metric.label }}</span>
          <strong>{{ metric.value }}</strong>
          <p>{{ metric.detail }}</p>
        </article>
      </div>
    </header>

    <section class="content-grid">
      <article class="panel overview-card">
        <p class="section-kicker">Overview</p>
        <h2>{{ page.overview.title }}</h2>
        <p>{{ page.overview.text }}</p>
      </article>

      <article v-if="page.primaryFigure" class="panel figure-card">
        <div class="figure-copy">
          <p class="section-kicker">Deck Visual</p>
          <h2>{{ page.primaryFigure.title }}</h2>
          <p>{{ page.primaryFigure.text }}</p>
        </div>
        <img :src="page.primaryFigure.image" :alt="page.primaryFigure.alt" />
      </article>
    </section>

    <section v-if="page.highlights" class="panel">
      <div class="section-heading">
        <p class="section-kicker">Deck Reading</p>
        <h2>{{ page.highlights.title }}</h2>
      </div>

      <div class="highlight-grid">
        <article v-for="item in page.highlights.items" :key="item.title" class="highlight-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="panel">
      <div class="section-heading">
        <p class="section-kicker">Technology</p>
        <h2>{{ page.routes.title }}</h2>
      </div>

      <div class="route-grid" :class="{ 'route-grid-compact': page.routes.items.length <= 2 }">
        <article v-for="route in page.routes.items" :key="route.name" class="route-card">
          <span class="route-tag">{{ route.tag }}</span>
          <h3>{{ route.name }}</h3>
          <p>{{ route.body }}</p>
        </article>
      </div>
    </section>

    <section class="panel comparison-panel">
      <div class="comparison-head">
        <div class="section-heading">
          <p class="section-kicker">Comparison</p>
          <h2>{{ page.comparison.title }}</h2>
        </div>

        <img
          v-if="page.comparison.figureImage"
          class="comparison-figure"
          :src="page.comparison.figureImage"
          :alt="page.comparison.figureAlt"
        />
      </div>

      <div class="comparison-grid">
        <article v-for="row in page.comparison.rows" :key="row.label" class="comparison-card">
          <span class="comparison-label">{{ row.label }}</span>

          <div class="comparison-columns">
            <div class="comparison-side comparison-side-strong">
              <small>{{ page.comparison.leftTitle }}</small>
              <p>{{ row.left }}</p>
            </div>

            <div class="comparison-side">
              <small>{{ page.comparison.rightTitle }}</small>
              <p>{{ row.right }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="panel">
      <div class="section-heading">
        <p class="section-kicker">Portfolio</p>
        <h2>{{ page.products.title }}</h2>
      </div>

      <div class="product-grid">
        <article v-for="product in page.products.items" :key="product.name" class="product-card">
          <h3>{{ product.name }}</h3>

          <ul>
            <li v-for="spec in product.specs" :key="spec">{{ spec }}</li>
          </ul>

          <p>{{ product.description }}</p>
        </article>
      </div>
    </section>

    <section class="panel applications-panel">
      <div class="applications-head">
        <div class="section-heading">
          <p class="section-kicker">Applications</p>
          <h2>{{ page.applications.title }}</h2>
        </div>

        <img
          v-if="page.applications.featureImage"
          class="applications-feature"
          :src="page.applications.featureImage"
          :alt="page.applications.featureAlt"
        />
      </div>

      <div class="application-grid" :class="{ 'application-grid-text': !page.applications.items[0]?.image }">
        <article v-for="item in page.applications.items" :key="item.name" class="application-card">
          <img v-if="item.image" :src="item.image" :alt="item.name" />

          <div class="application-copy">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="panel buyer-panel">
      <article class="buyer-card">
        <p class="section-kicker">Best-Fit Buyers</p>
        <h2>{{ page.buyerFit.title }}</h2>

        <ul class="buyer-list">
          <li v-for="item in page.buyerFit.items" :key="item">{{ item }}</li>
        </ul>
      </article>

      <article class="buyer-card">
        <p class="section-kicker">Why Work Through Us</p>
        <h2>{{ page.sourcingSupport.title }}</h2>

        <div class="support-grid">
          <article v-for="item in page.sourcingSupport.items" :key="item.title" class="support-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </article>
    </section>

    <section v-if="sourceSlides.length" class="panel source-panel">
      <div class="section-heading">
        <p class="section-kicker">Source Deck</p>
        <h2>Slide Preview Used For The Rebuild</h2>
        <p class="section-body">
          These previews stay on the page so the structured website content can still be checked against the original presentation.
        </p>
      </div>

      <div class="source-grid">
        <article v-for="slide in sourceSlides" :key="slide.label" class="source-card">
          <img :src="slide.src" :alt="slide.alt" />

          <div class="source-copy">
            <span>{{ slide.label }}</span>
            <h3>{{ slide.title }}</h3>
          </div>
        </article>
      </div>
    </section>

    <section class="panel cta-panel">
      <div class="cta-copy">
        <p class="section-kicker inverse-kicker">Sourcing CTA</p>
        <h2>{{ page.cta.title }}</h2>
        <p>{{ page.cta.text }}</p>
      </div>

      <div class="cta-actions">
        <RouterLink class="cta-btn cta-btn-primary" to="/contact">Send Sourcing Request</RouterLink>
        <RouterLink class="cta-btn cta-btn-secondary" to="/about">See How We Work</RouterLink>
      </div>
    </section>
  </section>
</template>

<style scoped>
.technology-page {
  --page-accent: #15856f;
  --page-accent-deep: #0f3d36;
  --page-accent-soft: rgba(21, 133, 111, 0.12);
  --page-accent-glow: rgba(21, 133, 111, 0.18);
  --page-bg-top: #edf7f3;
  --page-bg-bottom: #f7faf7;
  display: grid;
  gap: 24px;
  padding-top: 32px;
  padding-bottom: 56px;
  background:
    radial-gradient(circle at top right, var(--page-accent-glow), transparent 26%),
    linear-gradient(180deg, var(--page-bg-top) 0%, var(--page-bg-bottom) 100%);
}

.technology-page[data-theme='super'] {
  --page-accent: #0f8fb2;
  --page-accent-deep: #0b3142;
  --page-accent-soft: rgba(15, 143, 178, 0.12);
  --page-accent-glow: rgba(15, 143, 178, 0.2);
  --page-bg-top: #eef8fb;
  --page-bg-bottom: #f9fbfc;
}

.technology-page[data-theme='sodium'] {
  --page-accent: #b97316;
  --page-accent-deep: #4f3210;
  --page-accent-soft: rgba(185, 115, 22, 0.12);
  --page-accent-glow: rgba(185, 115, 22, 0.18);
  --page-bg-top: #fcf4e8;
  --page-bg-bottom: #fcfaf6;
}

.technology-page[data-theme='solid'] {
  --page-accent: #2e8e55;
  --page-accent-deep: #173823;
  --page-accent-soft: rgba(46, 142, 85, 0.12);
  --page-accent-glow: rgba(46, 142, 85, 0.18);
  --page-bg-top: #eff8f1;
  --page-bg-bottom: #f8fbf8;
}

.panel {
  border-radius: 30px;
  border: 1px solid rgba(204, 219, 211, 0.9);
  background:
    radial-gradient(circle at top right, var(--page-accent-glow), transparent 28%),
    rgba(255, 255, 255, 0.9);
  box-shadow: 0 18px 42px rgba(17, 37, 28, 0.08);
  padding: 30px;
}

.hero {
  display: grid;
  gap: 28px;
  background:
    radial-gradient(circle at top left, var(--page-accent-glow), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(245, 250, 247, 0.92));
}

.hero-copy {
  max-width: 780px;
}

.eyebrow,
.section-kicker,
.route-tag,
.comparison-label,
.inverse-kicker {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.eyebrow,
.section-kicker,
.route-tag,
.comparison-label {
  background: var(--page-accent-soft);
  color: var(--page-accent);
}

.inverse-kicker {
  background: rgba(255, 255, 255, 0.12);
  color: #d9f2ea;
}

h1 {
  margin-top: 14px;
  font-size: clamp(38px, 5.5vw, 64px);
  line-height: 0.98;
  color: #13281f;
}

h2 {
  margin-top: 12px;
  font-size: clamp(28px, 3vw, 38px);
  line-height: 1.06;
  color: #173126;
}

h3 {
  margin: 0;
  font-size: 21px;
  line-height: 1.15;
  color: #173227;
}

.hero-lead,
.section-body,
.overview-card p,
.figure-copy p,
.highlight-card p,
.route-card p,
.product-card p,
.application-copy p,
.support-card p,
.source-copy span {
  color: #53675e;
}

.hero-lead {
  margin-top: 18px;
  max-width: 720px;
  font-size: 18px;
  line-height: 1.75;
}

.hero-actions,
.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-actions {
  margin-top: 24px;
}

.hero-btn,
.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 18px;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.hero-btn:hover,
.cta-btn:hover {
  transform: translateY(-1px);
}

.hero-btn-primary,
.cta-btn-primary {
  color: #f5fffb;
  background: linear-gradient(135deg, var(--page-accent) 0%, color-mix(in srgb, var(--page-accent) 72%, #ffffff 28%) 100%);
  box-shadow: 0 14px 24px rgba(13, 44, 35, 0.12);
}

.hero-btn-secondary,
.cta-btn-secondary {
  color: #19392d;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(202, 217, 209, 0.95);
}

.metrics-grid,
.highlight-grid,
.route-grid,
.product-grid,
.application-grid,
.source-grid {
  display: grid;
  gap: 16px;
}

.metrics-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.metric-card,
.highlight-card,
.route-card,
.product-card,
.application-card,
.buyer-card,
.support-card,
.source-card,
.comparison-card {
  border-radius: 24px;
  border: 1px solid rgba(205, 219, 212, 0.96);
  background: rgba(250, 252, 251, 0.94);
}

.metric-card,
.highlight-card,
.route-card,
.product-card,
.buyer-card,
.support-card,
.comparison-card {
  padding: 22px;
}

.metric-card {
  position: relative;
  overflow: hidden;
}

.metric-card::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 5px;
  background: linear-gradient(180deg, var(--page-accent), transparent);
}

.metric-label {
  display: block;
  color: #486157;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.metric-card strong {
  display: block;
  margin-top: 12px;
  font-size: 30px;
  line-height: 1;
  color: #122a20;
}

.metric-card p {
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.55;
  color: #587066;
}

.content-grid {
  display: grid;
  gap: 20px;
}

.figure-card,
.comparison-head,
.applications-head {
  display: grid;
  gap: 20px;
}

.figure-card img,
.comparison-figure,
.applications-feature,
.application-card img,
.source-card img {
  width: 100%;
  border-radius: 22px;
  border: 1px solid rgba(211, 223, 217, 0.95);
  background: #fff;
}

.overview-card p,
.figure-copy p {
  margin-top: 14px;
  font-size: 17px;
  line-height: 1.72;
}

.section-heading {
  max-width: 840px;
}

.section-body {
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.7;
}

.highlight-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.highlight-card p,
.route-card p,
.product-card p,
.application-copy p,
.support-card p {
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.68;
}

.route-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.route-grid-compact {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.route-card h3 {
  margin-top: 14px;
}

.comparison-panel {
  display: grid;
  gap: 22px;
}

.comparison-figure {
  max-height: 360px;
  object-fit: contain;
}

.comparison-grid {
  display: grid;
  gap: 16px;
}

.comparison-label {
  margin-bottom: 16px;
}

.comparison-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.comparison-side {
  border-radius: 18px;
  border: 1px solid rgba(214, 225, 219, 0.94);
  background: rgba(255, 255, 255, 0.92);
  padding: 16px;
}

.comparison-side-strong {
  background:
    radial-gradient(circle at top right, var(--page-accent-glow), transparent 40%),
    rgba(255, 255, 255, 0.96);
}

.comparison-side small {
  display: block;
  color: #537067;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.comparison-side p {
  margin: 10px 0 0;
  color: #183226;
  line-height: 1.65;
}

.product-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.product-card ul,
.buyer-list {
  margin: 16px 0 0;
  padding-left: 20px;
  display: grid;
  gap: 8px;
  color: #284239;
}

.applications-panel {
  display: grid;
  gap: 20px;
}

.applications-feature {
  max-height: 420px;
  object-fit: cover;
}

.application-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 4px;
}

.application-grid-text {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.application-card {
  overflow: hidden;
}

.application-card img {
  aspect-ratio: 16 / 8;
  object-fit: cover;
  border: 0;
  border-bottom: 1px solid rgba(205, 219, 212, 0.96);
  border-radius: 0;
}

.application-copy {
  padding: 22px;
}

.buyer-panel {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 18px;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 18px;
}

.source-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.source-card {
  overflow: hidden;
}

.source-card img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border: 0;
  border-radius: 0;
}

.source-copy {
  padding: 18px 20px 20px;
}

.source-copy span {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cta-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--page-accent) 28%, transparent), transparent 24%),
    linear-gradient(145deg, var(--page-accent-deep) 0%, color-mix(in srgb, var(--page-accent-deep) 55%, #0e1915 45%) 100%);
  border-color: rgba(255, 255, 255, 0.08);
}

.cta-copy h2 {
  color: #f2fbf7;
}

.cta-copy p {
  margin-top: 14px;
  max-width: 760px;
  color: rgba(242, 251, 247, 0.76);
  font-size: 16px;
  line-height: 1.7;
}

.cta-btn-secondary {
  color: #edf8f2;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.16);
}

@media (min-width: 960px) {
  .hero,
  .figure-card,
  .comparison-head,
  .applications-head {
    grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
    align-items: start;
  }

  .content-grid {
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  }
}

@media (max-width: 1100px) {
  .metrics-grid,
  .highlight-grid,
  .product-grid,
  .source-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .route-grid,
  .support-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .buyer-panel {
    grid-template-columns: 1fr;
  }

  .cta-panel {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 760px) {
  .technology-page {
    padding-top: 24px;
    padding-bottom: 44px;
  }

  .panel {
    padding: 22px;
    border-radius: 24px;
  }

  .metrics-grid,
  .highlight-grid,
  .route-grid,
  .route-grid-compact,
  .product-grid,
  .application-grid,
  .application-grid-text,
  .support-grid,
  .source-grid,
  .comparison-columns {
    grid-template-columns: 1fr;
  }

  .hero-lead,
  .overview-card p,
  .figure-copy p,
  .highlight-card p,
  .route-card p,
  .product-card p,
  .application-copy p,
  .support-card p,
  .cta-copy p {
    font-size: 15px;
  }

  .metric-card strong {
    font-size: 26px;
  }

  .hero-btn,
  .cta-btn {
    width: 100%;
  }
}
</style>
