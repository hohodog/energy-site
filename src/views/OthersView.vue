<template>
  <section class="others-page section-wrap">
    <header class="card">
      <p class="eyebrow">Resources</p>
      <h1>Engineering Resources & Project Notes</h1>
      <p>Quick references used during early-stage technical and commercial screening.</p>
    </header>

    <section class="grid">
      <article class="card">
        <h2>Common Project Scenarios</h2>
        <ul>
          <li>2-4 hour C&I peak shaving and backup</li>
          <li>6-10 hour long-duration shifting</li>
          <li>High-cycle fast-response power support</li>
          <li>Low-temperature deployment requirements</li>
        </ul>
      </article>

      <article class="card">
        <h2>Document Checklist</h2>
        <ul>
          <li>Cell/module test reports</li>
          <li>Safety and transport certifications</li>
          <li>Lifecycle and degradation assumptions</li>
          <li>Manufacturing and traceability statements</li>
        </ul>
      </article>
    </section>
  </section>
</template>

<style scoped>
.others-page {
  padding-top: 26px;
  padding-bottom: 42px;
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
