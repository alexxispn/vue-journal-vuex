<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Search...">
    </div>
    <div class="entry-scrollarea">
      <EntryItem v-for="entry in 100" :key="entry.id"/>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "EntryList",
  components: {
    EntryItem: defineAsyncComponent(() => import(/* webpackChunkName: "EntryItem" */ "./EntryItem.vue"))
  },
}
</script>

<style lang="scss" scoped>

.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 56px - 50px);
  overflow-y: scroll;
}

</style>
