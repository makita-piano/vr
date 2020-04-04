<template>
  <VContainer pa-0>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        >
      </v-text-field>
    </v-card-title>
    <v-card>
      <v-spacer></v-spacer>
      <v-data-table
        :headers="table_headers"
        :items="list_formated(this.list)"
        :search="search"
        hide-default-footer
        @click:row="on_click_row"
      >
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">aaa</span>
        </v-card-title>

        <v-card-text>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog_close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </VContainer>
</template>

<script>
  import axios from "axios";
  import moment from "moment";

  export default {
  	name: "Index",
  	components: {},
  	data() {
  		return {
        dialog: false,
  			list: [],
        search: '',
        table_headers: [
          {
            text:  "release_date",
            value: "release_date",
          },
          {
            text:  "free",
            value: "is_free",
          },
          {
            text:  "name",
            value: "name",
          },
          {
            text:  "sickness_rating",
            value: "sickness_rating",
          },
          {
            text:  "devises",
            value: "devises",
          },
        ],
  		};
  	},
  	mounted: function() {
  	  axios
        .get("https://script.googleusercontent.com/macros/echo?user_content_key=6SyehD-Rs73dBjpQN3wiOTddmknaHK4tAryz-VFL6ErMERLRynhgLg9O3Kyv93D_Y86bl3sPaFKxaMK1Hs1F5iXIWTyt-oeum5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG8-oSvIL0Fqbtp9dmqBuJfBV9qbb_k4Bx7vI2fEuiROOs7obk4uz0a1FUPDiikXenaz7TzD4ctX&lib=MNlkLKR9rtqCw9OeFYV8adGX-bWlZsLTP")
        .then(response => { this.list = response.data });
  	},
    watch: {
      dialog (val) {
        val || this.dialog_close()
      },
    },
    methods: {
      list_formated: function(list) {
        if (list.length === 0) {
          return [];
        }
        var tmp = JSON.stringify(list, function(key, value) {
          if(key === 'release_date') {
            return moment(value).format("YYYY/MM/DD");
          }
          if(key === 'is_free') {
            if (value === "") {
              return "free";
            } else {
              return "paid";
            }
          }
          return value;
        });
        return JSON.parse(tmp);
      },
      on_click_row(data) {
        this.dialog = true;
      },
      dialog_close () {
        this.dialog = false;
      },
    },
  };
</script>
