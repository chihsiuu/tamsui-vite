<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDeviceStore } from '../stores/device'

const route = useRoute()
const device = useDeviceStore()
const hoverItem = ref('')

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
    required: true
  },
  size: {
    type: String,
    default: ''
  },
  gif: {
    type: Boolean,
    default: false
  }
})

const isItemActive = (item) => {
  if (device.deviceMode !== 'deskTop' && props.gif) {
    return `${getFileName(item.default)}.gif`
  }
  if (route.name == item.name || hoverItem.value.name == item.name) {
    return item.active
  } else {
    return item.default
  }
}

const getFileName = (val) => {
  let filename = val.split('\\').pop().split('/').pop()
  filename = filename.substring(0, filename.lastIndexOf('.'))
  return filename
}
</script>

<template>
  <div @mouseenter="hoverItem = data" @mouseleave="hoverItem = ''">
    <img :alt="data.alt" :src="$url.image(isItemActive(data))" :class="size" />
  </div>
</template>
