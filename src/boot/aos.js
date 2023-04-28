import { boot } from 'quasar/wrappers'
import 'aos/dist/aos.css';
import Aos from 'aos';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  Aos.init();  // something to do
})
