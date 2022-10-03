<template>
  <div class="entry-container mb-3 pointer p-2" @click="goToEntry">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{day}}</span>
      <span class="mx-1 fs-5">{{month}}</span>
      <span class="mx-2 fw-light">{{year}}, {{weekday}}</span>
    </div>

    <div class="entry-description">
      <p class="text-muted">
        {{ shortText }}
      </p>
    </div>
  </div>
</template>

<script>
import getFullDate from "@/modules/daybook/helpers/getFullDate";

export default {
  name: "EntryItem",
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  computed: {
    shortText() {
      return (this.entry.text.length > 130)
          ? this.entry.text.substr(0, 130) + '...'
          : this.entry.text;
    },
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
    }
  },
  methods: {
    goToEntry() {
      this.$router.push({
        name: 'db-entry',
        params: {
          id: this.entry.id
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: lighten(grey, 45%);
    transition: all 0.3s ease-in-out;
  }

  .entry-title {
    .text-success {
      font-size: 0.8rem;
    }
  }
}
</style>
