<script setup>
import ImageCarousel from '../components/ImageCarousel.vue'
import { spots, guides } from '../data/spots'

const featuredSpots = spots.slice(0, 4)
const featuredGuides = guides

function detailPath(slug) {
  return `/spots/${slug}`
}
</script>

<template>
  <ImageCarousel />

  <section class="container section">
    <h2>热门露营地推荐</h2>
    <div class="grid cards-4">
      <article v-for="spot in featuredSpots" :key="spot.id" class="card featured-card">
        <img :src="spot.image" :alt="`${spot.name}露营风景`" class="spot-image" loading="lazy" />
        <h3>{{ spot.name }}</h3>
        <p>{{ spot.region }} · 车程{{ spot.driveTime }}</p>
        <p>{{ spot.intro }}</p>
        <div class="card-meta-row featured-meta">
          <a :href="detailPath(spot.slug)" target="_blank" rel="noopener noreferrer">查看详情</a>
          <span class="published">发布于 {{ spot.publishedAt }}</span>
        </div>
      </article>
    </div>
  </section>

  <section class="container section">
    <h2>新手六步走</h2>
    <div class="step-timeline">
      <article class="step-item">
        <div class="step-index">1</div>
        <div class="step-main">
          <div class="step-content">
            <div class="step-head">
              <span class="step-icon">🧭</span>
              <h3><a href="/guides" target="_blank" rel="noopener noreferrer">明确出行画像</a></h3>
            </div>
            <p>先确定是亲子、朋友聚会还是轻徒步露营，再反推车程和营地类型。</p>
          </div>
          <img class="step-thumb" src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=480&q=80" alt="露营路线规划场景" loading="lazy" />
        </div>
      </article>
      <article class="step-item">
        <div class="step-index step-index-label" aria-label="筛选阶段" title="筛选阶段">🔍</div>
        <div class="step-main">
          <div class="step-content">
            <div class="step-head">
              <span class="step-icon">📍</span>
              <h3><a href="/guides" target="_blank" rel="noopener noreferrer">对照攻略做筛选</a></h3>
            </div>
            <p>重点看可过夜、卫生间、补给点、信号、明火规则和天气风险提示。</p>
          </div>
          <img class="step-thumb" src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=480&q=80" alt="山间露营地筛选场景" loading="lazy" />
        </div>
      </article>
      <article class="step-item">
        <div class="step-index">3</div>
        <div class="step-main">
          <div class="step-content">
            <div class="step-head">
              <span class="step-icon">🎒</span>
              <h3><a href="/guides" target="_blank" rel="noopener noreferrer">48小时准备清单</a></h3>
            </div>
            <p>按“装备-食品-应急-交通”四类检查，出发当天再次确认开放状态和路况。</p>
          </div>
          <img class="step-thumb" src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=480&q=80" alt="露营装备打包场景" loading="lazy" />
        </div>
      </article>
      <article class="step-item">
        <div class="step-index step-index-label" aria-label="执行阶段" title="执行阶段">⛺</div>
        <div class="step-main">
          <div class="step-content">
            <div class="step-head">
              <span class="step-icon">⛺</span>
              <h3><a href="/guides" target="_blank" rel="noopener noreferrer">现场搭建与撤营</a></h3>
            </div>
            <p>优先避开风口和低洼地，离场时按无痕露营原则恢复场地并带走垃圾。</p>
          </div>
          <img class="step-thumb" src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=480&q=80" alt="现场搭建帐篷场景" loading="lazy" />
        </div>
      </article>
      <article class="step-item">
        <div class="step-index">5</div>
        <div class="step-main">
          <div class="step-content">
            <div class="step-head">
              <span class="step-icon">🌦️</span>
              <h3><a href="/guides" target="_blank" rel="noopener noreferrer">天气突变应对</a></h3>
            </div>
            <p>遇到雷雨和大风及时撤收天幕，必要时中止露营，避免冒险停留。</p>
          </div>
          <img class="step-thumb" src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=480&q=80" alt="天气变化的山地营地场景" loading="lazy" />
        </div>
      </article>
      <article class="step-item">
        <div class="step-index step-index-label" aria-label="复盘阶段" title="复盘阶段">📝</div>
        <div class="step-main">
          <div class="step-content">
            <div class="step-head">
              <span class="step-icon">📝</span>
              <h3><a href="/guides" target="_blank" rel="noopener noreferrer">复盘提升体验</a></h3>
            </div>
            <p>记录装备缺口和路线问题，为下次露营形成更高效的个人模板。</p>
          </div>
          <img class="step-thumb" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=480&q=80" alt="露营记录与复盘场景" loading="lazy" />
        </div>
      </article>
    </div>
  </section>

  <section class="container section">
    <h2>精选攻略</h2>
    <div class="guide-list">
      <article v-for="guide in featuredGuides" :key="guide.slug" class="guide-row">
        <img class="guide-cover" :src="guide.image" :alt="`${guide.title}配图`" loading="lazy" />
        <div class="guide-body">
          <div class="guide-title-row">
            <span class="guide-icon">{{ guide.icon }}</span>
            <p class="tag guide-tag">{{ guide.tag }}</p>
          </div>
          <h3>{{ guide.title }}</h3>
          <p class="guide-summary">{{ guide.summary }}</p>
          <div class="guide-meta">
            <span>阅读时长：{{ guide.readTime }}</span>
            <span class="published">更新于 {{ guide.updatedAt }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
