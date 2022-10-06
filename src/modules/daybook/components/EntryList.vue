<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Search..." v-model="term"/>
    </div>
    <div class="entry-scrollarea">
      <div class="mt-2 d-flex flex-column">
        <button class="btn btn-primary mx-3" @click="toNewEntry">
          <i class="fa fa-plus circle"></i>
          New Entry
        </button>
      </div>
      <EntryItem v-for="entry in entriesByTerm" :key="entry.id" :entry="entry"/>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {mapGetters} from "vuex";

export default {
  name: "EntryList",
  components: {
    EntryItem: defineAsyncComponent(() => import(/* webpackChunkName: "EntryItem" */ "./EntryItem.vue"))
  },
  computed: {
    ...mapGetters("journal", ['getEntriesByTerm']),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    }
  },
  methods: {
    toNewEntry() {
      this.$router.push({name: 'entry', params: {id: 'new'}});
    }
  },
  data() {
    return {
      term: ''
    }
  }
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
