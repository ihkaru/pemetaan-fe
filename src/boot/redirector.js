import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({urlPath,redirect}) => {
  if(urlPath == "/"){
    redirect({path: '/login'});
    // return;
  }
})