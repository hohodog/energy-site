<template>
  <div class="home-page">
    <section class="hero section-wrap">
      <div class="hero-panel" :style="heroStyle">
        <div class="hero-mask" />
        <div class="hero-content">
          <div>
            <p class="eyebrow">European Energy Storage Partner</p>
            <h1>Bridging Advanced Energy Storage to the World</h1>
          </div>
          <p class="hero-copy">
            We connect EU developers and industrial buyers with production-ready battery solutions,
            from cell chemistry selection to supply-chain delivery and local execution support.
          </p>
          <div class="hero-actions">
            <RouterLink class="btn btn-primary" to="/contact">Request Project Review</RouterLink>
            <RouterLink class="btn btn-secondary" to="/about">See Company Profile</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section-wrap section-proof">
      <div class="section-head">
        <h2>Execution Proof For EU Projects</h2>
      </div>
      <div class="proof-grid">
        <article class="proof-card" v-for="item in proofCards" :key="item.label">
          <p class="proof-value">{{ item.value }}</p>
          <h3>{{ item.label }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
      <div class="timeline-shell">
        <h3>Delivery Milestones</h3>
        <ol class="timeline-list">
          <li v-for="item in milestones" :key="item.date + item.title">
            <p class="timeline-date">{{ item.date }}</p>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section-wrap section-comparison">
      <div class="section-head">
        <h2>Technology Comparison At A Glance</h2>
      </div>
      <div class="comparison-grid">
        <article class="radar-card">
          <svg viewBox="0 0 520 520" class="radar-svg" aria-label="comparison radar chart">
            <g fill="none" stroke="#7f8e84" stroke-width="1">
              <polygon points="260,45 452,155 452,365 260,475 68,365 68,155" />
              <polygon points="260,95 410,182 410,338 260,425 110,338 110,182" />
              <polygon points="260,145 368,210 368,310 260,375 152,310 152,210" />
              <polygon points="260,195 326,238 326,282 260,325 194,282 194,238" />
              <line x1="260" y1="45" x2="260" y2="475" />
              <line x1="452" y1="155" x2="68" y2="365" />
              <line x1="452" y1="365" x2="68" y2="155" />
            </g>

            <polyline points="260,120 418,194 322,286 268,336 122,324 122,196 260,120" fill="none" stroke="#e24552" stroke-width="4" />
            <polyline points="260,102 356,176 294,294 248,356 154,338 126,172 260,102" fill="none" stroke="#35b24d" stroke-width="4" />
            <polyline points="260,82 334,210 282,276 260,308 174,290 174,214 260,82" fill="none" stroke="#2c93ca" stroke-width="4" />
            <polyline points="260,70 300,246 356,286 260,410 206,260 190,228 260,70" fill="none" stroke="#ffbf00" stroke-width="4" />

            <g class="axis-label">
              <text x="260" y="26" text-anchor="middle">Safety</text>
              <text x="464" y="156" text-anchor="start">Energy Density</text>
              <text x="464" y="368" text-anchor="start">Power Density</text>
              <text x="260" y="506" text-anchor="middle">Cycling Life</text>
              <text x="54" y="370" text-anchor="end">Cost-effectiveness</text>
              <text x="54" y="156" text-anchor="end">Wide Temp Range</text>
            </g>
          </svg>
        </article>
        <article class="legend-card">
          <h3>Cross-Technology Mapping</h3>
          <ul>
            <li><span class="dot li" /> Lithium-ion Batteries</li>
            <li><span class="dot na" /> Sodium-ion Batteries</li>
            <li><span class="dot flow" /> Redox Flow Batteries</li>
            <li><span class="dot super" /> Supercapacitors</li>
          </ul>
          <p>
            We map chemistry selection against real project boundaries: CAPEX, OPEX, local code,
            temperature profile, lifecycle target and commissioning schedule.
          </p>
        </article>
      </div>
    </section>

    <section class="section-wrap section-table">
      <div class="section-head">
        <h2>Comprehensive Comparison For Storage Applications</h2>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Technical Indicators</th>
              <th>Sodium-ion</th>
              <th>Solid-State</th>
              <th>Redox Flow</th>
              <th>Supercapacitor</th>
              <th>Lithium-ion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tableRows" :key="row.metric">
              <td>{{ row.metric }}</td>
              <td>{{ row.sodium }}</td>
              <td>{{ row.solid }}</td>
              <td>{{ row.redox }}</td>
              <td>{{ row.supercapacitor }}</td>
              <td>{{ row.lithium }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="data-note">Reference ranges are indicative engineering windows and will be finalized per project specification.</p>
    </section>

    <section class="section-wrap tech-focus" :style="techStyle">
      <div class="section-head light">
        <h2>Our Technology Focus</h2>
      </div>
      <div class="focus-grid">
        <article v-for="card in focusCards" :key="card.title" class="focus-card">
          <h3>{{ card.title }}</h3>
          <p>{{ card.tagline }}</p>
          <ul>
            <li v-for="point in card.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section-wrap compliance-section" :style="whyStyle">
      <div class="section-head">
        <h2>Compliance & Sustainability Readiness</h2>
      </div>
      <div class="compliance-grid">
        <article v-for="item in complianceCards" :key="item.title" class="compliance-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section-wrap why-section">
      <div class="section-head">
        <h2>Why StorageLink</h2>
      </div>
      <div class="why-grid">
        <article v-for="item in advantages" :key="item.title" class="why-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section-wrap partner-cta">
      <p class="eyebrow">Partner With Us</p>
      <h2>Move From Specs To Shipment</h2>
      <p>Share your power profile, use case and timeline. We return a practical route in 3-5 business days.</p>
      <div class="cta-pills">
        <span>Technical Consulting</span>
        <span>Supplier Matchmaking</span>
        <span>EU Delivery Coordination</span>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import bgEu from '@/assets/home/bg-eu.jpeg'
import bgTech from '@/assets/home/bg-tech.jpeg'
import hero from '@/assets/home/hero-energy.png'

const heroStyle = {
  backgroundImage: `linear-gradient(105deg, rgba(10, 25, 14, 0.48), rgba(14, 48, 24, 0.2)), url(${hero})`,
}

const techStyle = {
  backgroundImage: `linear-gradient(0deg, rgba(18, 58, 30, 0.72), rgba(27, 71, 40, 0.62)), url(${bgTech})`,
}

const whyStyle = {
  backgroundImage: `linear-gradient(0deg, rgba(222, 235, 229, 0.78), rgba(237, 244, 241, 0.72)), url(${bgEu})`,
}

const proofCards = [
  {
    value: '12+',
    label: 'EU Projects Supported',
    text: 'Pre-engineering, supplier evaluation and deployment planning for C&I and utility storage.',
  },
  {
    value: '4',
    label: 'Core Chemistries',
    text: 'Sodium-ion, solid-state, redox flow and supercapacitor selections tailored by scenario.',
  },
  {
    value: '3-5 Days',
    label: 'Initial Routeback',
    text: 'Rapid feasibility feedback covering technology fit, cost range and delivery dependencies.',
  },
]

const milestones = [
  {
    date: 'Q2 2024',
    title: 'Cross-chemistry sourcing framework launched',
    text: 'Unified qualification checklist for safety, lifecycle and lead-time decision making.',
  },
  {
    date: 'Q4 2024',
    title: 'Germany partner execution network established',
    text: 'Local support for communication handoff, logistics alignment and project follow-through.',
  },
  {
    date: 'Q3 2025',
    title: 'Multi-scenario evaluation library expanded',
    text: 'Added long-duration, low-temperature and high-cycle use-case templates for faster scoping.',
  },
]

const tableRows = [
  {
    metric: 'Cost-Effectiveness',
    sodium: '★★★★☆',
    solid: '★★★',
    redox: '★★★',
    supercapacitor: '★★',
    lithium: '★★★★',
  },
  {
    metric: 'Safety',
    sodium: '★★★★',
    solid: '★★★★★',
    redox: '★★★★★',
    supercapacitor: '★★★★☆',
    lithium: '★★★',
  },
  {
    metric: 'Wide Temperature Range',
    sodium: '-40°C to 70°C',
    solid: '-20°C to 60°C',
    redox: '-10°C to 50°C',
    supercapacitor: '-40°C to 65°C',
    lithium: '-20°C to 60°C',
  },
  {
    metric: 'Cycling Life',
    sodium: '6,000 - 10,000',
    solid: '3,000 - 8,000',
    redox: '> 15,000',
    supercapacitor: '> 1,000,000',
    lithium: '3,000 - 8,000',
  },
  {
    metric: 'Energy Density (Wh/kg)',
    sodium: '120 - 180',
    solid: '250 - 400 (potential)',
    redox: '20 - 50',
    supercapacitor: '5 - 15',
    lithium: '160 - 280',
  },
  {
    metric: 'Power Density (kW/kg)',
    sodium: '0.1 - 0.3',
    solid: '0.05 - 0.3',
    redox: '0.01 - 0.03',
    supercapacitor: '> 10',
    lithium: '0.2 - 1.0',
  },
]

const focusCards = [
  {
    title: 'Sodium-ion Batteries',
    tagline: 'A practical complement to lithium for resilient infrastructure.',
    points: ['Abundant resources', 'Balanced supply chain', 'Strong low-temperature performance'],
  },
  {
    title: 'Solid-state Batteries',
    tagline: 'The next generation for high safety and compact projects.',
    points: ['High safety profile', 'Potentially high energy density', 'Excellent for premium applications'],
  },
  {
    title: 'Redox Flow Batteries',
    tagline: 'Long-duration storage for grid and industrial balancing.',
    points: ['High durability', 'Intrinsically safe chemistry', 'Well-suited for frequent cycling'],
  },
  {
    title: 'Supercapacitors',
    tagline: 'Instantaneous power support and ultra-fast response.',
    points: ['Millisecond response', 'Ultra-high power density', 'Excellent cycle life'],
  },
]

const complianceCards = [
  {
    title: 'EU Battery Regulation Alignment',
    text: 'We map supplier documentation against lifecycle, labeling and traceability expectations for project onboarding.',
  },
  {
    title: 'Supply Chain Due Diligence',
    text: 'Material source transparency and manufacturing disclosure are reviewed before supplier recommendation.',
  },
  {
    title: 'Carbon Footprint Readiness',
    text: 'Support for preparing production and transport emission data required by industrial customers.',
  },
  {
    title: 'Quality Documentation Package',
    text: 'Cell, module and safety test artifacts are organized into a single review package for faster technical approval.',
  },
]

const advantages = [
  {
    title: 'Multi-technology Coverage',
    text: 'Objective guidance across sodium-ion, solid-state, redox flow and supercapacitor solutions.',
  },
  {
    title: "Direct Access to China's Supply Chain",
    text: 'Partnerships with proven manufacturers for stable quality, competitive lead times and faster iteration.',
  },
  {
    title: 'Local European Presence',
    text: 'German partner network for local communication, delivery coordination and project execution support.',
  },
  {
    title: 'Application-driven Approach',
    text: 'We begin with your load profile, safety class and timeline to define the most practical route.',
  },
]
</script>

<style scoped>
.home-page {
  display: grid;
  gap: 30px;
  padding-bottom: 48px;
}

.section-head {
  margin-bottom: 16px;
}

.section-head h2 {
  font-size: clamp(28px, 3.2vw, 42px);
  color: #1e352a;
}

.section-head.light h2 {
  color: #eef5f1;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  padding: 5px 12px;
  border-radius: 999px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  color: #2a6047;
  background: rgba(94, 145, 116, 0.14);
}

.hero-panel {
  position: relative;
  border-radius: 30px;
  min-height: 520px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow-soft);
}

.hero-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11, 27, 19, 0.14), rgba(11, 27, 19, 0.4));
}

