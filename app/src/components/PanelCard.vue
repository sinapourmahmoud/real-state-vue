<template>
  <div
    class="p-2 bg-white rounded-md flex items-start justify-between gap-3 my-3"
    @click="addPage"
  >
    <div class="rounded-lg w-[10rem] h-full">
      <img
        src="./../assets/contact.png"
        alt=""
        class="w-[100%] h-[100%] object-cover rounded-lg"
      />
    </div>
    <div class="">
      <h4 class="text-lg font-medium text-gray-700"><a href="#">Title</a></h4>
      <div class="flex items-center gap-2">
        <div class="bg-violet-200 px-1 rounded-lg">
          <span class="text-xs">5 Bedroom</span>
        </div>
        <div class="bg-violet-200 px-1 rounded-lg">
          <span class="text-xs">5 Bedroom</span>
        </div>
        <div class="bg-violet-200 px-1 rounded-lg">
          <span class="text-xs">5 Bath</span>
        </div>
      </div>
      <div>
        <p class="text-sm text-gray-500 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Moll
        </p>
      </div>
      <button
        class="mt-5 py-1 px-3 rounded-lg w-full text-sm bg-violet-600 text-white font-normal"
      >
        Buy Now
      </button>
    </div>
    <div class="">
      <a href="#" class="text-lg"><i class="bx bx-x"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addPage() {
      this.$router.push("/payingpage");
    },
  },
};
</script>

<style></style>
