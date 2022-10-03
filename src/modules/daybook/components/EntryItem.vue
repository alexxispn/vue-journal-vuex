<template>
  <div class="entry-container mb-3 pointer p-2" @click="goToEntry">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{getDay}}</span>
      <span class="mx-1 fs-5">{{getMonth}}</span>
      <span class="mx-2 fw-light">{{getYear}}, {{getDayOfWeek}}</span>
    </div>

    <div class="entry-description">
      <p class="text-muted">
        {{ shortText }}
      </p>
    </div>
  </div>
</template>

<script>
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
    getDay() {
      const date = new Date(this.entry.date);
      return date.getDate();
    },
    getMonth() {
      const date = new Date(this.entry.date);
      return months[date.getMonth()];
    },
    getYear() {
      const date = new Date(this.entry.date);
      return date.getFullYear();
    },
    getDayOfWeek() {
      const date = new Date(this.entry.date);
      return days[date.getDay() - 1];
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
