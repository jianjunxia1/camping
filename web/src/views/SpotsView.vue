<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { spots } from '../data/spots'

const route = useRoute()

const keyword = ref('')
const driveTime = ref('全部')
const facility = ref('全部')
const audience = ref('全部')
const overnight = ref('全部')

watch(
  () => route.query.q,
  (value) => {
    keyword.value = typeof value === 'string' ? value : ''
  },
  { immediate: true }
)

const driveOptions = ['全部', '1小时内', '1-2小时', '2-3小时']
const facilityOptions = ['全部', '卫生间', '停车场', '可租装备', '有补给']
const audienceOptions = ['全部', '亲子', '宠物友好', '新手友好', '摄影']

const filteredSpots = computed(() => {
  return spots.filter((spot) => {
    const matchKeyword =
      keyword.value.trim() === '' ||
      spot.name.includes(keyword.value.trim()) ||
      spot.region.includes(keyword.value.trim())
    const matchDrive = driveTime.value === '全部' || spot.driveTime === driveTime.value
    const matchFacility = facility.value === '全部' || spot.facilities.includes(facility.value)
    const matchAudience = audience.value === '全部' || spot.audiences.includes(audience.value)
    const matchOvernight =
      overnight.value === '全部' ||
      (overnight.value === '可过夜' && spot.overnightAllowed) ||
      (overnight.value === '不可过夜' && !spot.overnightAllowed)

    return matchKeyword && matchDrive && matchFacility && matchAudience && matchOvernight
  })
})

function detailPath(slug) {
  return `/spots/${slug}`
}
</script>

<template>
  <section class="container section">
    <h1>露营地点</h1>
    <p>按车程、设施和人群标签筛选你想去的营地。</p>

    <div class="filter-panel">
      <input v-model="keyword" placeholder="搜索地点名或区域" />
      <select v-model="driveTime">
        <option v-for="option in driveOptions" :key="option">{{ option }}</option>
      </select>
      <select v-model="facility">
        <option v-for="option in facilityOptions" :key="option">{{ option }}</option>
      </select>
      <select v-model="audience">
        <option v-for="option in audienceOptions" :key="option">{{ option }}</option>
      </select>
      <select v-model="overnight">
        <option>全部</option>
        <option>可过夜</option>
        <option>不可过夜</option>
      </select>
    </div>

    <p class="result-info">共找到 {{ filteredSpots.length }} 个露营地点</p>

    <div class="grid cards-2">
      <article v-for="spot in filteredSpots" :key="spot.id" class="card">
        <img :src="spot.image" :alt="`${spot.name}营地风景`" class="spot-image" loading="lazy" />
        <h3>{{ spot.name }}</h3>
        <p>{{ spot.region }} · 车程{{ spot.driveTime }} · 海拔{{ spot.altitude }}</p>
        <p>最佳季节：{{ spot.bestSeasons }}</p>
        <p>{{ spot.intro }}</p>
        <div class="tags">
          <span v-for="item in spot.highlights" :key="item" class="tag">{{ item }}</span>
        </div>
        <div class="card-meta-row">
          <a :href="detailPath(spot.slug)" target="_blank" rel="noopener noreferrer">进入详细攻略</a>
          <span class="published">发布于 {{ spot.publishedAt }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
