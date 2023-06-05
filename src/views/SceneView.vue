<script setup>
import { ref, watch, onMounted } from "vue";
import SceneData from "../assets/json/Scene.json";
import CardItem from "../components/CardItem.vue";
import SelectItem from "../components/SelectItem.vue";
import SvgIcon from "../components/SvgIcon.vue";
import Modal from "../components/Modal.vue";
import Button from "../components/Button.vue";

const selectedItem = ref("All");
const displayData = ref([]);
const rawData = ref([]);
const sceneClass = ref([]);
const cardLayout = {
  flexRow: true,
  photoWidth: "50%",
};
const showModal = ref(false);

// 切換下拉選單
watch(
  () => selectedItem.value,
  (newVal) => {
    if (newVal == "All") {
      displayData.value = rawData.value;
    } else {
      displayData.value = rawData.value.filter(
        (item) => item.Classification == newVal
      );
    }
  },
  { immediate: true }
);

const setData = () => {
  // 下拉選單資料（類別）
  rawData.value.forEach((item) => {
    if (item.Classification) sceneClass.value.push(item.Classification);
  });
  sceneClass.value = [...new Set(sceneClass.value)];
  sortSelectItem(sceneClass.value);
};

const sortSelectItem = (array) => {
  array.sort(function compareFunction(a, b) {
    return a.localeCompare(b);
  });
};

onMounted(() => {
  displayData.value = SceneData.data
    .filter((item) => item._Status_ == "3" || item._Status_ == "4")
    .sort(function () {
      return 0.5 - Math.random();
    });
  rawData.value = displayData.value;
  setData();
});
</script>

<template>
  <div class="pb-36">
    <div class="flex flex-row justify-between">
      <SelectItem :data="sceneClass" @select="(val) => (selectedItem = val)" />
      <Button @click="showModal = true" :msg="'推薦景點'" />
    </div>

    <template v-for="(item, idx) in displayData" :key="item.ID">
      <CardItem
        :data="item"
        :layout="cardLayout"
        :number="`${idx + 1}/${displayData.length}`"
      >
        <template #classIcon>
          <span class="text-sm">
            <SvgIcon
              class="inline-block align-text-top"
              :name="`icon_class${sceneClass.indexOf(item.Classification) + 1}`"
              size="20"
              color="#56595C"
            />
            {{ item.Classification }}
          </span>
        </template>
        <template #footer>
          <div v-if="item.Line" class="mt-5 px-4">
            <a
              v-for="line in item.Line.split(',').slice(0, -1)"
              :href="`/tourist-guide/${line}`"
              class="me-4 inline-block"
              ><img
                class="h-[50px]"
                :alt="`路線${line}`"
                :src="$url.image(`scene_r${line}.png`)"
            /></a>
          </div>
        </template>
      </CardItem>
    </template>

    <Transition name="fade">
      <Modal v-show="showModal" @close-modal="showModal = false" />
    </Transition>
  </div>
</template>
