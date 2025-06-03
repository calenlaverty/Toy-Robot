import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import App from "./components/App.vue";

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-sh27mvp4kn6uu1kw.us.auth0.com",
    clientId: "2gR2jJh1yLzGEYFY94MZSdEOzla8DcjU",
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  })
);

app.mount("#app");
