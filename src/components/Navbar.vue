<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { isTechVariant } from '../config/siteVariant'

const menuItems = [
  { label: '首页', path: '/' },
  { label: '钠离子电池', path: '/sodium' },
  { label: '超级电容', path: '/supercapacitor' },
  { label: '固态电池', path: '/solid' },
  { label: '液流电池', path: '/redox' },
  { label: '关于我们', path: '/about' },
]

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['nav', isTechVariant && 'nav-tech', scrolled && 'nav-scrolled', menuOpen && 'nav-open']">
    <div class="nav-inner">
      <div class="nav-frame">
        <RouterLink class="brand" to="/">
          <strong>储能智联</strong>
          <span>先进储能解决方案</span>
        </RouterLink>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-label="切换导航"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
        </button>

        <div class="nav-cluster">
          <div :class="['links-shell', menuOpen && 'links-shell-open']">
            <nav :class="['links', menuOpen && 'links-open']" aria-label="主导航">
              <RouterLink
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                class="link"
                exact-active-class="link-active"
              >
                {{ item.label }}
              </RouterLink>

              <RouterLink to="/contact" class="link link-mobile-only" exact-active-class="link-active">
                联系我们
              </RouterLink>
            </nav>
          </div>

          <RouterLink class="nav-cta" to="/contact">联系我们</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0;
  backdrop-filter: blur(16px);
  background:
    linear-gradient(180deg, rgba(247, 249, 246, 0.94) 0%, rgba(247, 249, 246, 0.78) 72%, rgba(247, 249, 246, 0.18) 100%);
  border-bottom: 1px solid rgba(209, 219, 214, 0.72);
  transition: background 0.24s ease, border-color 0.24s ease;
}

.nav-tech {
  background:
    linear-gradient(180deg, rgba(7, 21, 19, 0.94) 0%, rgba(7, 21, 19, 0.84) 72%, rgba(7, 21, 19, 0.24) 100%);
  border-bottom-color: rgba(112, 160, 152, 0.16);
}

.nav-scrolled,
.nav-open {
  background:
    linear-gradient(180deg, rgba(249, 251, 250, 0.98) 0%, rgba(249, 251, 250, 0.92) 100%);
  border-bottom-color: rgba(201, 213, 206, 0.88);
}

.nav-tech.nav-scrolled,
.nav-tech.nav-open {
  background:
    linear-gradient(180deg, rgba(8, 24, 21, 0.98) 0%, rgba(8, 24, 21, 0.94) 100%);
  border-bottom-color: rgba(124, 178, 169, 0.18);
}

.nav-inner {
  width: min(100%, var(--layout-width));
  max-width: var(--layout-width);
  margin: 0 auto;
  padding: 0 var(--layout-gutter);
}

.nav-frame {
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: 78px;
  padding: 0 18px;
  border-radius: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  transition:
    transform 0.24s ease;
}

.brand {
  display: grid;
  gap: 3px;
  margin-right: auto;
  text-decoration: none !important;
  border-bottom: 0 !important;
  box-shadow: none !important;
}

.brand strong {
  color: #173328;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-decoration: none !important;
  border-bottom: 0 !important;
}

.brand span {
  color: #587065;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-decoration: none !important;
  border-bottom: 0 !important;
}

.nav-tech .brand strong {
  color: #eafcf8;
}

.nav-tech .brand span {
  color: rgba(176, 215, 208, 0.74);
}

.nav-scrolled .brand strong,
.nav-open .brand strong {
  color: #173328;
}

.nav-tech.nav-scrolled .brand strong,
.nav-tech.nav-open .brand strong {
  color: #eafcf8;
}

.nav-scrolled .brand span,
.nav-open .brand span {
  color: #537064;
}

.nav-tech.nav-scrolled .brand span,
.nav-tech.nav-open .brand span {
  color: rgba(176, 215, 208, 0.74);
}

.nav-cluster {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 14px;
}

.links-shell {
  display: flex;
  align-items: center;
  padding: 0;
  border-radius: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
}

.links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.link {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  color: #29463a;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 12px 14px;
  border-radius: 999px;
  text-decoration: none !important;
  border-bottom: 0 !important;
  box-shadow: none !important;
  transform: translateY(0);
  transition:
    color 0.22s ease,
    background-color 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;
}

.link::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(30, 164, 197, 0.16), rgba(83, 200, 216, 0.08));
  opacity: 0;
  transform: scale(0.92);
  transition: opacity 0.22s ease, transform 0.22s ease;
  z-index: -1;
}

.nav-tech .link {
  color: rgba(224, 242, 237, 0.84);
}

.nav-scrolled .link,
.nav-open .link,
.link-active {
  color: #244538;
}

