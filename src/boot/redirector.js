import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({urlPath,redirect}) => {
  if(urlPath!='/login' && urlPath == "/"){
    console.log(urlPath);
    // redirect({path: '/login'});
    return;
  }
})
