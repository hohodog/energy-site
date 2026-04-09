<script setup>
import heroPanorama from '../../assets/home/deck/hero-panorama.png'
import teamSlide from '../../assets/home/deck/team-slide.png'
import storageLinkBg from '../../assets/home/deck/storage-link-bg.jpeg'
import sodiumCover from '../../assets/sodium/slides/page-01.jpg'
import solidCover from '../../assets/solid/slides/page-01.jpg'
import superCover from '../../assets/supercapacitor/slides/page-01.jpg'
import flowCover from '../../assets/redox/deck/1.jpeg'

const capabilityPills = ['中国 + 欧洲协同', '四条先进储能路线', '项目导向沟通支持']

const overviewMetrics = [
  { value: '04', label: '技术路线' },
  { value: 'CN + EU', label: '协同网络' },
  { value: 'B2B', label: '项目支持模式' },
]

const technologyCards = [
  {
    title: '钠离子电池',
    path: '/sodium',
    cover: sodiumCover,
    eyebrow: 'Sodium-ion',
    summary: '适合更务实的储能项目，在成本、供应稳定性与宽温表现之间保持平衡。',
    points: ['宽温适应', '资源更友好', '工商业与备用场景'],
  },
  {
    title: '固态电池',
    path: '/solid',
    cover: solidCover,
    eyebrow: 'Solid-state',
    summary: '面向更高安全与更高能量密度需求，适合下一代产品和前沿储能方向。',
    points: ['高安全潜力', '高能量密度', '面向未来应用'],
  },
  {
    title: '液流电池',
    path: '/redox',
    cover: flowCover,
    eyebrow: 'Redox flow',
    summary: '适合电网级和长时储能场景，更强调循环寿命、安全性与系统稳定运行。',
    points: ['长时储能', '电网与工商业', '低火灾风险'],
  },
  {
    title: '超级电容',
    path: '/supercapacitor',
    cover: superCover,
    eyebrow: 'Supercapacitor',
    summary: '适合需要高功率、快速响应与高频充放的场景，突出瞬时功率能力。',
    points: ['毫秒级响应', '高功率密度', '超长循环寿命'],
  },
]

const collaborationItems = [
  {
    title: '多技术路线判断',
    text: '不是单一路线推介，而是基于项目目标、应用场景与约束条件进行更合适的技术判断。',
  },
  {
    title: '对接中国供应链资源',
    text: '连接先进储能企业、研发团队与产业资源，提升沟通效率与方案可获得性。',
  },
  {
    title: '面向欧洲项目沟通',
    text: '结合本地理解与跨境协同，支持技术资料梳理、需求澄清与合作推进。',
  },
]
</script>

