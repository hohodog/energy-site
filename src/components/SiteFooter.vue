<script setup>
import { isTechVariant } from '../config/siteVariant'

const year = new Date().getFullYear()

const technologyLinks = [
  { label: '钠离子电池', path: '/sodium' },
  { label: '固态电池', path: '/solid' },
  { label: '液流电池', path: '/redox' },
  { label: '超级电容', path: '/supercapacitor' },
]

const companyLinks = [
  { label: '首页', path: '/' },
  { label: '关于我们', path: '/about' },
  { label: '联系我们', path: '/contact' },
]

const contactItems = [
  '中国供应链资源对接',
  '欧洲项目沟通支持',
  '通常回复时间：1 个工作日内',
]
</script>

<template>
  <footer :class="['site-footer', isTechVariant && 'site-footer-tech']">
    <div class="section-wrap">
      <div class="footer-frame">
        <div class="footer-top">
          <div class="footer-brand">
            <p class="footer-kicker">储能智联</p>
            <h2>先进储能技术与项目协同平台</h2>
            <p class="footer-summary">
              面向钠离子、液流、固态与超级电容等技术路线，支持技术展示、供应沟通与跨境项目协同。
            </p>

            <div class="footer-actions">
              <RouterLink class="footer-btn footer-btn-primary" to="/contact">联系团队</RouterLink>
              <RouterLink class="footer-btn footer-btn-secondary" to="/about">了解我们</RouterLink>
            </div>
          </div>

          <div class="footer-columns">
            <div class="footer-column">
              <strong>技术路线</strong>
              <RouterLink v-for="item in technologyLinks" :key="item.path" :to="item.path">
                {{ item.label }}
              </RouterLink>
            </div>

            <div class="footer-column">
              <strong>公司信息</strong>
              <RouterLink v-for="item in companyLinks" :key="item.path" :to="item.path">
                {{ item.label }}
              </RouterLink>
            </div>

            <div class="footer-column footer-column-contact">
              <strong>项目咨询</strong>
              <a class="footer-mail" href="mailto:contact@storagelink-energy.com">
                contact@storagelink-energy.com
              </a>

              <div class="footer-contact-list">
                <span v-for="item in contactItems" :key="item">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© {{ year }} 储能智联. 保留所有权利。</p>

          <div class="footer-bottom-links">
            <RouterLink to="/">首页</RouterLink>
            <RouterLink to="/about">关于我们</RouterLink>
            <RouterLink to="/contact">联系我们</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 0;
  padding: 28px 0 28px;
  background:
    radial-gradient(circle at top right, rgba(42, 177, 195, 0.12), transparent 24%),
    linear-gradient(180deg, #10221d 0%, #0c1a17 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.site-footer-tech {
  background:
    radial-gradient(circle at top right, rgba(42, 177, 195, 0.18), transparent 24%),
    linear-gradient(180deg, #071513 0%, #050f0d 100%);
  border-top-color: rgba(120, 168, 160, 0.14);
}

.footer-frame {
  display: grid;
  gap: 28px;
  padding: clamp(20px, 3vw, 32px) clamp(18px, 2.4vw, 30px) 0;
}

.footer-top {
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(540px, 0.96fr);
  gap: clamp(28px, 4vw, 56px);
  align-items: start;
}

.footer-kicker {
  margin: 0;
  color: rgba(185, 232, 236, 0.8);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.footer-brand h2 {
  margin-top: 14px;
  max-width: 14ch;
  color: #eff8f4;
  font-size: clamp(30px, 3.4vw, 46px);
  line-height: 0.98;
}

.footer-summary {
  margin: 16px 0 0;
  max-width: 54ch;
  color: rgba(219, 232, 225, 0.72);
  font-size: 16px;
  line-height: 1.8;
}

.footer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.footer-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.footer-btn:hover {
  transform: translateY(-1px);
}

.footer-btn-primary {
  color: #061311;
  background: linear-gradient(135deg, #46d7ef 0%, #78e6f1 100%);
  box-shadow: 0 16px 34px rgba(29, 124, 140, 0.22);
}

.footer-btn-secondary {
  color: #e8f5f0;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(134, 177, 170, 0.18);
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(18px, 2vw, 28px);
}

.footer-column {
  display: grid;
  align-content: start;
  gap: 12px;
}

.footer-column strong {
  color: #e7f6f1;
  font-size: 13px;
  letter-spacing: 0.12em;
}

.footer-column a,
.footer-column span {
  color: rgba(216, 231, 224, 0.72);
  font-size: 15px;
  line-height: 1.6;
  transition: color 0.18s ease, transform 0.18s ease;
}

.footer-column a:hover {
  color: #ffffff;
  transform: translateX(2px);
}

.footer-column-contact {
  padding-left: 8px;
}

.footer-mail {
  color: #effaf6 !important;
  font-size: 18px !important;
  font-weight: 700;
  line-height: 1.4 !important;
  word-break: break-word;
}

.footer-contact-list {
  display: grid;
  gap: 10px;
}

.footer-contact-list span {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(130, 171, 164, 0.14);
  color: rgba(220, 232, 226, 0.74);
  font-size: 13px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding-top: 18px;
  border-top: 1px solid rgba(129, 161, 154, 0.14);
}

.footer-bottom p {
  margin: 0;
  color: rgba(198, 216, 209, 0.58);
  font-size: 14px;
}

.footer-bottom-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-bottom-links a {
  color: rgba(212, 229, 221, 0.7);
  font-size: 14px;
  transition: color 0.18s ease;
}

.footer-bottom-links a:hover {
  color: #ffffff;
}

@media (max-width: 1080px) {
  .footer-top {
    grid-template-columns: 1fr;
  }

  .footer-brand h2 {
    max-width: none;
  }

  .footer-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-column-contact {
    padding-left: 0;
    grid-column: 1 / -1;
  }
}

@media (max-width: 720px) {
  .site-footer {
    margin-top: 44px;
    padding: 28px 0 28px;
  }

  .footer-frame {
    gap: 22px;
    padding: 24px 10px 0;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-brand h2 {
    font-size: clamp(28px, 9vw, 40px);
  }

  .footer-summary {
    font-size: 15px;
    line-height: 1.72;
  }
}
</style>
