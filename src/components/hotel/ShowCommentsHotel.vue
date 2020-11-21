<template>
  <v-card class="coms">
    <label for="com">Commentaires :</label>
    <v-list-item id="com" v-for="(comment, index) in comments" :key="index">
      <v-list-item-content>
        <p class="text">{{ comment.message }}</p>
      </v-list-item-content>
    </v-list-item>
    <p></p>
  </v-card>
</template>

<script>
export default {
  props: ["hotel"],
  computed: {
    comments() {
      const coms = this.$store.state.comments;
      const comsH = coms.filter((com) => {
        return com.hotel_id === this.hotel.id;
      });
      return comsH;
    },
  },
};
</script>

<style>
.coms {
  /* font-size: 12px; */
  background-color: rgb(131, 131, 131);
  display: block;
  text-align: left;
}
.text {
  background-color: seashell;
}
</style>