<template>
  <div class="home-corporate">
    <section class="section-wrap hero-section">
      <div class="hero-shell">
        <div class="hero-copy">
          <p class="hero-kicker">Advanced Energy Storage Platform</p>
          <h1>连接先进储能技术与跨境项目需求</h1>
          <p class="hero-text">
            聚焦钠离子、液流、固态与超级电容等先进储能路线，帮助项目方更清晰地理解技术路径、
            对接中国供应链资源，并推进面向欧洲市场的沟通与合作。
          </p>

          <div class="hero-pills">
            <span v-for="item in capabilityPills" :key="item">{{ item }}</span>
          </div>

          <div class="hero-actions">
            <RouterLink class="btn btn-primary" to="/contact">联系我们</RouterLink>
            <RouterLink class="btn btn-secondary" to="/about">了解团队</RouterLink>
          </div>
        </div>

        <div class="hero-visual">
          <figure class="hero-media">
            <img :src="heroPanorama" alt="先进储能项目全景图" />
          </figure>

          <div class="hero-metrics">
            <article v-for="item in overviewMetrics" :key="item.label" class="metric-card">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section-wrap team-section">
      <div class="section-heading">
        <p class="section-kicker">团队与协同</p>
        <h2>以中欧协同与行业理解，支持项目进入下一步沟通。</h2>
        <p>团队覆盖学术、产业、技术验证与项目沟通能力，适合放在首屏之后作为第一层信任背书。</p>
      </div>

      <div class="team-shell">
        <div class="team-copy">
          <div class="team-copy-card">
            <p class="mini-kicker">Why StorageLink</p>
            <h3>不是单纯展示产品，而是帮助客户更快进入技术与合作判断。</h3>
            <ul>
              <li>多路线覆盖：钠离子、固态、液流、超级电容</li>
              <li>中国供应链与欧洲项目沟通双向连接</li>
              <li>团队兼具研究背景、行业经验与本地协同能力</li>
            </ul>
            <RouterLink class="inline-link" to="/about">查看团队与背景</RouterLink>
          </div>
        </div>

        <figure class="team-frame">
          <img :src="teamSlide" alt="团队介绍图" />
        </figure>
      </div>
    </section>

    <section class="section-wrap technology-section">
      <div class="section-heading technology-heading">
        <p class="section-kicker">技术路线</p>
        <h2>覆盖多条先进储能路线，适配不同项目场景。</h2>
        <p>首页不再直接堆整页素材，而是把技术路线网页化，先给出判断入口，再进入各自详情页。</p>
      </div>

      <div class="technology-grid">
        <RouterLink
          v-for="item in technologyCards"
          :key="item.path"
          class="technology-card"
          :to="item.path"
        >
          <figure class="technology-media">
            <img :src="item.cover" :alt="item.title" />
          </figure>

          <div class="technology-body">
            <p class="card-eyebrow">{{ item.eyebrow }}</p>
            <h3>{{ item.title }}</h3>
            <p class="card-summary">{{ item.summary }}</p>

            <div class="technology-points">
              <span v-for="point in item.points" :key="point">{{ point }}</span>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="section-wrap collaboration-section">
      <div class="collaboration-shell">
        <div class="collaboration-copy">
          <p class="section-kicker section-kicker-light">合作方式</p>
          <h2>用更清晰的结构连接供应端与客户端。</h2>
          <p class="collaboration-text">
            对于第一版官网，不需要堆很多复杂模块。把“你们能做什么、如何配合项目、下一步怎么联系”
            说清楚，整体就会高级很多。
          </p>

          <div class="collaboration-list">
            <article
              v-for="item in collaborationItems"
              :key="item.title"
              class="collaboration-item"
            >
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>

          <div class="hero-actions">
            <RouterLink class="btn btn-primary" to="/contact">开始沟通项目</RouterLink>
          </div>
        </div>

        <figure class="collaboration-media">
          <img :src="storageLinkBg" alt="项目协同展示图" />
        </figure>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-corporate {
  padding-bottom: 24px;
  background:
    radial-gradient(circle at top right, rgba(66, 184, 204, 0.08), transparent 18%),
    linear-gradient(180deg, #eef3f1 0%, #f7faf8 42%, #eff3f0 100%);
}

.hero-section,
.team-section,
.technology-section,
.collaboration-section {
  padding-top: 14px;
}

.hero-shell,
.team-shell,
.technology-card,
.collaboration-shell,
.metric-card,
.team-copy-card {
  border: 1px solid rgba(207, 218, 213, 0.92);
  border-radius: 30px;
  box-shadow: 0 18px 48px rgba(17, 33, 27, 0.07);
}

.hero-shell {
  display: grid;
  grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.1fr);
  gap: 20px;
  align-items: stretch;
}

.hero-copy,
.hero-visual {
  min-height: clamp(360px, 48vw, 560px);
}

.hero-copy {
  padding: clamp(30px, 4vw, 48px);
  background:
    radial-gradient(circle at top left, rgba(76, 205, 223, 0.1), transparent 22%),
    linear-gradient(155deg, #102421 0%, #14302b 54%, #173530 100%);
}

.hero-kicker,
.section-kicker,
.mini-kicker,
.card-eyebrow {
  margin: 0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-kicker {
  color: rgba(204, 233, 227, 0.82);
}

.section-kicker,
.card-eyebrow {
  color: #198f98;
}

.section-kicker-light {
  color: rgba(181, 232, 236, 0.84);
}

.hero-copy h1,
.section-heading h2,
.collaboration-copy h2,
.team-copy-card h3 {
  line-height: 0.98;
}

.hero-copy h1 {
  margin: 18px 0 0;
  max-width: 9ch;
  color: #f3fbf8;
  font-size: clamp(42px, 5vw, 70px);
  letter-spacing: -0.04em;
}

.hero-text,
.section-heading p,
.card-summary,
.collaboration-text,
.collaboration-item p,
.team-copy-card ul {
  font-size: 16px;
  line-height: 1.8;
}

.hero-text {
  margin: 18px 0 0;
  max-width: 56ch;
  color: rgba(226, 239, 233, 0.84);
}

.hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.hero-pills span,
.technology-points span {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 13px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
}

.hero-pills span {
  color: rgba(237, 251, 248, 0.88);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(162, 196, 189, 0.16);
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
  font-weight: 800;
  text-decoration: none !important;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    filter 0.18s ease;
}

.btn:hover,
.technology-card:hover {
  transform: translateY(-1px);
}

.btn-primary {
  color: #f5fffc;
  background: linear-gradient(135deg, #1ea7c8 0%, #55cbd8 100%);
  box-shadow: 0 16px 32px rgba(18, 71, 84, 0.16);
}

.btn-secondary {
  color: #173328;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.hero-visual {
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 16px;
  padding: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(244, 248, 246, 0.78));
}

.hero-media {
  margin: 0;
  overflow: hidden;
  border-radius: 24px;
  min-height: 0;
}

.hero-media img,
.team-frame img,
.technology-media img,
.collaboration-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.metric-card {
  display: grid;
  gap: 6px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.88);
}

.metric-card strong {
  color: #173328;
  font-size: 28px;
  line-height: 1;
}

.metric-card span {
  color: #61786f;
  font-size: 13px;
  letter-spacing: 0.08em;
}

.section-heading {
  display: grid;
  gap: 10px;
  max-width: 860px;
  margin-bottom: 18px;
}

.section-heading h2 {
  margin: 0;
  color: #143228;
  font-size: clamp(34px, 4.1vw, 58px);
  letter-spacing: -0.04em;
}

.section-heading p {
  margin: 0;
  color: #667d74;
  max-width: 60ch;
}

.team-shell {
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
  gap: 20px;
  padding: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(245, 248, 246, 0.78));
}

