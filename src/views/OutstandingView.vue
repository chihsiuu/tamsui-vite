<script setup>
import { ref, watch, onMounted } from "vue";
import CollectionData from "../assets/json/Collection.json";
import SlideImage from "../components/SlideImage.vue";
import CardItem from "../components/CardItem.vue";
import SelectItem from "../components/SelectItem.vue";

const selectedItem = ref("All");
const displayData = ref([]);
const rawData = ref([]);
const sceneClass = ref([]);
const cardLayout = {
  flexRow: false,
  photoWidth: "100%",
};

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
    if (
      item.Classification != "Recreation_RestArea" &&
      item.Classification != ""
    )
      sceneClass.value.push(item.Classification);
  });
  sceneClass.value = [...new Set(sceneClass.value)];
};

onMounted(() => {
  displayData.value = CollectionData.data;
  rawData.value = displayData.value;
  setData();
});
</script>

<template>
  <div class="pb-36">
    <SelectItem :data="sceneClass" @select="(val) => (selectedItem = val)" />

    <div class="flex flex-wrap justify-between">
      <div
        v-for="(item, idx) in displayData.slice(0, 30)"
        :key="item.ID"
        class="card flex"
      >
        <CardItem
          :data="item"
          :layout="cardLayout"
          :number="`${idx + 1}/${displayData.length}`"
        >
          <template #photo>
            <SlideImage :data="[item.ID]" />
          </template>
          <template #body><span></span></template>
          <template #footer>
            <p class="text-center text-sm font-bold">
              {{ item.Title }}<br />{{ item.Name }}
            </p>
          </template>
        </CardItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: calc((100% - 60px) / 3);
}
</style>
