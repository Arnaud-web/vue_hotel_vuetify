<template>
  <div style="text-align: center;margin: 20px">
    <div class="container_h">
      <v-card class="h">
       <div class = "name_h">
         <v-card-title >{{ hotel.name }}</v-card-title>
        </div>
        <v-card-text>
          <v-card-subtitle>
            <span class="options">{{ hotel.adress }}</span>
            <v-spacer></v-spacer>
            <span class="options">{{ hotel.specialty }}</span>
          </v-card-subtitle>
          <v-img :src="hotel.photo" :alt="'image100x100 '+hotel.photo" />
        <span class="prix">{{ hotel.prix }} $</span>
        <SendMail v-if = "user.id" :hotel = "hotel" />
        <ShowCommentsHotel :hotel = "hotel"/>
         <Comments v-if = "user.id" :hotel = "hotel" />
        </v-card-text>
      </v-card>
      <div>
     
      </div>
    </div>
  </div>
</template>

<script>
import Comments from "./Comments"
import { mapState } from "vuex";
import ShowCommentsHotel from "./ShowCommentsHotel"
import SendMail from "../mail/SendMail"
export default {
  props: ["hotel"],
   computed: {
    ...mapState({
      user: "user",
    }),
   },
  components:{
      Comments,
      ShowCommentsHotel,
      SendMail
  }
};
</script>
<style>
.hotel {
  /* border: 1px solid gray; */
  padding: 12px;
  background-color: rgb(230, 230, 230);

  padding: auto;
  margin: auto;
  display: inline-grid;
}
.image_h {
  background-color: grey;

  vertical-align: middle;
  font-family: Verdana, sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #000 !important;
  box-sizing: inherit;
  border-style: none;
  vertical-align: middle;
  height: auto;
}.prix{
    display: block;
    color: lawngreen;
    font-size: 25px;
}
.name_h {
  display: block;
  background-color: rgb(110, 110, 110);

  text-align: center;
  font-family: Verdana, sans-serif;
  font-size: 20px;
  line-height: 1.5;
  color: rgb(252, 252, 252) !important;
  box-sizing: inherit;
}
.container_hotel {
  display: block;
  padding: 2px;
}
.o {
  display: block;
  text-align: center;
}
.a {
  border: 1px solid blue;
}
</style>