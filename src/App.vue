<template>
  <div>
    <v-app>
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
    </v-card>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-card class="overflow-hidden">
      <v-footer
        dark
        padless
      >
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} - <strong>vrgames-index</strong>
        </v-card-text>
      </v-footer>
    </v-card>
    </v-app>
  </div>

</template>
