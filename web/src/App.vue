<script setup>
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const navKeyword = ref('')

function goSearch() {
  const value = navKeyword.value.trim()
  router.push({ path: '/spots', query: value ? { q: value } : {} })
}
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="container nav-wrap">
        <a href="/" class="brand" target="_blank" rel="noopener noreferrer">
          <img src="/logo-qiye.svg" alt="栖野 Logo" class="brand-logo" />
          <span class="logo">栖野</span>
        </a>

        <nav class="nav-links" aria-label="主导航">
          <a href="/" target="_blank" rel="noopener noreferrer">首页</a>
          <a href="/spots" target="_blank" rel="noopener noreferrer">露营地点</a>
          <a href="/guides" target="_blank" rel="noopener noreferrer">新手攻略</a>
          <a href="/about" target="_blank" rel="noopener noreferrer">关于</a>
        </nav>

        <form class="nav-search" @submit.prevent="goSearch">
          <input v-model="navKeyword" type="search" placeholder="搜索营地/区域" aria-label="搜索露营地点" />
          <button type="submit">搜索</button>
        </form>
      </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container footer-wrap">
        <p>© 2026 成都户外露营攻略站</p>
        <div class="footer-links">
          <a href="/disclaimer" target="_blank" rel="noopener noreferrer">免责声明</a>
        </div>
      </div>
    </footer>
  </div>
</template>
