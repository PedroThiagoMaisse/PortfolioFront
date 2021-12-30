import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { branco, cinza, preto, primaria, secundaria } from "../assets/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        branco: branco,
        cinza: cinza,
        preto: preto,
        primaria: primaria,
        secundaria: secundaria,
      },
    },
  },
});

export default vuetify;
