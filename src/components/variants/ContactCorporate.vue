<script setup>
import storageLinkBg from '../../assets/home/deck/storage-link-bg.jpeg'

const emailItems = [
  '公司名称与目标市场',
  '希望了解的电池路线或技术方向',
  '应用场景与项目阶段',
  '数量、产品形态与交付需求',
]

const workflowItems = [
  {
    title: '发送项目简介',
    body: '通过邮件发送项目背景、关注的技术路线或供应目标。',
  },
  {
    title: '获得初步匹配建议',
    body: '我们会先判断需求，并回复更适合下一步沟通的建议。',
  },
  {
    title: '进入协同阶段',
    body: '如果方向匹配，就会继续进入供应商沟通与更深入的技术交流。',
  },
]
</script>

<template>
  <section class="contact-page">
    <section class="section-wrap contact-hero">
      <div class="hero-copy">
        <p class="eyebrow">联系团队</p>
        <h1>用一封直接邮件，开启项目沟通。</h1>
        <p class="lead">
          无论你关注的是电池采购、技术路线评估，还是供应端协同，都可以直接把项目信息发送给我们。
        </p>

        <div class="hero-meta">
          <div>
            <strong>邮箱</strong>
            <span>contact@storagelink-energy.com</span>
          </div>
          <div>
            <strong>通常回复时间</strong>
            <span>1 个工作日内</span>
          </div>
        </div>

        <div class="hero-actions">
          <a class="btn btn-primary" href="mailto:contact@storagelink-energy.com">发送邮件</a>
          <RouterLink class="btn btn-secondary" to="/">返回首页</RouterLink>
        </div>
      </div>

      <figure class="hero-media">
        <img :src="storageLinkBg" alt="联系页面配图" />
      </figure>
    </section>

    <section class="section-wrap support-section">
      <article class="support-card">
        <p class="support-kicker">建议提供的信息</p>
        <ul>
          <li v-for="item in emailItems" :key="item">{{ item }}</li>
        </ul>
      </article>

      <article class="support-card support-card-dark">
        <p class="support-kicker support-kicker-dark">服务范围</p>
        <h2>技术展示、供应链对接与跨境沟通支持。</h2>
        <p>
          如果你的需求涉及先进储能技术判断、供应商接触或跨境沟通，而不是单纯的目录询价，我们会更有价值。
        </p>
      </article>
    </section>

    <section class="section-wrap workflow-section">
      <div class="section-heading">
        <p class="eyebrow eyebrow-light">流程</p>
        <h2>你联系之后会发生什么。</h2>
      </div>

      <div class="workflow-grid">
        <article v-for="(item, index) in workflowItems" :key="item.title" class="workflow-card">
          <strong>{{ String(index + 1).padStart(2, '0') }}</strong>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>
.contact-page {
  padding-top: 6px;
  padding-bottom: 18px;
  display: grid;
  gap: 24px;
  background:
    radial-gradient(circle at top right, rgba(50, 171, 190, 0.09), transparent 22%),
    linear-gradient(180deg, #eef3f4 0%, #f7f9f7 48%, #f0f2ef 100%);
}

.contact-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.98fr) minmax(320px, 1.02fr);
  gap: 22px;
}

.hero-copy,
.hero-media,
.support-card,
.workflow-card {
  border-radius: 30px;
  border: 1px solid rgba(206, 217, 212, 0.94);
  box-shadow: 0 18px 48px rgba(17, 33, 27, 0.08);
}

.hero-copy {
  padding: clamp(28px, 4vw, 48px);
  background:
    radial-gradient(circle at top left, rgba(65, 183, 196, 0.14), transparent 24%),
    linear-gradient(160deg, #132824 0%, #17312c 52%, #1a3a34 100%);
}

.eyebrow,
.support-kicker {
  display: inline-flex;
  align-items: center;
  padding: 6px 11px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.eyebrow {
  background: rgba(255, 255, 255, 0.12);
  color: rgba(226, 242, 236, 0.86);
}

.eyebrow-light {
  background: rgba(44, 182, 195, 0.12);
  color: #198f98;
}

.hero-copy h1,
.section-heading h2,
.support-card-dark h2 {
  margin-top: 16px;
  line-height: 0.98;
}

.hero-copy h1 {
  max-width: 11ch;
  color: #f3fbf7;
  font-size: clamp(38px, 5.2vw, 68px);
}

.lead {
  margin: 18px 0 0;
  max-width: 56ch;
  color: rgba(227, 238, 232, 0.82);
  font-size: 17px;
  line-height: 1.8;
}

.hero-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 24px;
}

.hero-meta div {
  display: grid;
  gap: 8px;
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hero-meta strong {
  color: rgba(183, 231, 235, 0.88);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-meta span {
  color: rgba(233, 241, 237, 0.84);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
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

.hero-media {
  overflow: hidden;
  min-height: clamp(420px, 48vw, 640px);
  background: rgba(255, 255, 255, 0.96);
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.support-section {
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
  gap: 18px;
}

.support-card {
  padding: 24px;
  background: rgba(255, 255, 255, 0.96);
}

.support-card ul {
  margin: 16px 0 0;
  padding-left: 20px;
  display: grid;
  gap: 10px;
  color: #465e54;
  line-height: 1.7;
}

.support-kicker {
  background: rgba(44, 182, 195, 0.12);
  color: #198f98;
}

.support-card-dark {
  background:
    radial-gradient(circle at top right, rgba(53, 193, 208, 0.12), transparent 24%),
    linear-gradient(180deg, #132824 0%, #18332d 100%);
}

.support-kicker-dark {
  background: rgba(255, 255, 255, 0.12);
  color: rgba(226, 242, 236, 0.86);
}

.support-card-dark h2 {
  color: #eff8f4;
  font-size: clamp(30px, 4vw, 50px);
}

.support-card-dark p {
  margin: 16px 0 0;
  color: rgba(230, 239, 234, 0.82);
  line-height: 1.76;
  max-width: 54ch;
}

.section-heading {
  max-width: 720px;
}

.section-heading h2 {
  color: #173127;
  font-size: clamp(30px, 4vw, 52px);
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.workflow-card {
  padding: 24px;
  background: rgba(255, 255, 255, 0.96);
}

.workflow-card strong {
  color: #198f98;
  font-size: 12px;
  letter-spacing: 0.14em;
}

.workflow-card h3 {
  margin-top: 12px;
  color: #183328;
  font-size: 28px;
  line-height: 1.08;
}

.workflow-card p {
  margin: 12px 0 0;
  color: #50655c;
  line-height: 1.75;
}

@media (max-width: 1080px) {
  .contact-hero,
  .support-section,
  .workflow-grid,
  .hero-meta {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    max-width: none;
  }
}

@media (max-width: 720px) {
  .contact-page {
    padding-top: 16px;
    gap: 18px;
  }

  .hero-copy,
  .hero-media,
  .support-card,
  .workflow-card {
    border-radius: 24px;
  }

  .hero-copy,
  .support-card,
  .workflow-card {
    padding: 22px;
  }

  .hero-copy h1 {
    font-size: clamp(34px, 10vw, 54px);
  }

  .lead {
    font-size: 15px;
    line-height: 1.72;
  }

  .support-card-dark h2,
  .workflow-card h3 {
    font-size: 22px;
  }
}
</style>
