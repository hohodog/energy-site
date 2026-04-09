<script setup>
const year = new Date().getFullYear()

const footerLinks = [
  { label: '首页', path: '/' },
  { label: '钠离子电池', path: '/sodium' },
  { label: '超级电容', path: '/supercapacitor' },
  { label: '固态电池', path: '/solid' },
  { label: '液流电池', path: '/redox' },
  { label: '关于我们', path: '/about' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="section-wrap">
      <div class="footer-shell">
        <div class="footer-main">
          <RouterLink class="footer-brand" to="/">
            <span class="footer-brand-mark" aria-hidden="true">
              <span class="footer-brand-mark-core"></span>
            </span>

            <span class="footer-brand-copy">
              <strong>储能智联</strong>
              <span>Advanced Energy Solutions</span>
            </span>
          </RouterLink>

          <nav class="footer-nav" aria-label="页脚导航">
            <RouterLink
              v-for="item in footerLinks"
              :key="item.path"
              :to="item.path"
              class="footer-link"
            >
              {{ item.label }}
            </RouterLink>
          </nav>

          <RouterLink class="footer-cta" to="/contact"> 联系我们 </RouterLink>
        </div>

        <div class="footer-bottom">
          <p>© {{ year }} 储能智联</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 28px;
  padding: 0 0 20px;
  background: transparent;
}

.footer-shell {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  padding: 18px 22px 14px;
  border: 1px solid rgba(205, 218, 213, 0.75);
  background:
    radial-gradient(circle at top right, rgba(88, 208, 217, 0.08), transparent 22%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(247, 250, 248, 0.76));
  box-shadow:
    0 16px 38px rgba(23, 45, 36, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.88);
}

.site-footer-tech .footer-shell {
  border-color: rgba(104, 158, 149, 0.18);
  background:
    radial-gradient(circle at top right, rgba(74, 222, 239, 0.12), transparent 24%),
    linear-gradient(180deg, rgba(8, 26, 23, 0.92), rgba(5, 18, 16, 0.95));
  box-shadow:
    0 20px 44px rgba(2, 9, 8, 0.28),
    inset 0 1px 0 rgba(214, 255, 247, 0.05);
}

.footer-main {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 18px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  text-decoration: none !important;
}

.footer-brand-mark {
  position: relative;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  background:
    linear-gradient(135deg, rgba(30, 199, 223, 0.18), rgba(86, 216, 196, 0.16)),
    rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(189, 225, 216, 0.78);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.84),
    0 8px 20px rgba(28, 71, 58, 0.08);
}

.footer-brand-mark::before,
.footer-brand-mark::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  background: linear-gradient(135deg, #1ec7df, #56d8c4);
}

.footer-brand-mark::before {
  width: 16px;
  height: 16px;
}

.footer-brand-mark::after {
  width: 24px;
  height: 2px;
  transform: rotate(-38deg);
}

.footer-brand-mark-core {
  position: relative;
  z-index: 1;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #10392f;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.46);
}

.site-footer-tech .footer-brand-mark {
  background:
    linear-gradient(135deg, rgba(66, 211, 236, 0.18), rgba(115, 227, 240, 0.14)),
    rgba(255, 255, 255, 0.04);
  border-color: rgba(103, 154, 147, 0.28);
  box-shadow:
    inset 0 1px 0 rgba(218, 255, 248, 0.08),
    0 10px 24px rgba(4, 12, 11, 0.22);
}

.site-footer-tech .footer-brand-mark-core {
  background: #dffcf6;
  box-shadow: 0 0 0 4px rgba(120, 228, 214, 0.12);
}

.footer-brand-copy {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.footer-brand-copy strong {
  color: #173328;
  font-size: 16px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: 0.06em;
}

.footer-brand-copy span {
  color: #70867d;
  font-size: 11px;
  line-height: 1.1;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.site-footer-tech .footer-brand-copy strong {
  color: #effffc;
}

.site-footer-tech .footer-brand-copy span {
  color: rgba(181, 226, 218, 0.72);
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(214, 224, 219, 0.88);
  background: rgba(248, 251, 249, 0.72);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    0 6px 18px rgba(19, 41, 32, 0.04);
}

.site-footer-tech .footer-nav {
  border-color: rgba(103, 154, 147, 0.2);
  background: rgba(255, 255, 255, 0.04);
  box-shadow:
    inset 0 1px 0 rgba(218, 255, 248, 0.04),
    0 6px 18px rgba(2, 8, 7, 0.14);
}

.footer-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  color: #28463a;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.footer-link:hover {
  color: #173328;
  background: linear-gradient(135deg, rgba(34, 197, 219, 0.14), rgba(87, 203, 186, 0.1));
  transform: translateY(-1px);
}

.site-footer-tech .footer-link {
  color: rgba(229, 247, 243, 0.84);
}

.site-footer-tech .footer-link:hover {
  color: #f3fffd;
  background: linear-gradient(135deg, rgba(66, 211, 236, 0.18), rgba(115, 227, 240, 0.1));
}

.footer-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  color: #f4fffb;
  background: linear-gradient(135deg, #18362c 0%, #204438 100%);
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  box-shadow:
    0 12px 26px rgba(19, 41, 32, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.footer-cta:hover {
  transform: translateY(-1px);
  box-shadow:
    0 16px 30px rgba(19, 41, 32, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.site-footer-tech .footer-cta {
  color: #051311;
  background: linear-gradient(135deg, #4cd8ed 0%, #91f0f2 100%);
  box-shadow:
    0 12px 26px rgba(28, 124, 140, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);
}

.footer-bottom {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(126, 159, 150, 0.12);
}

.footer-bottom p {
  margin: 0;
  color: #7a8f87;
  font-size: 12px;
  line-height: 1.5;
}

.site-footer-tech .footer-bottom p {
  color: rgba(198, 216, 209, 0.58);
}

@media (max-width: 1100px) {
  .footer-main {
    grid-template-columns: 1fr;
    justify-items: start;
  }

  .footer-nav {
    width: 100%;
    justify-content: flex-start;
    border-radius: 24px;
  }
}

@media (max-width: 720px) {
  .site-footer {
    margin-top: 24px;
    padding-bottom: 16px;
  }

  .footer-shell {
    border-radius: 22px;
    padding: 16px;
  }

  .footer-brand-mark {
    width: 36px;
    height: 36px;
    flex-basis: 36px;
    border-radius: 12px;
  }

  .footer-brand-copy strong {
    font-size: 15px;
  }

  .footer-brand-copy span {
    font-size: 10px;
  }

  .footer-nav {
    gap: 8px;
    padding: 8px;
  }

  .footer-link {
    min-height: 38px;
    padding: 0 12px;
    font-size: 13px;
  }

  .footer-cta {
    min-height: 42px;
    padding: 0 16px;
    font-size: 13px;
  }
}
</style>
