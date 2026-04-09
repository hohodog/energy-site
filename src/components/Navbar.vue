<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

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
  scrolled.value = window.scrollY > 12
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
  <header
    :class="[
      'nav',
      scrolled && 'nav-scrolled',
      menuOpen && 'nav-open',
    ]"
  >
    <div class="nav-inner">
      <div class="nav-frame">
        <RouterLink class="brand" to="/">
          <span class="brand-mark" aria-hidden="true">
            <span class="brand-mark-core"></span>
          </span>

          <span class="brand-copy">
            <strong>储能智联</strong>
            <span>Advanced Energy Solutions</span>
          </span>
        </RouterLink>

        <div class="nav-cluster">
          <div class="links-shell">
            <nav :class="['links', menuOpen && 'links-open']" aria-label="主导航">
              <RouterLink
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                class="link"
                exact-active-class="link-active"
              >
                <span>{{ item.label }}</span>
              </RouterLink>

              <RouterLink
                to="/contact"
                class="link link-mobile-only"
                exact-active-class="link-active"
              >
                <span>联系我们</span>
              </RouterLink>
            </nav>
          </div>

          <RouterLink class="nav-cta" to="/contact">
            <span>联系我们</span>
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
        </div>
      </div>

      <transition name="menu-fade">
        <div v-if="menuOpen" class="mobile-panel">
          <nav class="mobile-links" aria-label="移动端主导航">
            <RouterLink
              v-for="item in menuItems"
              :key="`mobile-${item.path}`"
              :to="item.path"
              class="mobile-link"
              exact-active-class="mobile-link-active"
            >
              {{ item.label }}
            </RouterLink>

            <RouterLink
              to="/contact"
              class="mobile-link mobile-link-cta"
              exact-active-class="mobile-link-active"
            >
              联系我们
            </RouterLink>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 1200;
  padding: 16px 0 0;
  transition: padding 0.26s ease;
}

.nav::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 140px;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(237, 241, 237, 0.92), rgba(237, 241, 237, 0));
}

.nav-tech::before {
  background: linear-gradient(180deg, rgba(6, 17, 16, 0.92), rgba(6, 17, 16, 0));
}

.nav-scrolled,
.nav-open {
  padding-top: 10px;
}

.nav-inner {
  width: min(100%, var(--layout-width));
  max-width: var(--layout-width);
  margin: 0 auto;
  padding: 0 var(--layout-gutter);
  position: relative;
}

.nav-frame {
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: 80px;
  padding: 12px 14px 12px 18px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background:
    radial-gradient(circle at top right, rgba(102, 199, 183, 0.12), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.72));
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  box-shadow:
    0 20px 60px rgba(18, 37, 29, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.42);
  transition:
    min-height 0.26s ease,
    padding 0.26s ease,
    border-color 0.26s ease,
    background 0.26s ease,
    box-shadow 0.26s ease,
    transform 0.26s ease;
}

.nav-tech .nav-frame {
  border-color: rgba(111, 167, 159, 0.18);
  background:
    radial-gradient(circle at top right, rgba(67, 214, 235, 0.14), transparent 24%),
    linear-gradient(180deg, rgba(10, 28, 25, 0.82), rgba(7, 21, 19, 0.74));
  box-shadow:
    0 20px 60px rgba(4, 12, 11, 0.34),
    inset 0 1px 0 rgba(181, 240, 231, 0.08);
}

.nav-scrolled .nav-frame,
.nav-open .nav-frame {
  min-height: 72px;
  padding: 10px 12px 10px 16px;
  border-color: rgba(226, 234, 229, 0.92);
  box-shadow:
    0 16px 44px rgba(18, 37, 29, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.46);
}

.nav-tech.nav-scrolled .nav-frame,
.nav-tech.nav-open .nav-frame {
  border-color: rgba(123, 185, 176, 0.2);
  box-shadow:
    0 16px 44px rgba(4, 12, 11, 0.38),
    inset 0 1px 0 rgba(181, 240, 231, 0.08);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  margin-right: auto;
  text-decoration: none !important;
  border-bottom: 0 !important;
  box-shadow: none !important;
}

.brand-mark {
  position: relative;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background:
    linear-gradient(135deg, rgba(31, 186, 217, 0.18), rgba(74, 198, 162, 0.16)),
    rgba(255, 255, 255, 0.56);
  border: 1px solid rgba(187, 224, 214, 0.72);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    0 8px 22px rgba(28, 71, 58, 0.08);
}

.brand-mark::before,
.brand-mark::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  background: linear-gradient(135deg, #1ec7df, #56d8c4);
}

.brand-mark::before {
  width: 18px;
  height: 18px;
  opacity: 0.95;
  filter: blur(0.2px);
}

.brand-mark::after {
  width: 28px;
  height: 2px;
  transform: rotate(-38deg);
  opacity: 0.9;
}

