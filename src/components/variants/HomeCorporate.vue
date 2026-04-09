<script setup>
import sodiumCover from '../../assets/sodium/slides/page-01.jpg'
import solidCover from '../../assets/solid/slides/page-01.jpg'
import superCover from '../../assets/supercapacitor/slides/page-01.jpg'
import flowCover from '../../assets/redox/deck/1.jpeg'
import heroPanorama from '../../assets/home/deck/hero-panorama.png'
import teamSlide from '../../assets/home/deck/team-slide.png'
import storageLinkBg from '../../assets/home/deck/storage-link-bg.jpeg'

const technologyCards = [
  {
    title: '钠离子电池',
    path: '/sodium',
    cover: sodiumCover,
    summary: '适合更务实的储能项目，在成本、供应稳定性和宽温表现之间保持平衡。',
    tags: ['实用储能', '宽温适应', '成本平衡'],
  },
  {
    title: '固态电池',
    path: '/solid',
    cover: solidCover,
    summary: '适合重视高安全与高能量密度的前沿项目，是更偏未来方向的电池路线。',
    tags: ['下一代方向', '高安全', '高能量密度'],
  },
  {
    title: '液流电池',
    path: '/redox',
    cover: flowCover,
    summary: '适合电网级与工商业长时储能场景，强调更长循环寿命与更高安全性。',
    tags: ['长时储能', '电网级', '低火灾风险'],
  },
  {
    title: '超级电容',
    path: '/supercapacitor',
    cover: superCover,
    summary: '适合需要极快响应和高频充放的场景，更强调功率特性而不是长时间放电。',
    tags: ['快速响应', '高功率', '长寿命'],
  },
]

const companyFacts = [
  { value: '4', label: '核心技术路线' },
  { value: '中国 + 欧洲', label: '协同结构' },
  { value: '项目导向', label: '服务模式' },
]

const supportPoints = [
  '基于项目场景进行技术路线筛选。',
  '对接中国先进储能供应链资源。',
  '支持面向欧洲客户的沟通与项目协同。',
]
</script>

<template>
  <div class="home">
    <section class="section-wrap hero-section">
      <div class="hero-shell">
        <div class="hero-copy">
          <h1>连接全球先进储能产品与项目需求</h1>
          <p class="hero-text">
            聚焦钠离子、液流、固态和超级电容等先进储能路线，支持技术展示、供应链对接与跨境项目沟通。
          </p>

          <div class="hero-actions">
            <RouterLink class="btn btn-primary" to="/contact">联系我们</RouterLink>
            <RouterLink class="btn btn-secondary" to="/about">了解我们</RouterLink>
          </div>
        </div>

        <figure class="hero-media">
          <img :src="heroPanorama" alt="先进储能应用全景图" />
        </figure>
      </div>
    </section>

    <section class="section-wrap facts-section">
      <div class="facts-grid">
        <article v-for="item in companyFacts" :key="item.label" class="fact-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </div>
    </section>

    <section class="section-wrap team-section">
      <div class="section-heading">
        <p class="section-kicker">团队介绍</p>
        <h2>以清晰资料与稳定沟通支持项目合作。</h2>
      </div>

      <figure class="team-frame">
        <img :src="teamSlide" alt="团队介绍素材" />
      </figure>
    </section>

    <section class="section-wrap technology-section">
      <div class="section-heading">
        <p class="section-kicker">技术平台</p>
        <h2>覆盖多条先进储能路线，服务不同项目场景。</h2>
      </div>

      <div class="technology-grid">
        <RouterLink v-for="item in technologyCards" :key="item.path" class="technology-card" :to="item.path">
          <figure class="technology-media">
            <img :src="item.cover" :alt="item.title" />
          </figure>

          <div class="technology-body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>

            <div class="technology-tags">
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="section-wrap support-section">
      <div class="support-shell">
        <div class="support-copy">
          <p class="section-kicker section-kicker-light">合作支持</p>
          <h2>用更清晰的结构连接供应端与客户端沟通。</h2>

          <ul>
            <li v-for="item in supportPoints" :key="item">{{ item }}</li>
          </ul>

          <div class="hero-actions">
            <RouterLink class="btn btn-primary" to="/contact">开始沟通项目</RouterLink>
          </div>
        </div>

        <figure class="support-media">
          <img :src="storageLinkBg" alt="服务展示图" />
        </figure>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding-bottom: 24px;
  background:
    radial-gradient(circle at top right, rgba(70, 168, 187, 0.08), transparent 20%),
    linear-gradient(180deg, #eef3f4 0%, #f7f9f7 42%, #f0f2ef 100%);
}

.hero-section,
.facts-section,
.team-section,
.technology-section,
.support-section {
  padding-top: 12px;
}

.hero-shell,
.fact-card,
.team-frame,
.technology-card,
.support-shell {
  border-radius: 30px;
  border: 1px solid rgba(206, 217, 212, 0.94);
  box-shadow: 0 18px 48px rgba(17, 33, 27, 0.08);
}

