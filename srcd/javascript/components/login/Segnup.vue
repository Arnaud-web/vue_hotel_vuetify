<template>
  <v-container fluid>
    <v-card width="400" class="mx-auto mt-5" >
      <v-card-title>
        <h2>Signup</h2>
      </v-card-title>
      <v-card-text>
        <v-row align="center">
      <v-col cols="6">
        <v-subheader>
          Type de Compte
        </v-subheader>
      </v-col>

      <v-col cols="6">
        <v-select
          v-model="role"
          :items="items"
          item-text="name"
          item-value="value"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-row>
        <v-text-field
          label="Email"
          prepend-icon="mdi-account-circle"
          v-model="email"
        ></v-text-field>
        <v-text-field
          type="password"
          label="Password (min 8 caracters) "
          prepend-icon="mdi-lock"
          v-model="password"
        ></v-text-field>
        <v-card-actions>
          <v-spacer> </v-spacer>
          <v-btn color="success" @click="send()" > Signup </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      role: "",
      password: "",
      items: [{
        name: 'Client',
        value: 'cleint'
      },{
        name:'Hotel',
        value:'hotel'
      }]
    };
  },
  methods: {
    ...mapActions({
      setUser: "setUser",
    }),

    async send() {
      console.log(this.email, this.password,this.role.value);
      console.log("Role",this.role)
      if (this.password && this.email) {
        const json = {
          email: this.email,
          role: this.role.value,
          password: this.password
        };
        const res = await axios.post(this.$store.state.url+"v1/users", json, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        });

        console.log("res", res);
        this.data = res;
        if (this.data.data.id) {
          this.setUser(this.data.data);
        }
      } else {
        console("not send");
      }
    },
  },
};
</script>

<style>
.segnup {
  text-align: center;
}
</style>