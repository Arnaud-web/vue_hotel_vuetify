<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="grey"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-text-field
          v-show="!showOnHotel"
          dark
          prepend-icon="mdi-map-search"
          type="text"
          placeholder="Search"
          v-model="search"
          @change="filterHotel"
        />
        <span v-if="search != ''"> {{ filterHotel.length }} resultats </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="showOnHotel = false">Liste Hotels</v-btn>
      <v-btn v-show="!user.id" @click="showCompte = !showCompte">Compte </v-btn>
      <v-btn v-show="user.id" @click="deconnect()">deconnecter </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px">
        <v-main>
          <div v-if="!user.id" style="text-align: center">
            <div v-if="showCompte">
              <Compte />
              <v-btn class="text-align:center" @click="showCompte = false"
                >reduire</v-btn
              >
            </div>
          </div>
          <div v-if="user.role == 'hotel'">
            <NewHotel />
          </div>
          <v-spacer></v-spacer>
          <v-sparkline></v-sparkline>
          <div
            class="list_hotel"
            v-for="(hotel, index) in filterHotel"
            :key="index"
          >
            <div style="display: inline-flex; margin: 4px">
              <div v-if="!showOnHotel">
                <Hotel :hotel="hotel" />
                <div
                  style="
                    background-color: grey;
                    text-align: right;
                    padding-right: 4px;
                  "
                >
                  <v-btn @click="(showOnHotel = true) && (temHotel = hotel)"
                    >Show</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
          <div v-if="showOnHotel">
            <ShowOnHotel :hotel="temHotel" />
            <div>
              <v-btn dark @click="showOnHotel = false">Liste Hotels</v-btn>
            </div>
          </div>
        </v-main>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
// import {mapGetters} from 'vuex'
import { mapActions } from "vuex";
import { mapState } from "vuex";
import Compte from "./components/compte/Compte.vue";
import Hotel from "./components/hotel/Hotel";
import NewHotel from "./components/hotel/NewHotel";
import ShowOnHotel from "./components/hotel/ShowOnHotel";

export default {
  name: "App",
  data() {
    return {
      message: "Hello World",
      showCompte: false,
      showOnHotel: false,
      temHotel: [],
      search: "",
    };
  },
  components: { Hotel, Compte, NewHotel, ShowOnHotel },
  computed: {
    ...mapState({
      hotels: "hotels",
      user: "user",
      comments: "comments",
    }),
    filterHotel() {
      if (this.search != "") {
        var _hotels = this.hotels.filter((hotel) => {
          return hotel.name.toLowerCase().includes(this.search.toLowerCase());
        });
        console.log("recherche", _hotels);
        return _hotels;
      } else {
        return this.hotels;
      }
    },
  },
  methods: {
    ...mapActions({
      setHotels: "setHotels",
      setComments: "setComments",
      setUser: "setUser",
    }),
    getAllData() {
      this.setHotels();
      this.setComments();
      this.getUserInCookie();
    },
    test() {
      console.log("hotels =>", this.hotels);
      console.log("user => ", this.user);
      console.log("comments =>", this.comments);
    },
    getUserInCookie() {
      let cookieValue = this.$cookies.get("user");
      if (cookieValue) {
        this.setUser(cookieValue);
      }
      console.log("cookies", cookieValue);
    },
    deconnect() {
      this.$store.state.user = [];
      this.$cookies.remove("user");
    },
  },
  mounted() {
    this.getAllData();
    this.test();
  },
};
</script>

<style>
.list_hotel {
  font-family: Verdana, sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #000 !important;
  box-sizing: inherit;
  float: left;
  /* width: 33%; */
  display: contents;
  text-align: center;
}
</style>