<script setup>
import sodiumCover from '../../assets/sodium/slides/page-01.jpg'
import solidCover from '../../assets/solid/slides/page-01.jpg'
import superCover from '../../assets/supercapacitor/slides/page-01.jpg'
import flowCover from '../../assets/redox/deck/1.jpeg'
import heroPanorama from '../../assets/home/deck/hero-panorama.png'
import teamSlide from '../../assets/home/deck/team-slide.png'

const technologyCards = [
  {
    title: '钠离子电池',
    path: '/sodium',
    cover: sodiumCover,
    summary: '兼顾成本、供应稳定性与宽温表现，适用于多种储能场景。',
  },
  {
    title: '固态电池',
    path: '/solid',
    cover: solidCover,
    summary: '面向高安全与高能量密度需求，适用于下一代电池应用。',
  },
  {
    title: '液流电池',
    path: '/redox',
    cover: flowCover,
    summary: '适用于电网级与长时储能场景，突出安全性与循环寿命。',
  },
  {
    title: '超级电容',
    path: '/supercapacitor',
    cover: superCover,
    summary: '适用于高功率、快速响应与高频充放电应用。',
  },
]

const metrics = [
  { value: '04', label: '技术平台' },
  { value: '中国 + 欧洲', label: '协同模式' },
  { value: '项目导向', label: '沟通支持' },
]
</script>

<template>
  <div class="home-tech">
    <section class="section-wrap hero-section">
      <div class="hero-shell">
        <div class="hero-copy">
          <h1>先进储能技术，为全球项目提供更清晰的选择路径。</h1>
          <p class="hero-text">
            以更清晰的结构呈现关键技术路线、应用方向与协同能力，帮助项目更高效地进入下一步沟通。
          </p>

          <div class="hero-actions">
            <RouterLink class="btn btn-primary" to="/contact">联系我们</RouterLink>
            <RouterLink class="btn btn-secondary" to="/about">公司介绍</RouterLink>
          </div>
        </div>

        <div class="hero-visual">
          <img :src="heroPanorama" alt="先进储能应用全景图" />

          <div class="hero-metrics">
            <article v-for="item in metrics" :key="item.label" class="hero-metric">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section-wrap platform-section">
      <div class="section-heading">
        <p class="section-kicker">技术平台</p>
        <h2>覆盖多条先进储能路线，支持快速进入技术判断。</h2>
      </div>

      <div class="platform-grid">
        <RouterLink v-for="item in technologyCards" :key="item.path" class="platform-card" :to="item.path">
          <figure class="platform-media">
            <img :src="item.cover" :alt="item.title" />
          </figure>

          <div class="platform-body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="section-wrap team-section">
      <div class="team-shell">
        <figure class="team-frame">
          <img :src="teamSlide" alt="团队介绍素材" />
        </figure>

        <div class="team-copy">
          <p class="section-kicker">团队介绍</p>
          <h2>围绕技术展示、供应沟通与项目推进形成协同支持。</h2>
          <p>
            结合团队背景、技术资料与项目沟通经验，为先进储能合作提供更稳定的支持。
          </p>
          <RouterLink class="btn btn-primary" to="/about">了解团队</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-tech {
  padding-bottom: 20px;
  background:
    radial-gradient(circle at top right, rgba(43, 191, 214, 0.12), transparent 20%),
    linear-gradient(180deg, #061311 0%, #0b1917 42%, #0e1e1a 100%);
}

.hero-section,
.platform-section,
.team-section {
  padding-top: 12px;
}

.hero-shell,
.hero-metric,
.platform-card,
.team-shell,
.team-copy {
  border: 1px solid rgba(131, 172, 166, 0.16);
  border-radius: 30px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.24);
}

.hero-shell {
  display: grid;
  grid-template-columns: minmax(320px, 0.92fr) minmax(0, 1.08fr);
  gap: 22px;
}

.hero-copy,
.hero-visual {
  min-height: clamp(320px, 44vw, 520px);
}

