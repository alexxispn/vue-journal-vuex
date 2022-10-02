<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand" @click="goHome">
      <img src="@/assets/logo.png" alt="Vue Logo" height="24" class="d-inline-block align-text-top mx-2">
      Daybook
    </a>

    <div class="d-flex">
      <button class="btn btn-outline-info mx-2">
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>

</template>

<script>
export default {
  name: "DaybookNavbar",
  methods: {
    goHome() {
      this.$router.push({ name: "db-no-entry" });
    }
  }
}
</script>

<style scoped>

</style>
