<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, Jueves</span>
    </div>
    <div>
      <button class="btn btn-primary">
        Upload Image
        <i class="fas fa-cloud-upload-alt"></i>
      </button>
      <button class="btn btn-outline-danger mx-2">
        Delete
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="What happened today?" ></textarea>
  </div>
  <SaveButton :icon="'fas fa-save'" />
  <img src="https://w0.peakpx.com/wallpaper/807/34/HD-wallpaper-kingdom-hearts-358-2-358-2-358-2-days-axel-clocktower-icecream-kingdom-hearts-roxas-sea-salt-twilight-town-xion.jpg" alt="kh" class="img-thumbnail">
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "EntryView",
  components: {
    SaveButton: defineAsyncComponent(() => import(/* webpackChunkName: "SaveButton" */ "../components/FabButton.vue"))
  }
}
</script>

<style lang="scss" scoped>
textarea{
  font-size: 1.2rem;
  border: none;
  height: 100%;

  &:focus{
    outline: none;
  }
}
img{
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}

</style>
