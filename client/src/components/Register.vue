<template>
  <v-layout>
    <v-flex xs8 offset-xs2>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <br />
        <div class="pl-4 pr-4 pt-2 pb-4">
          <v-text-field label="Email" v-model="email"></v-text-field><br />
          <v-text-field
            label="Password"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
          <div class="error" v-html="error">
            <br />
          </div>
          <br />
          <v-btn class="cyan" @click="register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      show1: false,
      email: 'abc',
      password: '1234',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
