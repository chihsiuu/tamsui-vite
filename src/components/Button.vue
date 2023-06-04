<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    class="mb-4 flex items-center justify-between rounded-md bg-[#56595c] px-4 py-2 font-bold text-white hover:bg-[#444648]"
  >
    {{ msg }}
  </button>
</template>
