<template>
  <div id="apps" class="login">
    <p class="error">{{ datas.data ? datas.data.error : "" }}</p>
    <v-card width="400" class="mx-auto mt-5" >
      <v-card-title>
        <h3> {{ isLogin ? "Segning" : "Segnup" }} </h3>
      </v-card-title>
      <v-card-text>
        <v-row align="center" v-if="!isLogin"  >
      <v-col cols="6">
        <v-subheader>
          Type de Compte
          
        </v-subheader>
      </v-col>
      <v-col cols="6">
        <v-radio-group
              column
              v-model = "role"
            >
              <v-radio  v-for = "(item,index) in items" :key="index"
                :label="item.name"
                color="red darken-3"
                :value="item.value"
              ></v-radio>
            </v-radio-group>
      </v-col>
    </v-row>
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
               <v-btn v-if="isLogin" @click = "isLogin = false" >Cree un Compte</v-btn>
        <v-btn v-if="!isLogin" @click = "isLogin = true" >Se Connecter</v-btn>
        <v-spacer></v-spacer>
          <v-btn v-if="isLogin"  @click="connect()" >Connecter</v-btn>
          <v-btn v-if="!isLogin"  @click="send()" > Enregistrer </v-btn>
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
      isLogin: true,
      email: "",
      role: "",
      password: "",
      items: [{
        name: 'Client',
        value: 'cleint'
      },{
        name:'Hotel',
        value:'hotel'
      }],
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
    signup(){
        this.isLogin = false
    },
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
    },async send() {
      console.log(this.email, this.password,this.role);
      console.log("Role",this.role)
      if (this.password && this.email) {
        const json = {
          email: this.email,
          role: this.role,
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
  display:block;
  width:400px;
  margin:auto;
}
</style>