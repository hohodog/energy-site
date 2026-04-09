<template>
  <section class="others-page section-wrap">
    <header class="card">
      <p class="eyebrow">资料中心</p>
      <h1>工程资料与项目参考</h1>
      <p>用于前期技术判断与商务筛选的快速参考内容。</p>
    </header>

    <section class="grid">
      <article class="card">
        <h2>常见项目场景</h2>
        <ul>
          <li>2-4 小时工商业削峰与备电</li>
          <li>6-10 小时长时储能调峰</li>
          <li>高频次快速响应功率支撑</li>
          <li>低温环境部署需求</li>
        </ul>
      </article>

      <article class="card">
        <h2>文件清单</h2>
        <ul>
          <li>电芯 / 模组测试报告</li>
          <li>安全与运输认证文件</li>
          <li>寿命与衰减假设说明</li>
          <li>生产与追溯相关声明</li>
        </ul>
      </article>
    </section>
  </section>
</template>

<style scoped>
.others-page {
  padding-top: 8px;
  padding-bottom: 18px;
  display: grid;
  gap: 20px;
}

.card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #d5e1da;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 12px 30px rgba(24, 45, 35, 0.08);
}

.eyebrow {
  display: inline-block;
  margin-bottom: 8px;
  border-radius: 999px;
  background: rgba(94, 145, 116, 0.14);
  color: #2b6048;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 10px;
}

h1 {
  font-size: clamp(30px, 4.6vw, 50px);
  color: #1f4935;
}

header p {
  margin-top: 10px;
  color: #4c6156;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

h2 {
  margin: 0;
  color: #214936;
  font-size: 28px;
}

ul {
  margin: 14px 0 0;
  padding-left: 20px;
  display: grid;
  gap: 8px;
  color: #3f554a;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
