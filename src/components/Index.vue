<template>
  <VContainer pa-0>
    <VRow>
      <VCol
        cols="12"
      >
        <VRow>
          <VCol
          >
            release_date
          </VCol>
          <VCol
          >
            free
          </VCol>
          <VCol
          >
            name
          </VCol>
          <VCol
          >
            sickness_rating
          </VCol>
          <VCol
          >
            devises
          </VCol>
        </VRow>
      </VCol>
      <VCol
        v-for="e in list"
        :key="e.id"
        cols="12"
      >
        <VRow>
          <VCol
          >
            {{ e.release_date }}
          </VCol>
          <VCol
          >
            {{e.is_free}}
          </VCol>
          <VCol
          >
            {{e.name}}
          </VCol>
          <VCol
          >
            {{e.sickness_rating}}
          </VCol>
          <VCol
          >
            {{e.devises}}
          </VCol>
        </VRow>
      </VCol>
    </VRow>
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
  			list: null,
        tmp: null
  		};
  	},
  	mounted: function() {
  	  axios
        .get("https://script.googleusercontent.com/macros/echo?user_content_key=6SyehD-Rs73dBjpQN3wiOTddmknaHK4tAryz-VFL6ErMERLRynhgLg9O3Kyv93D_Y86bl3sPaFKxaMK1Hs1F5iXIWTyt-oeum5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG8-oSvIL0Fqbtp9dmqBuJfBV9qbb_k4Bx7vI2fEuiROOs7obk4uz0a1FUPDiikXenaz7TzD4ctX&lib=MNlkLKR9rtqCw9OeFYV8adGX-bWlZsLTP")
        .then(response => { this.list = response.data });
  	},
    methods: {
      date_formated: function(date) {
        return moment(date).format("YYYY/MM/DD");
      }
    }
  };
</script>