.brand-mark-core {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #10392f;
  z-index: 1;
  box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.45);
}

.nav-tech .brand-mark {
  background:
    linear-gradient(135deg, rgba(66, 211, 236, 0.18), rgba(115, 227, 240, 0.14)),
    rgba(255, 255, 255, 0.04);
  border-color: rgba(103, 154, 147, 0.28);
  box-shadow:
    inset 0 1px 0 rgba(218, 255, 248, 0.08),
    0 10px 26px rgba(4, 12, 11, 0.24);
}

.nav-tech .brand-mark-core {
  background: #dffcf6;
  box-shadow: 0 0 0 5px rgba(120, 228, 214, 0.12);
}

.brand-copy {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.brand-copy strong {
  color: #173328;
  font-size: 17px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-decoration: none !important;
  border-bottom: 0 !important;
}

.brand-copy span {
  color: #678076;
  font-size: 11px;
  line-height: 1.1;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.nav-tech .brand-copy strong {
  color: #effffc;
}

.nav-tech .brand-copy span {
  color: rgba(181, 226, 218, 0.72);
}

.nav-cluster {
  display: flex;
  align-items: center;
  gap: 12px;
}

.links-shell {
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(214, 224, 219, 0.88);
  background: rgba(248, 251, 249, 0.72);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    0 6px 18px rgba(19, 41, 32, 0.04);
}

.nav-tech .links-shell {
  border-color: rgba(103, 154, 147, 0.2);
  background: rgba(255, 255, 255, 0.04);
  box-shadow:
    inset 0 1px 0 rgba(218, 255, 248, 0.04),
    0 6px 18px rgba(2, 8, 7, 0.14);
}

.links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;
  min-height: 46px;
  padding: 0 16px;
  border-radius: 999px;
  color: #28463a;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-decoration: none !important;
  border-bottom: 0 !important;
  box-shadow: none !important;
  transition:
    color 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease,
    background-color 0.22s ease;
}

.link::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(34, 197, 219, 0.16), rgba(87, 203, 186, 0.12));
  opacity: 0;
  transform: scale(0.92);
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
  z-index: -1;
}

.link::after {
  content: '';
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 7px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, #34c9df, #58d4bf);
  opacity: 0;
  transform: scaleX(0.4);
  transform-origin: center;
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.link:hover,
.link:focus {
  color: #173328;
  transform: translateY(-1px);
}

.link:hover::before,
.link:focus::before,
.link-active::before {
  opacity: 1;
  transform: scale(1);
}

.link-active::after,
.link:hover::after,
.link:focus::after {
  opacity: 1;
  transform: scaleX(1);
}

.link-active {
  color: #173328;
  box-shadow: 0 8px 18px rgba(20, 52, 42, 0.06);
}

.nav-tech .link {
  color: rgba(229, 247, 243, 0.84);
}

.nav-tech .link::before {
  background: linear-gradient(135deg, rgba(66, 211, 236, 0.18), rgba(115, 227, 240, 0.1));
}

.nav-tech .link::after {
  background: linear-gradient(90deg, #5ae0ee, #9df4e5);
}

.nav-tech .link:hover,
.nav-tech .link:focus,
.nav-tech .link-active {
  color: #f3fffd;
}

.nav-tech .link-active {
  box-shadow: 0 12px 24px rgba(6, 16, 15, 0.24);
}

.link-mobile-only {
  display: none;
}

.nav-cta {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 20px;
  border-radius: 999px;
  color: #f4fffb;
  background: linear-gradient(135deg, #18362c 0%, #204438 100%);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-decoration: none !important;
  box-shadow:
    0 14px 30px rgba(19, 41, 32, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    filter 0.22s ease;
}

.nav-cta::before {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03));
  opacity: 0.9;
  pointer-events: none;
}

.nav-cta::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -32%;
  width: 28%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.34), transparent);
  transform: skewX(-20deg) translateX(-180%);
  transition: transform 0.5s ease;
}

