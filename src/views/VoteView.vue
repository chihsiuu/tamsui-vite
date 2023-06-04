<script setup>
import { ref, watch, onMounted } from "vue";
import SceneData from "../assets/json/Scene.json";
import CardItem from "../components/CardItem.vue";
import SelectItem from "../components/SelectItem.vue";

const selectedItem = ref("All");
const displayData = ref([]);
const rawData = ref([]);
const sceneClass = ref([]);
const cardLayout = {
  flexRow: true,
  photoWidth: "60%",
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

const getSelect = (val) => {
  selectedItem.value = val;
};

onMounted(() => {
  displayData.value = SceneData.data.filter((item) => item.PICID);
  rawData.value = displayData.value;
  setData();
});
</script>
<template>
  <div class="pb-36">
    <SelectItem :data="sceneClass" @select="getSelect" />
    <template v-for="(item, idx) in displayData" :key="item.ID">
      <CardItem
        :data="item"
        :layout="cardLayout"
        :number="`${idx + 1}/${displayData.length}`"
      >
        <template #title>
          <div class="flex">
            <h2 class="text-2xl font-bold">
              {{
                $filters.stripHTML(
                  item.GroupTitle || item.TitleAlias || item.Title
                )
              }}
              <small
                class="f ms-1 rounded-md border border-slate-500 px-1 text-xs"
                >{{ item.PICID }}</small
              >
            </h2>
          </div>
        </template>
        <template #footer>
          <div
            class="mt-6 flex items-center justify-between px-4"
            :style="`margin-left:${cardLayout.photoWidth}`"
          >
            <strong class="vote__num text-[#cd5c78]">1,234</strong>
            <div class="flex">
              <a
                class="w-6"
                :href="`https://facebook.com/sharer/sharer.php?u=https://2021tamsui.tw/vote/${item.ID}/f`"
                ><img
                  :src="$url.image('icon_fb.svg')"
                  alt="分享到Facebook" /></a
              ><a
                class="ms-2 w-6"
                :href="`https://social-plugins.line.me/lineit/share?url=https://2021tamsui.tw/vote/${item.ID}/l`"
                ><img :src="$url.image('icon_line.svg')" alt="分享到Line"
              /></a>
            </div>
          </div>
        </template>
      </CardItem>
    </template>
  </div>
</template>

<style scoped>
.vote__num {
  padding-left: 115px;
  font-size: 2.5rem;
  line-height: 40px;
  min-width: 180px;
  background: url(data:image/png;base64,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)
    no-repeat;
  background-position: 0 -6px;
  background-size: 110px;
}
</style>
