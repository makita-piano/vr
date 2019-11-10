<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>vrgames-index</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <v-content>
        <HelloWorld/>
      </v-content>
    </v-card>
  </div>

</template>


<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
