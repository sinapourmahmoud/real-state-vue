<template>
  <div
    @click="changePage"
    class="p-1 bg-white transition-all duration-300 shadow-md hover:shadow-lg rounded-md my-3"
  >
    <div class="w-full h-40 rounded-md relative">
      <img
        src="./../assets/jonathan-roger-LY1eyQMFeyo-unsplash.jpg"
        class="rounded-md w-full h-full object-cover"
        alt=""
      />
      <div
        class="absolute w-[100%] h-[100%] z-10 top-0 left-0 rounded-md flex flex-col p-3 justify-between"
      >
        <div class="flex items-center justify-between">
          <div
            class="w-[2rem] h-[2rem] bg flex items-center justify-center rounded-full bg-bluregray"
          >
            <a href="#" class="text-sm text-white"
              ><i class="bx bx-heart"></i
            ></a>
          </div>
          <div
            class="w-[3rem] h-[2.5rem] bg flex items-center justify-center rounded-xl bg-bluregray"
          >
            <a href="#" class="text-white text-sm flex gap-1 items-center"
              ><i class="bx bxs-star"></i> 4.5</a
            >
          </div>
        </div>
        <div class="flex justify-center">
          <div
            class="flex items-center gap-1 bg-bluregray h-5 min-w-16 px-2 rounded-lg"
          >
            <div
              class="bg-gray-100 w-1.5 h-1.5 rounded-full cursor-pointer"
            ></div>
            <div class="bg-white w-2 h-2 rounded-full cursor-pointer"></div>
            <div
              class="bg-gray-100 w-1.5 h-1.5 rounded-full cursor-pointer"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="my-3 text-lg font-semibold text-gray-800">
        <a href="#">Great and big house</a>
      </h3>
      <div class="flex items-center justify-between">
        <small class="text-gray-400 font-light"
          >1403,Jeferson ST,Trumb All</small
        >
        <p class="text-lg font-semibold">
          $15500 <span class="text-gray-400 text-xs font-light">total</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changePage() {
      this.$router.push("/product/8");
    },
  },
};
</script>

<style></style>
