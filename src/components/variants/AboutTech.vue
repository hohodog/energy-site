<script setup>
import teamSlide from '../../assets/home/deck/team-slide.png'

const pillars = [
  '以资料为主导的技术展示',
  '更清晰的先进储能定位',
  '中国供应链资源对接',
  '面向欧洲市场的沟通支持',
]
</script>

<template>
  <section class="about-tech">
    <section class="section-wrap hero-section">
      <div class="hero-shell">
        <div class="hero-copy">
          <p class="eyebrow">关于我们</p>
          <h1>以更清晰的方式连接先进储能技术、供应资源与项目需求。</h1>
          <p>
            围绕先进储能项目的技术判断、资料展示与跨境协同，提供更直接的沟通支持。
          </p>
          <RouterLink class="btn btn-primary" to="/contact">联系团队</RouterLink>
        </div>

        <figure class="hero-media">
          <img :src="teamSlide" alt="团队介绍素材" />
        </figure>
      </div>
    </section>

    <section class="section-wrap pillars-section">
      <div class="section-heading">
        <p class="section-kicker">核心特征</p>
        <h2>我们在先进储能项目中的核心能力。</h2>
      </div>

      <div class="pillar-grid">
        <article v-for="item in pillars" :key="item" class="pillar-card">
          <span></span>
          <strong>{{ item }}</strong>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>
.about-tech {
  padding-top: 4px;
  padding-bottom: 16px;
  display: grid;
  gap: 24px;
  background:
    radial-gradient(circle at top right, rgba(43, 191, 214, 0.12), transparent 20%),
    linear-gradient(180deg, #061311 0%, #0b1917 42%, #0e1e1a 100%);
}

.hero-section,
.pillars-section {
  padding-top: 12px;
}

.hero-shell,
.pillar-card {
  border: 1px solid rgba(131, 172, 166, 0.16);
  border-radius: 32px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.24);
}

.hero-shell {
  display: grid;
  grid-template-columns: minmax(320px, 0.86fr) minmax(0, 1.14fr);
  gap: 22px;
}

.hero-copy,
.hero-media {
  min-height: clamp(420px, 54vw, 680px);
}

.hero-copy {
  padding: clamp(28px, 4vw, 46px);
  background:
    radial-gradient(circle at top left, rgba(63, 228, 255, 0.12), transparent 26%),
    linear-gradient(160deg, rgba(14, 34, 31, 0.98), rgba(8, 22, 19, 0.98));
}

.eyebrow,
.section-kicker {
  margin: 0;
  color: rgba(117, 226, 241, 0.84);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-copy h1,
.section-heading h2 {
  margin-top: 16px;
  color: #effffc;
  line-height: 0.96;
}

.hero-copy h1 {
  max-width: 11ch;
  font-size: clamp(38px, 5.2vw, 70px);
}

.hero-copy p:not(.eyebrow) {
  margin: 18px 0 0;
  color: rgba(211, 228, 224, 0.78);
  font-size: 16px;
  line-height: 1.82;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  margin-top: 26px;
  border-radius: 999px;
  font-weight: 700;
  color: #041311;
  background: linear-gradient(135deg, #46d7ef 0%, #7de8f3 100%);
  box-shadow: 0 16px 34px rgba(42, 191, 214, 0.2);
}

.hero-media {
  margin: 0;
  overflow: hidden;
  background: #071513;
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section-heading {
  max-width: 760px;
}

.section-heading h2 {
  font-size: clamp(30px, 4vw, 52px);
}

.pillar-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.pillar-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px;
  background: rgba(255, 255, 255, 0.04);
}

.pillar-card span {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: linear-gradient(135deg, #46d7ef 0%, #7de8f3 100%);
  box-shadow: 0 0 0 8px rgba(70, 215, 239, 0.08);
}

.pillar-card strong {
  color: #effffc;
  font-size: 24px;
  line-height: 1.25;
}

@media (max-width: 980px) {
  .hero-shell,
  .pillar-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    max-width: none;
  }
}

@media (max-width: 720px) {
  .about-tech {
    padding-top: 0;
    gap: 18px;
  }

  .hero-section,
  .pillars-section {
    padding-top: 18px;
  }

  .hero-shell,
  .pillar-card {
    border-radius: 24px;
  }

  .hero-copy,
  .pillar-card {
    padding: 20px;
  }

  .hero-copy h1,
  .section-heading h2,
  .pillar-card strong {
    font-size: clamp(30px, 9vw, 46px);
  }

  .hero-copy p:not(.eyebrow) {
    font-size: 15px;
    line-height: 1.72;
  }
}
</style>
