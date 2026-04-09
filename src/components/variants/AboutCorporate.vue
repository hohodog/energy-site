<script setup>
import teamSlide from '../../assets/home/deck/team-slide.png'

const capabilityCards = [
  {
    title: '技术筛选',
    body: '围绕真实项目场景，对钠离子、液流、固态和超级电容等路线进行横向比较与筛选。',
  },
  {
    title: '供应链对接',
    body: '直接连接中国电池与储能制造资源，减少从零开始找供应商的时间成本。',
  },
  {
    title: '跨境协同',
    body: '支持技术团队、采购团队与欧洲市场侧之间的沟通和项目推进。',
  },
]

const operatingModel = [
  '收集项目需求并明确应用场景。',
  '完成技术路线匹配与供应端对接。',
  '推动跨境沟通进入执行阶段。',
]
</script>

<template>
  <section class="about-page">
    <section class="section-wrap about-hero">
      <div class="about-copy">
        <p class="eyebrow">关于我们</p>
        <h1>面向先进储能项目而建立的电池与供应链连接平台。</h1>
        <p class="lead">
          我们专注于用更清晰、更利于决策的方式展示先进储能技术，并支持从初步兴趣到项目沟通之间的关键协同。
        </p>

        <div class="hero-actions">
          <RouterLink class="btn btn-primary" to="/contact">联系团队</RouterLink>
          <RouterLink class="btn btn-secondary" to="/">返回首页</RouterLink>
        </div>
      </div>

      <div class="about-summary">
        <div class="summary-card">
          <strong>核心定位</strong>
          <span>先进储能产品对接与资料展示</span>
        </div>
        <div class="summary-card">
          <strong>覆盖路线</strong>
          <span>钠离子、液流、固态、超级电容</span>
        </div>
        <div class="summary-card">
          <strong>工作方式</strong>
          <span>中国供应链资源结合欧洲面向客户的协同支持</span>
        </div>
      </div>
    </section>

    <section class="section-wrap team-section">
      <figure class="team-frame">
        <img :src="teamSlide" alt="团队介绍素材" />
      </figure>
    </section>

    <section class="section-wrap capabilities-section">
      <div class="section-heading">
        <p class="eyebrow eyebrow-light">能力范围</p>
        <h2>围绕先进储能项目提供多维支持。</h2>
      </div>

      <div class="capability-grid">
        <article v-for="item in capabilityCards" :key="item.title" class="capability-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </section>

    <section class="section-wrap operating-section">
      <div class="operating-shell">
        <div class="section-heading section-heading-dark">
          <p class="eyebrow">运作方式</p>
          <h2>围绕项目需求推进技术与供应协同。</h2>
        </div>

        <ol class="operating-list">
          <li v-for="(item, index) in operatingModel" :key="item">
            <strong>{{ String(index + 1).padStart(2, '0') }}</strong>
            <span>{{ item }}</span>
          </li>
        </ol>
      </div>
    </section>
  </section>
</template>

<style scoped>
.about-page {
  padding-top: 6px;
  padding-bottom: 18px;
  display: grid;
  gap: 24px;
  background:
    radial-gradient(circle at top right, rgba(50, 171, 190, 0.09), transparent 22%),
    linear-gradient(180deg, #eef3f4 0%, #f7f9f7 48%, #f0f2ef 100%);
}

.about-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.06fr) minmax(320px, 0.74fr);
  gap: 22px;
}

.about-copy,
.summary-card,
.team-frame,
.capability-card,
.operating-shell {
  border-radius: 30px;
  border: 1px solid rgba(206, 217, 212, 0.94);
  box-shadow: 0 18px 48px rgba(17, 33, 27, 0.08);
}

.about-copy {
  padding: clamp(28px, 4vw, 48px);
  background:
    radial-gradient(circle at top left, rgba(65, 183, 196, 0.14), transparent 24%),
    linear-gradient(160deg, #132824 0%, #17312c 52%, #1a3a34 100%);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 6px 11px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: rgba(226, 242, 236, 0.86);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.eyebrow-light {
  background: rgba(44, 182, 195, 0.12);
  color: #198f98;
}

.about-copy h1,
.section-heading h2 {
  margin-top: 16px;
  line-height: 0.98;
}

.about-copy h1 {
  max-width: 11ch;
  color: #f3fbf7;
  font-size: clamp(38px, 5.4vw, 70px);
}

.lead {
  margin: 18px 0 0;
  max-width: 58ch;
  color: rgba(227, 238, 232, 0.82);
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

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  color: #f6fffb;
  background: linear-gradient(135deg, #1ea4c5 0%, #53c8d8 100%);
  box-shadow: 0 16px 32px rgba(18, 71, 84, 0.16);
}

.btn-secondary {
  color: #173328;
  background: rgba(255, 255, 255, 0.94);
}

.about-summary {
  display: grid;
  gap: 16px;
}

.summary-card {
  display: grid;
  gap: 10px;
  align-content: center;
  padding: 26px;
  background: rgba(255, 255, 255, 0.95);
}

.summary-card strong {
  color: #173227;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.summary-card span {
  color: #274438;
  font-size: 22px;
  line-height: 1.35;
}

.team-frame {
  overflow: hidden;
  padding: clamp(12px, 1.8vw, 18px);
  background: rgba(255, 255, 255, 0.97);
}

.team-frame img {
  width: 100%;
  border-radius: 22px;
}

.section-heading {
  max-width: 720px;
}

.section-heading h2 {
  color: #173127;
  font-size: clamp(30px, 4vw, 52px);
}

.capability-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.capability-card {
  padding: 24px;
  background: rgba(255, 255, 255, 0.96);
}

.capability-card h3 {
  color: #183328;
  font-size: 28px;
  line-height: 1.06;
}

.capability-card p {
  margin: 12px 0 0;
  color: #50655c;
  line-height: 1.75;
}

.operating-shell {
  padding: clamp(24px, 3vw, 34px);
  background:
    radial-gradient(circle at top right, rgba(53, 193, 208, 0.12), transparent 24%),
    linear-gradient(180deg, #132824 0%, #18332d 100%);
}

.section-heading-dark h2 {
  color: #eff8f4;
}

.operating-list {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.operating-list li {
  display: grid;
  gap: 12px;
  padding: 22px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.operating-list strong {
  color: rgba(183, 231, 235, 0.88);
  font-size: 13px;
  letter-spacing: 0.14em;
}

.operating-list span {
  color: rgba(230, 239, 234, 0.84);
  line-height: 1.72;
}

@media (max-width: 1080px) {
  .about-hero,
  .capability-grid,
  .operating-list {
    grid-template-columns: 1fr;
  }

  .about-copy h1 {
    max-width: none;
  }
}

@media (max-width: 720px) {
  .about-page {
    padding-top: 16px;
    gap: 18px;
  }

  .about-copy,
  .summary-card,
  .team-frame,
  .capability-card,
  .operating-shell {
    border-radius: 24px;
  }

  .about-copy,
  .summary-card,
  .capability-card,
  .operating-shell {
    padding: 22px;
  }

  .about-copy h1 {
    font-size: clamp(34px, 10vw, 54px);
  }

  .lead {
    font-size: 15px;
    line-height: 1.72;
  }

  .summary-card span,
  .capability-card h3 {
    font-size: 22px;
  }
}
</style>
