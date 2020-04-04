import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#d9c4a9",
        secondary: "#845d5e",
        accent: "#77324a",
        paid: colors.green.lighten3,
        free: colors.grey.lighten2,
      },
    },
  },
})
