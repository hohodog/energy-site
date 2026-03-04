<template>
  <section class="contact-page section-wrap">
    <header class="contact-head card">
      <p class="eyebrow">Contact</p>
      <h1>Start Your Storage Project Conversation</h1>
      <p>
        Share your project boundary and timeline. We will respond with an initial chemistry and delivery route.
      </p>
    </header>

    <section class="contact-grid">
      <article class="card details">
        <h2>Direct Channels</h2>
        <p><strong>Email:</strong> contact@storagelink-energy.com</p>
        <p><strong>EU Coordination:</strong> Germany partner desk</p>
        <p><strong>Typical Response:</strong> 1 business day</p>
        <p><strong>Technical Routeback:</strong> 3-5 business days</p>
      </article>

      <article class="card form-card">
        <h2>Project Brief</h2>
        <form class="contact-form" @submit.prevent>
          <label>
            Company
            <input type="text" placeholder="Your company" />
          </label>
          <label>
            Application
            <input type="text" placeholder="C&I / Grid / Backup / Other" />
          </label>
          <label>
            Target Capacity
            <input type="text" placeholder="e.g. 20MWh" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Project goals, delivery window, key constraints" />
          </label>
          <button type="submit">Submit (Demo)</button>
        </form>
      </article>
    </section>
  </section>
</template>

<style scoped>
.contact-page {
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

.contact-head h1 {
  font-size: clamp(30px, 4.6vw, 54px);
  color: #1d4934;
}

.contact-head p {
  margin-top: 10px;
  color: #4b6055;
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;
}

.details h2,
.form-card h2 {
  margin: 0;
  color: #214936;
  font-size: 28px;
}

.details p {
  margin-top: 11px;
  color: #3f554a;
}

.contact-form {
  margin-top: 12px;
  display: grid;
  gap: 12px;
}

label {
  display: grid;
  gap: 6px;
  color: #2f463b;
  font-weight: 600;
}

input,
textarea {
  border-radius: 10px;
  border: 1px solid #c5d5cc;
  padding: 10px 12px;
  font-size: 14px;
  font-family: inherit;
}

button {
  margin-top: 4px;
  border: 0;
  border-radius: 999px;
  padding: 10px 16px;
  color: #f7fff9;
  font-weight: 700;
  background: linear-gradient(120deg, #5f9879 0%, #467b61 100%);
  width: fit-content;
  cursor: pointer;
}

@media (max-width: 960px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
