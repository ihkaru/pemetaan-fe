import { boot } from 'quasar/wrappers'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';


// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot( ({app}) => {
  app.config.globalProperties.$L = L;
})

export {L};