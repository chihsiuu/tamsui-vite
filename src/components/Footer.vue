<script setup>
import { ref } from 'vue'
import NavbarItem from './NavbarItem.vue'
import NavData from '../assets/json/Nav.json'
import CoOrganiser from '../assets/json/co-organiser.json'

const counter = ref(0)
setInterval(() => {
  counter.value > CoOrganiser.data.length ? (counter.value = 0) : counter.value++
}, 5000)
</script>

<template>
  <footer class="z-20 w-screen bg-[#00a0b0] text-slate-50">
    <ul class="flex flex-wrap justify-center py-1 lg:py-2">
      <li v-for="navItem in NavData.footer" :key="navItem.id">
        <RouterLink :to="navItem.name" :key="navItem.id">
          <NavbarItem
            :data="navItem"
            :size="'h-[40px] lg:h-[50px]'"
            class="mx-0.5 md:mx-1 lg:mx-2"
          />
        </RouterLink>
      </li>
    </ul>
    <div class="flex flex-col items-center bg-[#00589b] py-2">
      <ul class="mb-1 text-sm">
        <li class="mx-3 inline-block font-bold">主辦單位：新北市淡水區公所</li>
        <li class="mx-3 inline-block font-bold">承辦單位：財團法人慈暉文教基金會</li>
        <li class="mx-3 inline-block w-[200px] font-bold">
          協辦單位：<template v-for="(item, idx) in CoOrganiser.data" :key="item.ID">
            <Transition name="toggle">
              <span v-if="idx == counter" class="absolute">{{ item.Name }}</span>
            </Transition>
          </template>
        </li>
      </ul>
      <span class="text-xs">©淡水區公所、財團法人慈暉文教基金會版權所有</span>
    </div>

    <svg
      class="editorial"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 
          58-10 88-10s
          58 10 88 10 
          58-10 88-10 
          58 10 88 10
          v44h-352z"
        />
      </defs>
      <g class="wave">
        <use xlink:href="#gentle-wave" x="50" y="0" fill="#00a0b0" />
      </g>
    </svg>
  </footer>
</template>