.team-copy {
  display: flex;
}

.team-copy-card {
  width: 100%;
  padding: clamp(22px, 3vw, 34px);
  background:
    radial-gradient(circle at top left, rgba(69, 205, 222, 0.08), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(249, 251, 250, 0.86));
}

.team-copy-card h3 {
  margin: 14px 0 0;
  color: #143228;
  font-size: clamp(28px, 3vw, 44px);
  letter-spacing: -0.03em;
}

.team-copy-card ul {
  margin: 18px 0 0;
  padding-left: 18px;
  color: #60776e;
}

.inline-link {
  display: inline-flex;
  margin-top: 18px;
  color: #1b8e97;
  font-weight: 800;
  text-decoration: none;
}

.team-frame {
  margin: 0;
  overflow: hidden;
  border-radius: 26px;
  min-height: 100%;
  background: #f5f7f6;
}

.team-frame img {
  object-fit: contain;
  background: #ffffff;
}

.technology-heading {
  max-width: 900px;
}

.technology-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.technology-card {
  display: grid;
  grid-template-columns: minmax(180px, 0.42fr) minmax(0, 0.58fr);
  overflow: hidden;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 249, 0.84));
  text-decoration: none;
}

.technology-media {
  margin: 0;
  min-height: 240px;
  overflow: hidden;
  background: #eef2f0;
}

.technology-body {
  display: grid;
  align-content: start;
  gap: 12px;
  padding: 24px;
}

.technology-body h3,
.collaboration-item h3 {
  margin: 0;
  color: #143228;
}

.technology-body h3 {
  font-size: 34px;
  line-height: 1;
  letter-spacing: -0.03em;
}

.card-summary {
  margin: 0;
  color: #627970;
}

.technology-points {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
}

.technology-points span {
  color: #1a473d;
  background: rgba(26, 143, 152, 0.08);
}

.collaboration-shell {
  display: grid;
  grid-template-columns: minmax(320px, 0.94fr) minmax(0, 1.06fr);
  gap: 20px;
  overflow: hidden;
}

.collaboration-copy {
  padding: clamp(28px, 4vw, 44px);
  background:
    radial-gradient(circle at top left, rgba(74, 206, 225, 0.08), transparent 26%),
    linear-gradient(155deg, #102421 0%, #14302b 54%, #173530 100%);
}

.collaboration-copy h2 {
  margin: 14px 0 0;
  max-width: 10ch;
  color: #f4fffb;
  font-size: clamp(34px, 4.4vw, 60px);
  letter-spacing: -0.04em;
}

.collaboration-text {
  margin: 18px 0 0;
  max-width: 56ch;
  color: rgba(224, 238, 233, 0.82);
}

.collaboration-list {
  display: grid;
  gap: 14px;
  margin-top: 24px;
}

.collaboration-item {
  padding: 18px 18px 16px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(147, 180, 174, 0.14);
}

.collaboration-item h3 {
  color: #f0fffc;
  font-size: 19px;
}

.collaboration-item p {
  margin: 8px 0 0;
  color: rgba(213, 229, 224, 0.76);
  font-size: 15px;
}

.collaboration-media {
  margin: 0;
  min-height: 100%;
  background: #eff4f1;
}

@media (max-width: 1080px) {
  .hero-shell,
  .team-shell,
  .collaboration-shell,
  .technology-card {
    grid-template-columns: 1fr;
  }

  .technology-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1,
  .collaboration-copy h2 {
    max-width: none;
  }
}

@media (max-width: 720px) {
  .home-corporate {
    padding-bottom: 18px;
  }

  .hero-shell,
  .team-shell,
  .technology-card,
  .collaboration-shell,
  .metric-card,
  .team-copy-card {
    border-radius: 22px;
  }

  .hero-copy,
  .collaboration-copy,
  .team-copy-card,
  .technology-body {
    padding: 20px;
  }

  .hero-visual,
  .team-shell {
    padding: 12px;
  }

  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .section-heading h2 {
    font-size: clamp(28px, 10vw, 42px);
  }

  .hero-copy h1,
  .collaboration-copy h2,
  .team-copy-card h3,
  .technology-body h3 {
    font-size: clamp(28px, 10vw, 42px);
  }

  .technology-media {
    min-height: 200px;
  }
}
</style>
