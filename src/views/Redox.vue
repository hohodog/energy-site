<template>
  <section class="tech-page section-wrap">
    <header class="card hero">
      <p class="eyebrow">Technology Focus</p>
      <h1>Redox Flow Batteries</h1>
      <p>Long-duration, high-cycle storage designed for grid balancing and heavy-duty daily dispatch profiles.</p>
    </header>

    <section class="grid">
      <article class="card">
        <h2>Best-fit Scenarios</h2>
        <ul>
          <li>6-12 hour shifting for renewable smoothing</li>
          <li>Applications requiring long service life and deep cycling</li>
          <li>Installations prioritizing intrinsic chemical safety</li>
        </ul>
      </article>

      <article class="card">
        <h2>Engineering Watchpoints</h2>
        <ul>
          <li>Site footprint and balance-of-plant complexity</li>
          <li>Electrolyte management and maintenance plan</li>
          <li>Round-trip efficiency in dispatch economics</li>
        </ul>
      </article>
    </section>
  </section>
</template>

<style scoped>
.tech-page { padding-top: 26px; padding-bottom: 42px; display: grid; gap: 20px; }
.card { background: rgba(255,255,255,.9); border: 1px solid #d5e1da; border-radius: 18px; padding: 24px; box-shadow: 0 12px 30px rgba(24,45,35,.08); }
.eyebrow { display:inline-block; margin-bottom:8px; border-radius:999px; background: rgba(94,145,116,.14); color:#2b6048; font-size:12px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; padding:5px 10px; }
h1 { font-size: clamp(30px, 4.8vw, 52px); color:#1f4935; }
h2 { margin:0; font-size:28px; color:#214936; }
.hero p { margin-top: 10px; color:#4b6055; }
.grid { display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:20px; }
ul { margin:14px 0 0; padding-left:20px; display:grid; gap:8px; color:#3f554a; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
