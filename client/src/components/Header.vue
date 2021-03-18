<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4"
      ><span class="home" @click="navigateTo({ name: 'root' })"
        >Tab Browser</span
      ></v-toolbar-title
    >

    <!-- Todo: Implement Me  -->
    <!-- <v-toolbar-items>
        <v-btn flat>Browse</v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        @click="navigateTo({ name: 'login' })"
        v-if="!$store.state.isUserLoggedIn"
      >
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark to="register">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.v-btn--has-bg {
  background-color: transparent !important;
  border: 0px !important;
  box-shadow: none !important;
}
.home {
  cursor: pointer;
}
.home:hover {
  color: #e9e;
}
</style>