.nav-cta:hover,
.nav-cta:focus {
  transform: translateY(-1px);
  filter: brightness(1.03);
  box-shadow:
    0 18px 36px rgba(19, 41, 32, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.nav-cta:hover::after,
.nav-cta:focus::after {
  transform: skewX(-20deg) translateX(480%);
}

.nav-tech .nav-cta {
  color: #051311;
  background: linear-gradient(135deg, #4cd8ed 0%, #91f0f2 100%);
  box-shadow:
    0 14px 30px rgba(28, 124, 140, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);
}

.menu-toggle {
  display: none;
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  border: 1px solid rgba(210, 221, 216, 0.92);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.74),
    0 8px 18px rgba(20, 42, 33, 0.06);
  padding: 0;
  cursor: pointer;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;
}

.menu-toggle:hover {
  transform: translateY(-1px);
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 0 auto;
  border-radius: 999px;
  background: #1b3b30;
}

.menu-toggle span + span {
  margin-top: 5px;
}

.nav-tech .menu-toggle {
  border-color: rgba(103, 154, 147, 0.26);
  background: rgba(255, 255, 255, 0.06);
  box-shadow:
    inset 0 1px 0 rgba(220, 255, 248, 0.05),
    0 8px 18px rgba(3, 9, 8, 0.18);
}

.nav-tech .menu-toggle span {
  background: #e9fffa;
}

.mobile-panel {
  display: none;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1180px) {
  .link {
    padding: 0 14px;
    font-size: 13px;
  }

  .nav-cta {
    min-height: 48px;
    padding: 0 18px;
    font-size: 13px;
  }
}

@media (max-width: 1040px) {
  .nav {
    padding-top: 12px;
  }

  .nav-frame {
    min-height: 72px;
    padding: 10px 12px 10px 14px;
    border-radius: 24px;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
    flex-basis: 40px;
    border-radius: 13px;
  }

  .brand-copy strong {
    font-size: 16px;
  }

  .brand-copy span {
    font-size: 10px;
    letter-spacing: 0.1em;
  }

  .links-shell,
  .nav-cta {
    display: none;
  }

  .menu-toggle {
    display: inline-block;
  }

  .mobile-panel {
    display: block;
    position: absolute;
    top: calc(100% + 10px);
    left: var(--layout-gutter);
    right: var(--layout-gutter);
    z-index: 20;
  }

  .mobile-links {
    display: grid;
    gap: 8px;
    padding: 14px;
    border-radius: 24px;
    border: 1px solid rgba(214, 224, 219, 0.92);
    background:
      radial-gradient(circle at top right, rgba(83, 200, 216, 0.12), transparent 28%),
      rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 18px 42px rgba(16, 32, 25, 0.12);
  }

  .nav-tech .mobile-links {
    border-color: rgba(103, 154, 147, 0.2);
    background:
      radial-gradient(circle at top right, rgba(67, 214, 235, 0.12), transparent 28%),
      linear-gradient(180deg, rgba(9, 26, 23, 0.98), rgba(7, 21, 19, 0.98));
    box-shadow: 0 18px 42px rgba(3, 9, 8, 0.28);
  }

  .mobile-link {
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 0 14px;
    border-radius: 16px;
    color: #214236;
    font-size: 14px;
    font-weight: 700;
    background: rgba(246, 249, 247, 0.78);
    text-decoration: none !important;
    transition:
      transform 0.22s ease,
      background 0.22s ease,
      color 0.22s ease;
  }

  .mobile-link:hover,
  .mobile-link-active {
    transform: translateY(-1px);
    background: linear-gradient(135deg, rgba(35, 196, 221, 0.14), rgba(86, 210, 191, 0.12));
    color: #173328;
  }

  .nav-tech .mobile-link {
    color: #ecfffb;
    background: rgba(255, 255, 255, 0.05);
  }

  .nav-tech .mobile-link:hover,
  .nav-tech .mobile-link-active {
    background: linear-gradient(135deg, rgba(66, 211, 236, 0.18), rgba(115, 227, 240, 0.1));
    color: #f6fffd;
  }

  .mobile-link-cta {
    justify-content: center;
    color: #f4fffb;
    background: linear-gradient(135deg, #18362c 0%, #204438 100%);
    box-shadow: 0 12px 24px rgba(19, 41, 32, 0.12);
  }

  .nav-tech .mobile-link-cta {
    color: #051311;
    background: linear-gradient(135deg, #4cd8ed 0%, #91f0f2 100%);
    box-shadow: 0 12px 24px rgba(28, 124, 140, 0.24);
  }
}

@media (max-width: 640px) {
  .nav {
    padding-top: 10px;
  }

  .nav-frame {
    min-height: 66px;
    gap: 14px;
    padding: 9px 10px 9px 12px;
    border-radius: 20px;
  }

  .brand {
    gap: 10px;
  }

  .brand-mark {
    width: 36px;
    height: 36px;
    flex-basis: 36px;
    border-radius: 12px;
  }

  .brand-mark::before {
    width: 15px;
    height: 15px;
  }

  .brand-mark::after {
    width: 22px;
  }

  .brand-mark-core {
    width: 8px;
    height: 8px;
  }

  .brand-copy strong {
    font-size: 15px;
    letter-spacing: 0.04em;
  }

  .brand-copy span {
    font-size: 9px;
    letter-spacing: 0.08em;
  }

  .menu-toggle {
    width: 44px;
    height: 44px;
    border-radius: 14px;
  }

  .mobile-panel {
    left: 16px;
    right: 16px;
  }
}
</style>
