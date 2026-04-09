<template>
  <section class="contact-tech">
    <section class="section-wrap hero-section">
      <div class="hero-shell">
        <div class="hero-copy">
          <p class="eyebrow">联系团队</p>
          <h1>围绕项目需求，直接开启技术与供应沟通。</h1>
          <p>
            先通过邮件说明项目背景、技术路线和交付目标，再根据需求进入后续沟通。
          </p>
        </div>

        <div class="hero-card">
          <strong>邮箱</strong>
          <a href="mailto:contact@storagelink-energy.com">contact@storagelink-energy.com</a>
          <span>通常回复时间：1 个工作日内</span>
          <a class="btn" href="mailto:contact@storagelink-energy.com">发送邮件</a>
        </div>
      </div>
    </section>

    <section class="section-wrap process-section">
      <div class="process-grid">
        <article class="process-card">
          <strong>01</strong>
          <h2>项目简介</h2>
          <p>告诉我们目标市场、应用场景、技术路线和基本交付需求。</p>
        </article>

        <article class="process-card">
          <strong>02</strong>
          <h2>初步匹配</h2>
          <p>我们会先给出更清晰的下一步建议，而不是让你进入泛泛的目录式询价流程。</p>
        </article>

        <article class="process-card">
          <strong>03</strong>
          <h2>进入协同</h2>
          <p>如果方向合适，就继续进入技术展示、供应商沟通与更深入的项目对接。</p>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>
.contact-tech {
  padding-top: 4px;
  padding-bottom: 16px;
  display: grid;
  gap: 24px;
  background:
    radial-gradient(circle at top right, rgba(43, 191, 214, 0.12), transparent 20%),
    linear-gradient(180deg, #061311 0%, #0b1917 42%, #0e1e1a 100%);
}

.hero-section,
.process-section {
  padding-top: 12px;
}

.hero-shell,
.hero-card,
.process-card {
  border: 1px solid rgba(131, 172, 166, 0.16);
  border-radius: 32px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.24);
}

.hero-shell {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) minmax(300px, 0.76fr);
  gap: 22px;
}

.hero-copy,
.hero-card {
  padding: clamp(28px, 4vw, 46px);
  background:
    radial-gradient(circle at top left, rgba(63, 228, 255, 0.12), transparent 26%),
    linear-gradient(160deg, rgba(14, 34, 31, 0.98), rgba(8, 22, 19, 0.98));
}

.eyebrow,
.process-card strong {
  color: rgba(117, 226, 241, 0.84);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-copy h1,
.process-card h2 {
  margin-top: 16px;
  color: #effffc;
  line-height: 0.96;
}

.hero-copy h1 {
  max-width: 12ch;
  font-size: clamp(38px, 5.2vw, 68px);
}

.hero-copy p,
.process-card p,
.hero-card span {
  margin: 18px 0 0;
  color: rgba(211, 228, 224, 0.78);
  font-size: 16px;
  line-height: 1.82;
}

.hero-card {
  display: grid;
  align-content: center;
  gap: 12px;
}

.hero-card strong {
  color: rgba(117, 226, 241, 0.84);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-card a:not(.btn) {
  color: #effffc;
  font-size: clamp(28px, 3.4vw, 40px);
  line-height: 1.08;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  width: fit-content;
  padding: 0 22px;
  margin-top: 8px;
  border-radius: 999px;
  font-weight: 700;
  color: #041311;
  background: linear-gradient(135deg, #46d7ef 0%, #7de8f3 100%);
  box-shadow: 0 16px 34px rgba(42, 191, 214, 0.2);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.process-card {
  padding: 24px;
  background: rgba(255, 255, 255, 0.04);
}

.process-card h2 {
  font-size: 30px;
}

@media (max-width: 980px) {
  .hero-shell,
  .process-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    max-width: none;
  }
}

@media (max-width: 720px) {
  .contact-tech {
    padding-top: 0;
    gap: 18px;
  }

  .hero-section,
  .process-section {
    padding-top: 18px;
  }

  .hero-shell,
  .hero-card,
  .process-card {
    border-radius: 24px;
  }

  .hero-copy,
  .hero-card,
  .process-card {
    padding: 20px;
  }

  .hero-copy h1,
  .hero-card a:not(.btn),
  .process-card h2 {
    font-size: clamp(30px, 9vw, 46px);
  }

  .hero-copy p,
  .process-card p,
  .hero-card span {
    font-size: 15px;
    line-height: 1.72;
  }
}
</style>
