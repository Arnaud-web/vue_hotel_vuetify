<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="showFormulaire = !showFormulaire"
          >Cree un Hotel
        </v-btn>
         <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <div v-if="showFormulaire">
        <v-text-field type="text" placeholder="Nom de l'Hotel" v-model="name" />
        <v-text-field
          type="text"
          placeholder="Specialite"
          v-model="specialty"
        />
        <v-text-field type="text" placeholder="Address" v-model="adress" />
        <v-text-field type="text" placeholder="Prix" v-model="prix" />
        <v-text-field
          type="text"
          placeholder="Url de l'Image de l'Hotel"
          v-model="photo"
        />
        <v-btn color="success" @click="save()">Save</v-btn>
      </div>

      </v-card-text>
      
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      showFormulaire: false,
      name: "",
      specialty: "",
      prix: "",
      photo: "",
      adress: "",
      data: "",
    };
  },
  computed: {},
  methods: {
    async save() {
      if (
        this.name &&
        this.specialty &&
        this.prix &&
        this.photo &&
        this.adress
      ) {
        const json = {
          name: this.name,
          specialty: this.specialty,
          prix: this.prix,
          photo: this.photo,
          adress: this.adress,
          user: this.$store.state.user.id,
        };
        const res = await axios.post("http://127.0.0.1:3000//v1/hotels", json, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        });
        console.log("res", res);
        this.data = res;
        if (this.data.data.id) {
          this.$store.state.hotels.push(this.data.data);
          (this.name = ""),
            (this.specialty = ""),
            (this.prix = ""),
            (this.photo = ""),
            (this.adress = ""),
            (this.showFormulaire = !this.showFormulaire);
        }
      } else {
        console("not send");
      }
    },
  },
};
</script>

<style>
.text_hotel {
  font-size: 18px;
}
</style>