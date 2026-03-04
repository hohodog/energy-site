<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Sodium Ion', path: '/sodium' },
  { label: 'Supercapacitor', path: '/supercapacitor' },
  { label: 'Redox Flow', path: '/redox' },
  { label: 'Solid-State', path: '/solid' },
  { label: 'Resources', path: '/others' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['nav', scrolled && 'nav-scrolled']">
    <div class="nav-inner">
      <div class="logo">NEXBAT</div>

      <nav class="links" aria-label="Main navigation">
        <RouterLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="link"
          exact-active-class="link-active"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  height: 72px;

  display: flex;
  align-items: center;

  background: transparent;
  transition: all 0.25s ease;
}

.nav-scrolled {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.75);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.nav-inner {
  max-width: 1240px;
  margin: auto;
  width: 100%;
  padding: 0 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.links {
  display: flex;
  gap: 30px;
}

.link {
  text-decoration: none;
  color: #2f3d36;
  font-size: 15px;
  font-weight: 500;
  position: relative;
  padding: 6px 2px;
}

.link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: #1f5942;
  transition: 0.25s;
}

.link:hover::after,
.link-active::after {
  width: 100%;
}

.link-active {
  color: #1f5942;
}

@media (max-width: 900px) {
  .links {
    gap: 18px;
  }

  .link {
    font-size: 14px;
  }
}
</style>
