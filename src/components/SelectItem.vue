<script setup>
import { ref, computed } from "vue";
import SvgIcon from "../components/SvgIcon.vue";

defineProps({
  data: {
    type: Array,
    default: [],
    required: true,
  },
});
const emit = defineEmits(["select"]);
const showToggle = ref(false);
const defaultClass = ref("All");

const changeClass = (item) => {
  showToggle.value = false;
  defaultClass.value = item;
  emit("select", defaultClass.value);
};
</script>
<template>
  <ul class="mb-4 w-[167px] font-bold text-white">
    <li @click="showToggle = !showToggle">
      <button
        class="flex w-full items-center justify-between rounded-md bg-[#cd5c78] px-4 py-2 hover:bg-[#c43f60]"
      >
        <span>{{ defaultClass }}</span>
        <SvgIcon name="icon_arrow" size="18" color="#FFFFFF" />
      </button>
    </li>

    <Transition name="toggle">
      <li v-if="showToggle" class="relative z-10">
        <ul class="absolute top-1 w-[167px] rounded-md bg-[#cd5c78]">
          <li
            v-if="defaultClass != 'All'"
            @click="changeClass('All')"
            class="px-4 py-1.5 hover:bg-[#c43f60]"
          >
            All
          </li>
          <li
            v-for="item in data"
            @click="changeClass(item)"
            class="px-4 py-1.5 hover:bg-[#c43f60]"
          >
            {{ item }}
          </li>
        </ul>
      </li>
    </Transition>
  </ul>
</template>

<style>
.arrow {
  width: 18px;
  height: 18px;
  fill: #fff;
  transition: all 0.3s ease-out;
}
</style>
