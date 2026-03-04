<template>
  <section class="about-page section-wrap">
    <header class="about-hero card">
      <p class="eyebrow">Company Profile</p>
      <h1>StorageLink Europe</h1>
      <p>
        We are a project-facing energy storage bridge team connecting EU developers and buyers
        with proven battery manufacturers and practical execution workflows.
      </p>
    </header>

    <section class="about-grid">
      <article class="card">
        <h2>What We Do</h2>
        <ul>
          <li>Chemistry route selection by use case and lifecycle targets</li>
          <li>Supplier matching and technical dossier preparation</li>
          <li>Cross-border communication and delivery coordination</li>
          <li>Project follow-through with local EU partner support</li>
        </ul>
      </article>

      <article class="card">
        <h2>Who We Serve</h2>
        <ul>
          <li>C&I storage developers</li>
          <li>Grid and long-duration storage teams</li>
          <li>Industrial backup and power-quality projects</li>
          <li>Integrators evaluating alternative chemistries</li>
        </ul>
      </article>
    </section>

    <section class="card timeline">
      <h2>Milestones</h2>
      <ol>
        <li>
          <strong>2024</strong>
          <span>Established cross-chemistry supplier qualification checklist.</span>
        </li>
        <li>
          <strong>2025</strong>
          <span>Expanded Germany-based execution support network.</span>
        </li>
        <li>
          <strong>2026</strong>
          <span>Launched compliance-oriented project documentation workflow.</span>
        </li>
      </ol>
    </section>
  </section>
</template>

<style scoped>
.about-page {
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

.about-hero h1 {
  font-size: clamp(34px, 4.8vw, 58px);
  color: #1e4934;
}

.about-hero p {
  margin-top: 10px;
  font-size: 18px;
  color: #496055;
  max-width: 860px;
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

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

h2 {
  margin: 0;
  color: #1f4734;
  font-size: 29px;
}

ul {
  margin: 14px 0 0;
  padding-left: 20px;
  color: #394f45;
  display: grid;
  gap: 8px;
}

.timeline ol {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.timeline li {
  border: 1px solid #d0ddd6;
  background: #f8fcf9;
  border-radius: 12px;
  padding: 12px;
  display: grid;
  gap: 4px;
}

.timeline strong {
  color: #245a3f;
}

.timeline span {
  color: #42574d;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
