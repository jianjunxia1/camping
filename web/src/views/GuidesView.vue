<script setup>
import { guides } from '../data/spots'
</script>

<template>
  <section class="container section">
    <h1>攻略中心</h1>
    <p>围绕新手入门、装备、季节与安全的实用内容。</p>

    <div class="grid cards-2">
      <article v-for="guide in guides" :key="guide.slug" class="card">
        <p class="tag">{{ guide.tag }}</p>
        <h3>{{ guide.title }}</h3>
        <p>阅读时长：{{ guide.readTime }}</p>
        <p>更新时间：{{ guide.updatedAt }}</p>
      </article>
    </div>
  </section>
</template>
