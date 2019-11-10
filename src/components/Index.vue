<template>
    <v-container pa-0>
      <v-row>
        <v-col
          cols="6"
          md="2"
          v-for="e in gamedata"
          :key="e.id"
        >
            <router-link to="/" exact>
              {{ e.name }}
            </router-link>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'index',
    components: {},
    data() {
      return {
        gamedata: require('../assets/json/gamedata.json'),
      };
    },
    mounted: function() {
      window.addEventListener('resize', this.handleChange());
    },
    methods: {
      getInfoLink(name) {
        return "/a";
      },
    },
  };
</script>