.hero-content {
  position: relative;
  z-index: 1;
  min-height: 520px;
  padding: 60px clamp(22px, 6vw, 70px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 18px;
  color: #f0f8f2;
}

.hero-content h1 {
  font-size: clamp(36px, 5vw, 64px);
  max-width: 760px;
  line-height: 1.02;
}

.hero-copy {
  margin: 0;
  max-width: 760px;
  font-size: clamp(17px, 1.7vw, 22px);
  color: #eef8f0;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 10px 18px;
  font-weight: 700;
  font-size: 15px;
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(120deg, #68a383 0%, #3e7359 100%);
  color: #f8fffb;
  box-shadow: 0 8px 18px rgba(16, 44, 29, 0.24);
}

.btn-secondary {
  color: #f2fff6;
  border: 1px solid rgba(240, 252, 244, 0.5);
  background: rgba(33, 62, 46, 0.3);
}

.section-proof,
.section-comparison,
.section-table,
.why-section,
.partner-cta {
  background: var(--surface-glass);
  border: 1px solid var(--line-soft);
  border-radius: 26px;
  padding: 30px;
  box-shadow: var(--shadow-soft);
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}

.proof-card {
  border-radius: 16px;
  border: 1px solid #c8d7cf;
  background: #f8fbf9;
  padding: 16px;
}

.proof-value {
  margin: 0;
  font-size: clamp(28px, 3.6vw, 42px);
  font-weight: 700;
  color: #245a3e;
  line-height: 1;
}

.proof-card h3 {
  margin-top: 8px;
  font-size: 21px;
  color: #1c4230;
}

.proof-card p {
  margin: 8px 0 0;
  color: #4a6054;
}

.timeline-shell {
  border-radius: 18px;
  border: 1px solid #c8d7cf;
  background: #f2f8f4;
  padding: 18px;
}

.timeline-shell h3 {
  font-size: 24px;
  color: #1f4a35;
}

.timeline-list {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.timeline-list li {
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #cfded5;
  background: #fbfefd;
}

.timeline-date {
  margin: 0;
  color: #2f6a4b;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.timeline-list h4 {
  margin-top: 6px;
  font-size: 18px;
  color: #214b37;
}

.timeline-list p {
  margin-top: 6px;
  color: #4f675b;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 20px;
}

.radar-card,
.legend-card {
  border-radius: 18px;
  border: 1px solid var(--line-soft);
  background: #f7faf8;
  padding: 18px;
}

.radar-svg {
  width: 100%;
  height: auto;
}

.axis-label {
  fill: #233a2d;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 600;
  font-size: 20px;
}

.legend-card h3 {
  font-size: 30px;
  color: #234838;
}

.legend-card ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 12px;
  display: grid;
  gap: 10px;
}

.legend-card li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 600;
}

.legend-card p {
  margin: 0;
  color: #51685c;
  font-size: 17px;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 999px;
}

.dot.li { background: #e24552; }
.dot.na { background: #35b24d; }
.dot.flow { background: #2c93ca; }
.dot.super { background: #ffbf00; }

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
}

th,
td {
  border: 1px solid #b7cdb8;
  padding: 14px 12px;
  text-align: center;
  font-size: 16px;
}

thead th {
  color: #24573a;
  background: #ecf3ee;
  font-size: 17px;
}

tbody td:first-child,
thead th:first-child {
  text-align: left;
  font-weight: 600;
}

.data-note {
  margin: 14px 0 0;
  font-size: 14px;
  color: #566c60;
}

.tech-focus,
.compliance-section {
  border-radius: 26px;
  background-size: cover;
  background-position: center;
  padding: 30px;
  box-shadow: var(--shadow-soft);
}

.focus-grid,
.compliance-grid,
.why-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.focus-card,
.compliance-card,
.why-card {
  background: rgba(247, 251, 248, 0.9);
  border: 1px solid rgba(178, 205, 190, 0.7);
  border-radius: 16px;
  padding: 18px;
}

.focus-card h3,
.compliance-card h3,
.why-card h3 {
  font-size: clamp(25px, 2.5vw, 34px);
  color: #224b38;
}

.focus-card p,
.compliance-card p,
.why-card p {
  margin: 8px 0 0;
  color: #2a4033;
  font-size: 16px;
}

.focus-card ul {
  margin: 12px 0 0;
  padding-left: 18px;
  color: #2a4033;
  display: grid;
  gap: 6px;
}

.partner-cta {
  text-align: center;
  padding: 44px 24px;
}

.partner-cta h2 {
  font-size: clamp(42px, 6vw, 72px);
  color: #265f42;
  margin-bottom: 8px;
}

.partner-cta p {
  margin: 0;
  font-size: 19px;
  color: #476054;
}

.cta-pills {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.cta-pills span {
  padding: 11px 18px;
  border-radius: 999px;
  background: linear-gradient(120deg, #5f9879 0%, #467b61 100%);
  color: #fbfefb;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 6px 14px rgba(43, 98, 69, 0.2);
}

@media (max-width: 1024px) {
  .proof-grid,
  .comparison-grid,
  .focus-grid,
  .compliance-grid,
  .why-grid {
    grid-template-columns: 1fr;
  }

  .section-proof,
  .section-comparison,
  .section-table,
  .tech-focus,
  .compliance-section,
  .why-section,
  .partner-cta {
    padding: 22px;
  }
}
</style>
