<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { spots } from '../data/spots'

const route = useRoute()

const spot = computed(() => spots.find((item) => item.slug === route.params.slug))
</script>

<template>
  <section v-if="spot" class="container section">
    <h1>{{ spot.name }}</h1>
    <p>{{ spot.region }} · 车程{{ spot.driveTime }} · 海拔{{ spot.altitude }} · 最佳季节{{ spot.bestSeasons }}</p>

    <div class="detail-grid">
      <article class="card">
        <h3>基础信息</h3>
        <p>营地类型：{{ spot.campType }}</p>
        <p>适合人群：{{ spot.audiences.join('、') }}</p>
        <p>核心亮点：{{ spot.highlights.join('、') }}</p>
      </article>

      <article class="card">
        <h3>到达方式</h3>
        <p>建议自驾前往，使用“{{ spot.name }}”作为导航关键词。</p>
        <p>最后一段路况请出发前查看实时路况和景区通知。</p>
      </article>

      <article class="card">
        <h3>设施与补给</h3>
        <p>可用设施：{{ spot.facilities.join('、') }}</p>
        <p>建议提前准备饮水、应急药品和充电设备。</p>
      </article>

      <article class="card">
        <h3>规则与费用</h3>
        <p>可过夜：{{ spot.overnightAllowed ? '是' : '否' }}</p>
        <p>宠物友好：{{ spot.petFriendly ? '是' : '否' }}</p>
        <p>明火：{{ spot.campfireAllowed ? '允许' : '通常不允许，请以现场规则为准' }}</p>
      </article>

      <article class="card">
        <h3>风险提示</h3>
        <p>关注天气变化、夜间温差和临水安全。</p>
        <p>雨季与大风天气建议取消或调整行程。</p>
      </article>

      <article class="card">
        <h3>装备建议</h3>
        <p>基础装备：帐篷、睡袋、防潮垫、头灯、垃圾袋。</p>
        <p>按海拔加配保暖层、防风绳和备用电源。</p>
      </article>
    </div>

    <p class="updated">信息更新时间：2026-05-31（出发前请二次确认营地开放与收费规则）</p>
    <RouterLink to="/spots">返回露营地列表</RouterLink>
  </section>

  <section v-else class="container section">
    <h1>未找到该露营地</h1>
    <RouterLink to="/spots">返回露营地列表</RouterLink>
  </section>
</template>
