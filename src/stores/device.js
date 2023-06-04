import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('device', () => {
  const deviceMode = ref('')
  const resizeDevice = () => {
    if (window.innerWidth >= 960) {
      deviceMode.value = 'deskTop'
    } else if (window.innerWidth < 960 && window.innerWidth >= 768) {
      deviceMode.value = 'pad'
    } else {
      deviceMode.value = 'mobile'
    }
  }
  return { deviceMode, resizeDevice }
})
