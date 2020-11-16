<template>
  <v-app id="app" class="body_h">
    <v-card class="overflow-hidden">
    <v-app-bar

      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title> {{ message }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn v-show="showLogin()" color="success" @click="showC = !showC,showFormLogin = !showFormLogin">{{
        !showC ? "Cree un Compte" : "se Connecté"
      }}</v-btn>
        <v-btn v-show="!showLogin()" color="success" @click="deconnect()">Déconnecter</v-btn>
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
      max-height="1000"
    >
      <v-container style="height: 100%;">

        <div v-show="showH">

          <div v-show="showLogin()">
            <Segnup v-show="showC" />
          </div>
          <LoginApp v-show="!showC" v-if="showLogin()" />
          <!-- {{ this.$store.state.user }} -->
          <div class="create_" v-if="!showLogin()">
            <Create v-if="this.$store.state.user.role == 'hotel'" />
          </div>
          <v-container width="400px">
            <v-card-text>
              <v-text-field
                prepend-icon="mdi-map-search"
                type="text"
                placeholder="Search"
                v-model="search"
                @change="hotelsFilter"
              />
              <span v-if="search != ''" class="resulta">
                {{ hotelsFilter().length }} resultats{{
                  hotelsFilter().length > 1 ? "s" : ""
                }}
              </span>
            </v-card-text>
          </v-container>
          <div
            class="list_hotel"
            v-for="(hotel, index) in hotelsFilter()"
            :key="index"
          >
            <div style="display: inline-flex">
              <div>
                <Hotel :hotel="hotel" />
                <div class="btn_options">
                  <!-- <v-btn
                    v-if="!showLogin()"
                    class="btn btn-sm btn-info"
                    @click="showFormEmail = !showFormEmail"
                  >
                    Reservé
                  </v-btn> -->
                  <v-btn color="green" @click="show(hotel)"> show </v-btn>
                  <!-- <a class="btn btn" @click="addToCart(hotel)">
              reserve
              </a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showH == false">
          <ShowHotel :hotel="hotel" />
          <div class="btn_options">
            <!-- <a class="btn btn" @click="addToCart(hotel)">
              reserve
              </a> -->
            <v-btn
              v-if="!showLogin()"
              color="green"
              @click="showFormEmail = !showFormEmail"
            >
              Reservé
            </v-btn>
            <v-btn color="info" @click="show(hotel)"> Listes Hotels </v-btn>
          </div>
          <div v-if="showFormEmail">
            <FormMail :hotel="hotel" />
          </div>
          <div>
            <CommentShow :hotel="hotel" />
          </div>
          <div v-if="!showLogin()">
            <Comments :hotel="hotel" />
          </div>
        </div>
      </v-container>
    </v-sheet>
  </v-card>

  </v-app>
</template>

<script>
import ShowHotel from "./components/ShowHotel";
import axios from "axios";
import Hotel from "./components/Hotel";
import LoginApp from "./components/login/LoginApp";
import Segnup from "./components/login/Segnup";
import Create from "./components/hotel/Create";
import FormMail from "./components/mail/FormMail";
import Comments from "./components/hotel/Comments";
import CommentShow from "./components/hotel/CommentShow";
export default {
  data: function () {
    return {
      message: "Hello Word",
      hotels: [],
      showH: true,
      search: "",
      showC: false,
      hotel: "",
      showFormEmail: false,
      showFormLogin:false,
    };
  },
  components: {
    Hotel,
    ShowHotel,
    LoginApp,
    Segnup,
    Create,
    FormMail,
    Comments,
    CommentShow,
  },
  computed: {},
  methods: {
    showLogin() {
      if (this.$store.state.user.id) {
        return false;
      } else {
        return true;
      }
    },

    hotelsFilter() {
      console.log(this.search, this.hotels);
      var _hotels = this.$store.state.hotels;
      if (this.search != "") {
        _hotels = this.hotels.filter((hotel) => {
          return hotel.name.toLowerCase().includes(this.search);
        });
        console.log("recherche", _hotels);
        return _hotels;
      } else {
        return _hotels;
      }
    },
    reserver(hotel) {
      console.log(hotel);
    },
    show(hotel) {
      this.hotel = hotel;
      this.showH = !this.showH;
    },
    get() {
      let cookieValue = this.$cookies.get("user");
      if (cookieValue) {
        this.$store.state.user = cookieValue;
      }
      console.log("cookies", cookieValue);
    },
    deconnect() {
      this.$store.state.user = [];
      this.$cookies.remove("user");
    },
  },
  mounted() {
    axios
      .get("http://127.0.0.1:3000/v1/hotels")
      .then((response) => {
        this.hotels = response.data;
        this.$store.state.hotels = response.data;
        console.log(response.data);
        console.log("store", this.$store.state.hotels);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
    axios
      .get("http://127.0.0.1:3000/v1/user_comment")
      .then((response) => {
        // this.hotels = response.data;
        this.$store.state.comments = response.data;
        console.log(response.data);
        console.log("comments", this.$store.state.comments);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
    this.get();
    // console.log('cook',this.$cookies)
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
.list_hotel {
  font-family: Verdana, sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #000 !important;
  box-sizing: inherit;
  float: left;
  /* width: 33%; */
  display: contents;
}
.resulta {
  padding-left: 12px;
  color: gray;
  font-size: 18px;
}
.btn_options {
  background-color: grey;
  margin-left: 2px;
  margin-right: 2px;
  text-align: end;
}
.body_h {
  margin: 20px;
  text-align: center;
}.create_{
  margin: 2px;
  padding: 4px;
  display: block;
}
</style>
