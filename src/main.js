import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

//UIKit
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/css/uikit.min.css'
UIkit.use(Icons)
    
import './assets/main.css'

Vue.config.productionTip = false;

new Vue({
	vuetify,
	router,
	render: h => h(App)
}).$mount("#app");
