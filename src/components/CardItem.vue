<script setup>
import SlideImage from "../components/SlideImage.vue";
import { ref, onMounted, computed } from "vue";
import { useDeviceStore } from "../stores/device";

const device = useDeviceStore();
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
    required: true,
  },
  layout: {
    type: Object,
    default: () => ({}),
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});
const photoEl = ref();
const titleEl = ref();
const contentEl = ref();
const desEl = ref();
const infoEl = ref();
const contentElHeight = ref("");
const contentElMaxHeight = ref("800");
const isReadmore = ref(false);
const isCollapsed = ref(false);

const moreToggle = () => {
  isCollapsed.value = !isCollapsed.value;
};

const flexRow = computed(() => {
  return device.deviceMode == "deskTop" ? props.layout.flexRow : false;
});

const photoWidth = computed(() => {
  return device.deviceMode == "deskTop" ? props.layout.photoWidth : "100%";
});

const heightHandler = computed(() => {
  return isCollapsed.value ? contentElHeight.value : contentElMaxHeight.value;
});

onMounted(() => {
  contentElHeight.value =
    photoEl.value.offsetHeight -
    (titleEl.value?.offsetHeight + infoEl.value?.offsetHeight);
  if (desEl.value?.offsetHeight > contentElHeight.value - 28) {
    isReadmore.value = true;
    isCollapsed.value = true;
    contentElHeight.value = contentElHeight.value - 80;
  }
});
</script>

<template>
  <div class="mb-6 w-full rounded-xl bg-[#f2e48e] px-2 py-6">
    <!-- Card Header -->
    <slot name="header"></slot>

    <div class="flex flex-col" :class="[flexRow && 'lg:flex-row']">
      <!-- Card Photo -->
      <div
        ref="photoEl"
        class="mb-4 shrink-0 self-start px-4"
        :class="[flexRow && 'lg:mb-0']"
        :style="`width:${photoWidth}`"
      >
        <slot name="photo">
          <SlideImage :data="props.data.Imgs" />
        </slot>
      </div>
      <!-- Card Body -->
      <div class="flex flex-col px-4">
        <slot name="body">
          <div ref="titleEl" class="mb-4">
            <slot name="title">
              <div class="flex justify-between">
                <h2 class="text-2xl font-bold">{{ props.data.Title }}</h2>
                <small>{{ props.number }}</small>
              </div>
            </slot>
            <slot name="classIcon"> </slot>
          </div>
          <div ref="contentEl" class="mb-4 grow">
            <p
              ref="desEl"
              class="overflow-hidden transition-all duration-500 ease-in"
              :style="`max-height: ${heightHandler}px;`"
            >
              {{ $filters.stripHTML(data.Des) }}
            </p>
            <div
              v-if="isReadmore"
              @click="moreToggle"
              :class="[
                'relative mt-3 rounded p-1.5 text-center',
                'bg-[#e0cf7c]',
                'before:transition-all before:delay-100 before:duration-300 before:ease-in',
                'before:opacity-1 before:bg-gradient-to-t before:from-[#f2e48e] before:to-[#f2e48e]/10',
                'before:contentEl-[\'\'] before:absolute before:-inset-1 before:block before:-translate-y-[53px]',
                !isCollapsed && 'before:opacity-0',
              ]"
              class="pointer"
            >
              閱讀更多
            </div>
          </div>
          <ul ref="infoEl" class="text-sm">
            <li>地址：{{ data.Address }}</li>
            <li v-if="data.TEL">電話：{{ data.TEL }}</li>
            <li v-else-if="data.Phone">電話：{{ data.Phone }}</li>
            <li v-if="data.NickNameByUser">
              景點推薦人：{{ data.NickNameByUser }}
            </li>
          </ul>
        </slot>
      </div>
    </div>

    <!-- Card Footer -->
    <slot name="footer"></slot>
  </div>
</template>
