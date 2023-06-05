<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const props = defineProps({
  data: {
    type: Array,
    default: [],
    required: true,
  },
});

const options = {
  rewind: true,
  heightRatio: 0.75,
  arrows: props.data.length > 1,
};
</script>
<template>
  <Splide :options="options">
    <SplideSlide v-for="item in props.data" :key="item.ID">
      <img
        class="inline h-full w-full rounded-lg object-cover"
        v-lazy="`https://picsum.photos/400/300?random=${item.ID || item}`"
        :alt="item.ID"
      />
    </SplideSlide>
  </Splide>
</template>
