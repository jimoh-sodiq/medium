<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";

const random = () => {
  return Math.floor(Math.random() * 20 + 1);
};

onMounted(() => {
  gsap.fromTo(
    ".letterM",
    {
      opacity: "random(0, 1, 1)",
      duration: "random(1,3,1)",
      delay: "random(1,7,1)",
      stagger: { repeat: -1, yoyo: true },
    },
    {
      opacity: "random(0, 1, 1)",
      duration: "random(1,3,1)",
      delay: "random(1,7,1)",
      stagger: { repeat: -1, yoyo: true },
    }
  );
});
</script>

<template>
  <div
    class="bg-myellow overflow-hidden relative min-h-[calc(50vh-80px)] border-b-[1.5px] border-black"
  >
    <div class="wrapper h-full w-full">
      <div class="py-20 flex flex-col gap-y-8 justify-between h-full w-full">
        <h1 class="font-medium text-8xl font-serif">Stay curious.</h1>
        <p class="text-2xl max-w-[80%] md:max-w-[40%]">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button
          class="text-white outline-none bg-black w-fit whitespace-nowrap px-10 py-2 rounded-full text-lg font-sans hover:brightness-95"
        >
          Start reading
        </button>
      </div>
      <div
        class="hidden md:block overflow-hidden absolute py-3 text-right pr-2 text-2xl top-0 right-0 h-full flex-wrap"
      >
        <p class="justify-end flex gap-x-2" v-for="line in 12" :key="line">
          <span
            v-for="(m, index) in random()"
            :key="index + m"
            class="h-fit letterM select-none"
            >M</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
