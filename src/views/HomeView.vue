<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary </button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary </button>
    <button @click="goToDaybook" class="btn btn-success">Success</button>
    <button @click="goToDaybook" class="btn btn-danger">Danger</button>
    <button @click="goToDaybook" class="btn btn-warning">Warning</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'daybook' })
    }
  },
}
</script>
