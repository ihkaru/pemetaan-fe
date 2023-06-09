import { boot } from "quasar/wrappers";
import vue3GoogleLogin from "vue3-google-login";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(vue3GoogleLogin, {
    clientId:
      "497935660775-335mbn5aih5tfi7smokqeev7rc56hk0o.apps.googleusercontent.com",
    scope: "email profile openid",
  });
});