.hero-copy {
  padding: clamp(28px, 4vw, 46px);
  background:
    radial-gradient(circle at top left, rgba(63, 228, 255, 0.12), transparent 26%),
    linear-gradient(160deg, rgba(14, 34, 31, 0.98), rgba(8, 22, 19, 0.98));
}

.hero-kicker,
.section-kicker {
  margin: 0;
  color: rgba(117, 226, 241, 0.84);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-copy h1,
.section-heading h2,
.team-copy h2 {
  line-height: 0.96;
}

.hero-copy h1 {
  margin-top: 18px;
  max-width: 11ch;
  color: #effffc;
  font-size: clamp(38px, 5.2vw, 68px);
}

.hero-text,
.platform-body p,
.team-copy p {
  margin: 18px 0 0;
  color: rgba(211, 228, 224, 0.78);
  font-size: 16px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.btn:hover,
.platform-card:hover {
  transform: translateY(-1px);
}

.btn-primary {
  color: #041311;
  background: linear-gradient(135deg, #46d7ef 0%, #7de8f3 100%);
  box-shadow: 0 16px 34px rgba(42, 191, 214, 0.2);
}

.btn-secondary {
  color: #d8efeb;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(142, 183, 176, 0.18);
}

.hero-visual {
  position: relative;
  overflow: hidden;
  background: #071513;
}

.hero-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.92;
}

.hero-metrics {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.hero-metric {
  display: grid;
  gap: 8px;
  padding: 18px;
  background: rgba(10, 28, 25, 0.76);
  backdrop-filter: blur(14px);
}

.hero-metric strong {
  color: #ecfffc;
  font-size: 26px;
  line-height: 1;
}

.hero-metric span {
  color: rgba(205, 223, 219, 0.76);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 16px;
}

.section-heading h2 {
  margin-top: 12px;
  color: #effffc;
  font-size: clamp(30px, 4vw, 50px);
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.platform-card {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.platform-media {
  margin: 0;
  padding: 12px 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.platform-media img {
  width: 100%;
  aspect-ratio: 16 / 8.5;
  object-fit: contain;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  max-height: 280px;
}

.platform-body {
  padding: 20px;
}

.platform-body h3 {
  color: #effffc;
  font-size: 28px;
  line-height: 1.08;
}

.team-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(320px, 0.82fr);
  gap: 18px;
  padding: 18px;
  background:
    radial-gradient(circle at top left, rgba(55, 197, 219, 0.1), transparent 24%),
    linear-gradient(180deg, rgba(9, 22, 20, 0.98), rgba(7, 19, 17, 0.98));
}

.team-frame {
  margin: 0;
  overflow: hidden;
  border-radius: 24px;
  max-width: 960px;
}

.team-frame img {
  width: 100%;
}

.team-copy {
  display: grid;
  align-content: center;
  gap: 0;
  padding: clamp(22px, 3vw, 30px);
  background: rgba(255, 255, 255, 0.04);
}

.team-copy h2 {
  margin-top: 14px;
  color: #effffc;
  font-size: clamp(30px, 4vw, 46px);
}

.team-copy .btn {
  margin-top: 24px;
  width: fit-content;
}

@media (max-width: 1080px) {
  .hero-shell,
  .platform-grid,
  .team-shell,
  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    max-width: none;
  }
}

@media (max-width: 720px) {
  .home-tech {
    padding-bottom: 32px;
  }

  .hero-section,
  .platform-section,
  .team-section {
    padding-top: 18px;
  }

  .hero-shell,
  .hero-metric,
  .platform-card,
  .team-shell,
  .team-copy {
    border-radius: 24px;
  }

  .hero-copy,
  .platform-body,
  .team-copy {
    padding: 20px;
  }

  .hero-copy h1,
  .section-heading h2,
  .team-copy h2,
  .platform-body h3 {
    font-size: clamp(28px, 9vw, 44px);
  }

  .hero-text,
  .platform-body p,
  .team-copy p {
    font-size: 15px;
    line-height: 1.72;
  }

  .platform-media {
    padding: 12px 12px 0;
  }

  .hero-metrics {
    left: 12px;
    right: 12px;
    bottom: 12px;
  }
}
</style>
