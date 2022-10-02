<template>
  <DbNavbar/>

  <div class="d-flex">
    <div class="col-4">
      <EntryList/>
    </div>
    <div class="col">
      <RouterView/>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "DayBookLayout",
  components: {
    DbNavbar: defineAsyncComponent(() => import(/* webpackChunkName: "DbNavbar" */ "../components/DbNavbar.vue")),
    EntryList: defineAsyncComponent(() => import(/* webpackChunkName: "EntryList" */ "../components/EntryList.vue"))
  }

}
</script>

<style scoped>

</style>
