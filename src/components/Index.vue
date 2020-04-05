<template>
  <VContainer pa-0>
    <v-card-title>
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
          md="9"
        >
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card>
      <v-spacer></v-spacer>
      <v-data-table
        :headers="table_headers"
        :items="list_formated(this.list)"
        :search="search"
        hide-default-footer
        @click:row="on_click_row"
        :mobile-breakpoint=0
        class="white-space-nowrap"
        :custom-filter="filter_devises"
      >
      </v-data-table>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{dialog_item.name}}</span>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col
                cols="6"
              >
                release_date
              </v-col>
              <v-col
                cols="6"
              >
                {{dialog_item.release_date}}
              </v-col>
              <v-col
                cols="6"
              >
                sickness_rating
              </v-col>
              <v-col
                cols="6"
              >
                {{dialog_item.sickness_rating}}
              </v-col>
              <v-col
                cols="6"
              >
                devises
              </v-col>
              <v-col
                cols="6"
              >
                {{dialog_item.devises}}
              </v-col>
              <v-col
                cols="6"
              >
                publisher
              </v-col>
              <v-col
                cols="6"
              >
                {{dialog_item.publisher}}
              </v-col>
              <v-col
                cols="6"
              >
                developer
              </v-col>
              <v-col
                cols="6"
              >
                {{dialog_item.developer}}
              </v-col>
              <v-col
                cols="12"
              >
                <v-row justify="center">
                    <v-btn color="primary" :href="dialog_item.url_official" target="_blank" class="text-decoration-none-hover">official site</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog_close">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
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
        dialog_item: [],
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
      //list create
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

      //dialog
      on_click_row(data) {
        this.dialog = true;
        this.dialog_item = data;
      },
      dialog_close() {
        this.dialog = false;
      },

      //search
      filter_devises(value, search, item) {
        console.log(search);
        return item.devises != ""
      },
    },
  };
</script>