.nav-tech.nav-scrolled .link,
.nav-tech.nav-open .link,
.nav-tech .link-active {
  color: #f1fffd;
}

.link:hover,
.link:focus,
.link-active {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(22, 56, 45, 0.06);
}

.link:hover::before,
.link:focus::before,
.link-active::before {
  opacity: 1;
  transform: scale(1);
}

.nav-tech .link:hover,
.nav-tech .link:focus,
.nav-tech .link-active {
  box-shadow: 0 12px 24px rgba(9, 28, 25, 0.24);
}

.nav-tech .link::before {
  background: linear-gradient(135deg, rgba(66, 211, 236, 0.16), rgba(115, 227, 240, 0.1));
}

.link-mobile-only {
  display: none;
}

.brand:hover,
.brand:focus,
.link-active {
  text-decoration: none !important;
  border-bottom: 0 !important;
  box-shadow: none !important;
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  background: #173328;
  color: #f5fcf8;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none !important;
  transform: translateY(0);
  transition:
    transform 0.22s ease,
    background 0.22s ease,
    box-shadow 0.22s ease,
    color 0.22s ease;
  box-shadow: 0 14px 32px rgba(20, 42, 33, 0.12);
}

.nav-cta::before {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04));
  opacity: 0;
  transform: scale(0.94);
  transition: opacity 0.22s ease, transform 0.22s ease;
  z-index: -1;
}

.nav-cta::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -38%;
  width: 34%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.34), transparent);
  transform: skewX(-20deg) translateX(-140%);
  transition: transform 0.45s ease;
}

.nav-cta:hover,
.nav-cta:focus {
  transform: translateY(-1px);
  background: #204438;
  box-shadow: 0 18px 36px rgba(20, 42, 33, 0.16);
}

.nav-cta:hover::before,
.nav-cta:focus::before {
  opacity: 1;
  transform: scale(1);
}

.nav-cta:hover::after,
.nav-cta:focus::after {
  transform: skewX(-20deg) translateX(420%);
}

.nav-tech .nav-cta {
  background: linear-gradient(135deg, #42d3ec 0%, #73e3f0 100%);
  color: #051311;
  box-shadow: 0 14px 32px rgba(29, 124, 140, 0.24);
}

.nav-tech .nav-cta::before {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.08));
}

.nav-tech .nav-cta:hover,
.nav-tech .nav-cta:focus {
  background: linear-gradient(135deg, #56d9ee 0%, #87e8f3 100%);
  box-shadow: 0 18px 38px rgba(29, 124, 140, 0.3);
}

.menu-toggle {
  display: none;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  border: 1px solid rgba(208, 219, 213, 0.95);
  background: rgba(255, 255, 255, 0.88);
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0;
}

.nav-tech .menu-toggle {
  border-color: rgba(103, 154, 147, 0.22);
  background: rgba(255, 255, 255, 0.06);
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: #1f4032;
}

.nav-tech .menu-toggle span {
  background: #ddf8f2;
}

@media (max-width: 1120px) {
  .nav-frame {
    padding: 0 14px;
  }

  .nav-cluster {
    gap: 10px;
  }

  .link {
    font-size: 13px;
    padding: 10px 12px;
  }

  .nav-cta {
    min-height: 44px;
    padding: 0 16px;
    font-size: 13px;
  }
}

@media (max-width: 1040px) {
  .nav-frame {
    padding: 0 12px;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav-cta {
    display: none;
  }

  .nav-cluster {
    margin-left: 0;
  }

  .links {
    gap: 8px;
    position: absolute;
    top: calc(100% + 8px);
    flex-direction: column;
    align-items: stretch;
    padding: 0;
  }

  .links-shell {
    position: absolute;
    top: calc(100% + 10px);
    left: var(--layout-gutter);
    right: var(--layout-gutter);
    display: none;
    padding: 12px;
    border-radius: 22px;
    border: 1px solid rgba(208, 219, 213, 0.95);
    background:
      radial-gradient(circle at top right, rgba(86, 176, 137, 0.12), transparent 26%),
      rgba(255, 255, 255, 0.96);
    box-shadow: 0 18px 38px rgba(16, 32, 25, 0.12);
  }

  .nav-tech .links-shell {
    background:
      radial-gradient(circle at top right, rgba(67, 214, 235, 0.12), transparent 26%),
      linear-gradient(180deg, rgba(9, 26, 23, 0.98), rgba(7, 21, 19, 0.98));
  }

  .links-shell-open {
    display: block;
  }

  .link {
    padding: 12px 12px;
    color: #254336;
  }

  .link-mobile-only {
    display: inline-flex;
  }

  .brand strong {
    font-size: 16px;
    letter-spacing: 0.1em;
  }

  .nav-frame {
    min-height: 68px;
  }
}
</style>
