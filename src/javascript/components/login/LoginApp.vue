<template>
  <div id="apps" class="login">
    <p class="error">{{ datas.data ? datas.data.error : "" }}</p>
    <v-card width="400" class="mx-auto mt-5" >
      <v-card-title>
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Email"
          prepend-icon="mdi-account-circle"
          v-model="email"
        ></v-text-field>
        <v-text-field
          type="password"
          label="Password"
          prepend-icon="mdi-lock"
          v-model="password"
        ></v-text-field>
        <v-card-actions>
          <v-spacer> </v-spacer>
          <v-btn color="success" @click="connect()" > Login </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      data: [],
    };
  },
  computed: {
    datas() {
      return this.data;
    },
  },
  methods: {
    ...mapActions({
      setUser: "setUser",
    }),
    async connect() {
      console.log(this.email, this.password);
      if (this.password && this.email) {
        const json = { email: this.email, password: this.password };
        const res = await axios.post(
          this.$store.state.url+"v1/users/login",
          json,
          {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json",
            },
          }
        );

        console.log("res", res);
        this.data = res;
        if (this.data.data.id) {
          this.setUser(this.data.data);
          this.$cookies.set("user", JSON.stringify(this.data.data));
        }
      } else {
        console("not send");
      }
    },
    setStore() {
      // store.actions.setUser(this.data.data)
    },
  },
};
</script>

<style>
.login {
  text-align: center;
}
</style>