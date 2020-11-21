<template>
    <v-card class="container_hotel" >
      <div class="hotel">
        <div class = "name_hotel">
         <v-card-title >{{ hotel.name }}</v-card-title>
        </div>
        <v-card-text>
          <v-card-subtitle>
            <span class="options">{{ hotel.adress }}</span>
            <v-spacer></v-spacer>
            <span class="options">{{ hotel.specialty }}</span>
          </v-card-subtitle>
          <v-img class="image_hotel" :src="hotel.photo" :alt="'image100x100 '+hotel.photo" />
        <span class="options">{{ hotel.prix }} $</span>
        </v-card-text>
      </div>
 
    </v-card>
</template>

<script>
export default {
  props: ["hotel"],
  components: {},
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
.image_hotel {
  background-color: grey;
  min-height: 100px;
  min-width: 100px;
  max-width: 200px;
  vertical-align: middle;
  font-family: Verdana, sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #000 !important;
  box-sizing: inherit;
  border-style: none;
  vertical-align: middle;
  width: 204px;
  height: auto;
}
.name_hotel {
  display: inline;
  background-color: rgb(110, 110, 110);

  text-align: center;
  font-family: Verdana, sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: rgb(252, 252, 252) !important;
  box-sizing: inherit;
}
.container_hotel {
  display: block;
  padding: 5px;
}
.options {
  text-align: end;
}
</style>