<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand" @click="goNoEntry">
      <img src="@/assets/logo.png" alt="Vue Logo" height="24" class="d-inline-block align-text-top mx-2">
      Daybook
    </a>

    <div class="d-flex">
      <button class="btn btn-outline-info mx-2" @click="goHome">
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>

</template>

<script>
export default {
  name: "DaybookNavbar",
  methods: {
    goNoEntry() {
      this.$router.push({ name: "no-entry" });
    },
    goHome() {
      this.$router.push({ name: "home" });
    },
  }
}
</script>

<style scoped>

</style>
