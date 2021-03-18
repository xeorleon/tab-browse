<template>
  <v-app id="app">
    <main>
      <page-header />
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import PageHeader from './components/Header.vue'
export default {
  name: 'App',

  components: {
    PageHeader
  },

  data: () => ({
    //
  })
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.input-group--text-field input {
  border-bottom: 1px solid black;
}
</style>
