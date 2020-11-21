<template>
    <div>
        <v-card>
          <v-card-text>
            <v-text-field  type="text" placeholder="Commentaire" v-model="message" />
            <v-spacer></v-spacer>
            <v-btn  color="success" @click="send()">Commenter</v-btn>
          </v-card-text>
        </v-card>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:['hotel'],
    data(){
        return{
            message: ''
        }
    },
    methods:{
        async send() {
      if (this.message) {
        const json = {
          message: this.message,
          hotel: this.hotel.id,
          user: this.$store.state.user.id
        };
        const res = await axios.post(this.$store.state.url+"v1/user_comment", json, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        });
        console.log("res", res);
        this.data = res;
        if (this.data.data.id) {
          this.$store.state.comments.push(this.data.data)
           this.message = ''
        }
      } else {
        console("not send");
      }
    },
    }
}
</script>