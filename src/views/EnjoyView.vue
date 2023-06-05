<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import EnjoyData from "../assets/json/Enjoy.json";
import CardItem from "../components/CardItem.vue";
import SelectItem from "../components/SelectItem.vue";

const route = useRoute();
const selectedItem = ref("All");
const displayData = ref([]);
const rawData = ref([]);
const enjoyClass = ref([]);
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
      displayData.value = rawData.value.filter((item) => item.Street == newVal);
    }
  },
  { immediate: true }
);

// 切換 router
watch(
  () => route.name,
  (newVal) => {
    setData(newVal);
  }
);

const setData = (path) => {
  displayData.value = EnjoyData.data
    .filter(
      (item) =>
        item.EnjoyClass.split(",").indexOf(path) != -1 && item.CardSw == ""
    )
    .sort(function () {
      return 0.5 - Math.random();
    });
  rawData.value = displayData.value;

  // 下拉選單資料（路名）
  enjoyClass.value = [];
  rawData.value.forEach((item) => enjoyClass.value.push(item.Street));
  enjoyClass.value = [...new Set(enjoyClass.value)];
  sortSelectItem(enjoyClass.value);
};

const sortSelectItem = (array) => {
  array.sort(function compareFunction(a, b) {
    return a.localeCompare(b);
  });
};

onMounted(() => {
  setData(route.name);
});
</script>

<template>
  <div class="pb-36">
    <SelectItem :data="enjoyClass" @select="(val) => (selectedItem = val)" />
    <div class="flex flex-wrap justify-between">
      <div v-for="(item, idx) in displayData" :key="item.ID" class="card flex">
        <CardItem
          :data="item"
          :layout="cardLayout"
          :number="`${idx + 1}/${displayData.length}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: calc((100% - 60px) / 3);
}
</style>
