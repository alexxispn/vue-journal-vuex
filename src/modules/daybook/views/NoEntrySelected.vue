<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">
      Select an entry
    </h1>
  </div>

  <SaveButton @on:click="toNewEntry"/>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "NoEntrySelected",
  components: {
    SaveButton: defineAsyncComponent(() => import(/* webpackChunkName: "SaveButton" */ "../components/FabButton.vue"))
  },
  methods: {
    toNewEntry() {
      this.$router.push({name: "entry", params: {id: "new"}});
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}

</style>