.hero-shell {
  display: grid;
  grid-template-columns: minmax(320px, 0.96fr) minmax(0, 1.04fr);
  gap: 22px;
}

.hero-copy,
.hero-media {
  min-height: clamp(320px, 44vw, 500px);
}

.hero-copy {
  padding: clamp(30px, 4vw, 50px);
  background:
    radial-gradient(circle at top left, rgba(64, 182, 195, 0.12), transparent 24%),
    linear-gradient(160deg, #132824 0%, #17312c 52%, #1a3a34 100%);
}

.hero-kicker,
.section-kicker {
  margin: 0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-kicker {
  color: rgba(219, 236, 229, 0.78);
}

.section-kicker {
  color: #198f98;
}

.section-kicker-light {
  color: rgba(185, 232, 236, 0.82);
}

.hero-copy h1,
.section-heading h2,
.support-copy h2 {
  line-height: 0.98;
}

.hero-copy h1 {
  margin-top: 18px;
  max-width: 10ch;
  color: #f4fbf7;
  font-size: clamp(38px, 5.2vw, 68px);
}

.hero-text {
  margin: 18px 0 0;
  max-width: 54ch;
  color: rgba(228, 239, 233, 0.84);
  font-size: 17px;
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
.technology-card:hover {
  transform: translateY(-1px);
}

.btn-primary {
  color: #f6fffb;
  background: linear-gradient(135deg, #1ea4c5 0%, #53c8d8 100%);
  box-shadow: 0 16px 32px rgba(18, 71, 84, 0.16);
}

.btn-secondary {
  color: #173328;
  background: rgba(255, 255, 255, 0.92);
}

.hero-media,
.support-media {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.96);
}

.hero-media img,
.support-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.fact-card {
  display: grid;
  gap: 8px;
  padding: 24px 26px;
  background: rgba(255, 255, 255, 0.96);
}

.fact-card strong {
  color: #163127;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1;
}

.fact-card span {
  color: #5a6d65;
  font-size: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.section-heading {
  max-width: 780px;
  margin-bottom: 16px;
}

.section-heading h2 {
  margin-top: 12px;
  color: #173127;
  font-size: clamp(30px, 4vw, 50px);
}

.team-frame {
  overflow: hidden;
  padding: clamp(12px, 1.8vw, 18px);
  background: rgba(255, 255, 255, 0.97);
  max-width: 1120px;
  margin: 0 auto;
}

.team-frame img {
  width: 100%;
  border-radius: 22px;
}

.technology-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.technology-card {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.96);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.technology-media {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px 0;
  background: rgba(247, 250, 249, 0.96);
}

.technology-media img {
  width: 100%;
  aspect-ratio: 16 / 8.5;
  object-fit: contain;
  border-radius: 20px;
  max-height: 280px;
}

.technology-body {
  padding: 20px;
}

.technology-body h3 {
  color: #173127;
  font-size: 28px;
  line-height: 1.08;
}

.technology-body p {
  margin: 12px 0 0;
  color: #50655c;
  line-height: 1.76;
}

.technology-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.technology-tags span {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  color: #29463a;
  background: #edf4f2;
  font-size: 12px;
  font-weight: 700;
}

.support-shell {
  display: grid;
  grid-template-columns: minmax(320px, 0.92fr) minmax(0, 1.08fr);
  gap: 22px;
  overflow: hidden;
  background:
    radial-gradient(circle at top right, rgba(70, 176, 193, 0.12), transparent 24%),
    linear-gradient(160deg, #132824 0%, #17312c 52%, #1a3a34 100%);
}

.support-copy,
.support-media {
  min-height: clamp(260px, 30vw, 380px);
}

.support-copy {
  padding: clamp(28px, 4vw, 42px);
}

.support-copy h2 {
  margin-top: 14px;
  max-width: 14ch;
  color: #eff8f4;
  font-size: clamp(30px, 4vw, 48px);
}

.support-copy ul {
  margin: 18px 0 0;
  padding-left: 20px;
  color: rgba(230, 239, 234, 0.82);
  line-height: 1.8;
  display: grid;
  gap: 10px;
}

@media (max-width: 1080px) {
  .hero-shell,
  .support-shell,
  .facts-grid,
  .technology-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1,
  .support-copy h2 {
    max-width: none;
  }
}

@media (max-width: 720px) {
  .home {
    padding-bottom: 40px;
  }

  .hero-section,
  .facts-section,
  .team-section,
  .technology-section,
  .support-section {
    padding-top: 18px;
  }

  .hero-shell,
  .fact-card,
  .team-frame,
  .technology-card,
  .support-shell {
    border-radius: 24px;
  }

  .hero-copy,
  .fact-card,
  .technology-body,
  .support-copy {
    padding: 20px;
  }

  .hero-copy h1,
  .section-heading h2,
  .support-copy h2,
  .technology-body h3 {
    font-size: clamp(28px, 9vw, 44px);
  }

  .hero-text,
  .technology-body p {
    font-size: 15px;
    line-height: 1.72;
  }

  .technology-media {
    padding: 12px 12px 0;
  }
}
</style>
