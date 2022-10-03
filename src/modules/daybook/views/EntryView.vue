<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-5 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-5">{{ month }}</span>
        <span class="mx-2 fw-light">{{ year }}, {{ weekday }}</span>
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
      <textarea v-model="entry.text" placeholder="What happened today?"></textarea>
    </div>
    <img
        src="https://w0.peakpx.com/wallpaper/807/34/HD-wallpaper-kingdom-hearts-358-2-358-2-358-2-days-axel-clocktower-icecream-kingdom-hearts-roxas-sea-salt-twilight-town-xion.jpg"
        alt="kh" class="img-thumbnail">
  </template>
  <FabButton :icon="'fas fa-save'"/>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {mapGetters} from "vuex";
import getFullDate from "@/modules/daybook/helpers/getFullDate";

export default {
  name: "EntryView",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    FabButton: defineAsyncComponent(() => import(/* webpackChunkName: "SaveButton" */ "../components/FabButton.vue"))
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
    day() {
      const {day} = getFullDate(this.entry.date);
      return day;
    },
    month() {
      const {month} = getFullDate(this.entry.date);
      return month;
    },
    year() {
      const {year} = getFullDate(this.entry.date);
      return year;
    },
    weekday() {
      const {weekday} = getFullDate(this.entry.date);
      return weekday;
    },
  },
  data() {
    return {
      entry: null
    }
  },
  methods: {
    loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) return this.$router.push({name: 'db-no-entry'});
      this.entry = entry;
    }
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 1.2rem;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

</style>
