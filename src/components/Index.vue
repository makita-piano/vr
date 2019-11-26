<template>
  <VContainer pa-0>
    <VRow>
      <VCol
        v-for="e in gamedata"
        :key="e.id"
        cols="6"
        md="2"
      >
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
			gamedata: require("../assets/json/gamedata.json"),
		};
	},
	mounted: function() {
		window.addEventListener("resize", this.handleChange());
	},
	methods: {
		getInfoLink(name) {
			return "/a";
		},
	},
};
</script>
