<template>
  <DbNavbar/>
  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      Loading...
      <h3 class="mt-2">
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </h3>
    </div>
  </div>
  <div v-else class="d-flex">
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
import {mapActions, mapState} from "vuex";

export default {
  name: "DayBookLayout",
  components: {
    DbNavbar: defineAsyncComponent(() => import(/* webpackChunkName: "DbNavbar" */ "../components/DbNavbar.vue")),
    EntryList: defineAsyncComponent(() => import(/* webpackChunkName: "EntryList" */ "../components/EntryList.vue"))
  },
  computed: {
    ...mapState("journal", ["isLoading"])
  },
  methods: {
    ...mapActions("journal", ["loadEntries"]),
  },
  created() {
    this.loadEntries();
  }
}
</script>

<style scoped>
</style>
