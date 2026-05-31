<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80',
    alt: '湖畔露营日落景观'
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2200&q=80',
    alt: '山谷森林中的露营帐篷'
  },
  {
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=80',
    alt: '草地露营与远山景色'
  },
  {
    src: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=2200&q=80',
    alt: '夜幕露营与篝火氛围'
  }
]

const activeIndex = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % photos.length
  }, 3600)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="carousel-full">
    <div class="carousel-single">
      <figure v-for="(photo, idx) in photos" :key="photo.src" class="carousel-pane" :class="{ active: idx === activeIndex }">
        <img :src="photo.src" :alt="photo.alt" loading="lazy" />
      </figure>
    </div>
  </section>
</template>
