<template>
  <div class="entry-container mb-3 pointer p-2" @click="goEntryView">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      <p class="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci, alias, amet animi atque autem
        consectetur consequuntur cumque cupiditate delectus deserunt dignissimos doloremque dolorum eius enim eos esse
        excepturi expedita explicabo facilis fuga fugiat hic id illum impedit in incidunt inventore ipsa ipsum iste iure
        iusto laboriosam laborum laudantium libero magnam magni maxime minima minus molestiae molestias mollitia nam
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryItem",
  methods: {
    goEntryView() {
      this.$router.push({ name: "db-entry", params: { id: "1" } });
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
