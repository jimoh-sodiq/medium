<template>
  <section class="w-full py-10 border-b border-gray-200">
    <div class="wrapper flex flex-col gap-y-3">
      <h3 class="uppercase font-medium text-xs flex items-center gap-x-5">
        <span>#</span><span>Trending on medium</span>
      </h3>
      <div
        class="grid gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-10"
      >
        <div class="flex gap-x-5" v-for="n in 6" :key="n">
          <span class="text-3xl text-gray-300 font-bold">0{{ n }}</span>
          <div class="pt-2 flex flex-col gap-y-2 sm:gap-y-1">
            <div class="text-[11px] font-medium flex gap-x-2">
              <span>@</span>
              <span>Barack Obama</span>
            </div>
            <p class="font-bold">
              University of Idaho Murders: Now It Looks Like John “Jack”
              Showalter, Right?
            </p>
            <p class="text-xs text-gray-400">Dec 6 . 1 min read</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
