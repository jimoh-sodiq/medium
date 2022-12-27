<template>
  <main class="">
    <div class="wrapper py-10 flex gap-x-10 relative">
      <div class="w-[65%] flex flex-col gap-y-10">
        <div
          class="grid grid-flow-col-dense h-fit w-full"
          v-for="n in 30"
          :key="n"
        >
          <div class="flex flex-col w-full">
            <div class="text-[11px] font-medium flex gap-x-2">
              <span>@</span>
              <span>Scott Belsky</span>
            </div>
            <p class="font-bold text-lg mt-1">
              Creating in The Era of Creative Confidence
            </p>
            <p class="text-gray-400">
              It’s remarkable to watch a five-year-old draw, void of any anxiety
              about what the world will think. We all start our lives
              creatively…
            </p>
            <p class="text-xs text-gray-400 mt-1">Dec 6 . 1 min read</p>
          </div>
          <div class="h-full w-44 bg-red-400">d</div>
        </div>
      </div>
      <div class="w-[35%]">
        <div class="sticky top-[100px]">
          <h3 class="text-xs font-bold">
            DISCOVER MORE OF WHAT MATTERS TO YOU
          </h3>
          <div class="mt-2 flex flex-wrap gap-2">
            <span
              v-for="n in 11"
              :key="n"
              class="ring-1 ring-gray-300 rounded-sm text-xs text-gray-400 px-3 py-2"
              >Programming</span
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
