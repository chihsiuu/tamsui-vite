<template>
  <div
    class="fixed bottom-0 left-0 right-0 top-0 z-30 grid place-items-center bg-neutral-900/60"
    @click="$emit('close-modal')"
  >
    <div class="w-[800px] rounded-2xl bg-[#fffbeb]" @click.stop>
      <div
        class="relative grid h-[140px] place-items-center rounded-tl-2xl rounded-tr-2xl bg-[url('src/assets/images/bg_modal_head.png')] bg-cover"
      >
        <h5
          class="h-[54px] w-[300px] bg-[url('src/assets/images/img_modal_title.png')] bg-contain bg-center bg-no-repeat"
        ></h5>
        <div
          class="close absolute cursor-pointer"
          @click="$emit('close-modal')"
        ></div>
      </div>
      <div class="p-[50px] text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam quae
        fuga minus aliquam exercitationem impedit, voluptatibus natus cum
        aperiam omnis harum, dolores tempora facere perferendis! Sunt officiis
        delectus odio.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.close {
  $size: 30px;
  height: $size;
  width: $size;
  top: 20px;
  right: 20px;
  opacity: 1;
}
.close:before,
.close:after {
  $width: 32px;
  $height: 5.3px;
  transform: rotate(-45deg);
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: calc($height/2);
  margin-left: calc($width/2);
  display: block;
  height: $height;
  width: $width;
  background-color: #56595c;
  border-radius: 4px;
  transition: all 0.25s ease-out;
}
.close:after {
  transform: rotate(-135deg);
}
</style>
