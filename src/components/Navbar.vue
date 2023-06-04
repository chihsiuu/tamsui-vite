<script setup>
import { computed } from 'vue'
import { useDeviceStore } from '../stores/device'
import NavbarItem from './NavbarItem.vue'
import NavData from '../assets/json/Nav.json'

const device = useDeviceStore()
const displayData = computed(() => {
  if (device.deviceMode && device.deviceMode !== 'deskTop') {
    let array = [...NavData.header]
    array.splice(2, 0, array[5])
    array.splice(6, 2)
    return array
  } else {
    return NavData.header
  }
})
</script>

<template>
  <ul class="flex flex-wrap justify-center py-[18px]">
    <li v-for="(navItem, idx) in displayData">
      <RouterLink :to="navItem.name" :key="navItem.id">
        <NavbarItem
          :data="navItem"
          :size="'h-[60px] 2xl:h-[68px]'"
          :gif="true"
          class="mx-[10px] inline-block"
        />
      </RouterLink>
    </li>
  </ul>
</template>
