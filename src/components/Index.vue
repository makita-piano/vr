<template>
  <VContainer pa-0>
    <VRow>
      <VCol
        v-for="e in list"
        :key="e.id"
        cols="12"
        md="12"
      >
        <VRow>
          <VCol
            v-for="e in list"
            :key="e.id"
            cols="12"
            md="12"
          >
            <p><span v-text="e.release_date"></span><span v-text="e.is_free"></span></p>
          </VCol>
        </VRow>
        <RouterLink
          to="/"
          exact
        >
          {{ e.name }}
        </RouterLink>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import axios from "axios";

export default {
	name: "Index",
	components: {},
	data() {
		return {
			list: null,
		};
	},
	mounted: function() {
	  axios
      .get("https://script.googleusercontent.com/macros/echo?user_content_key=6SyehD-Rs73dBjpQN3wiOTddmknaHK4tAryz-VFL6ErMERLRynhgLg9O3Kyv93D_Y86bl3sPaFKxaMK1Hs1F5iXIWTyt-oeum5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG8-oSvIL0Fqbtp9dmqBuJfBV9qbb_k4Bx7vI2fEuiROOs7obk4uz0a1FUPDiikXenaz7TzD4ctX&lib=MNlkLKR9rtqCw9OeFYV8adGX-bWlZsLTP") //ここにURLを入れる
      .then(response => (this.list = response.data))
	},
};

</script>
