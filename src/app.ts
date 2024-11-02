import { check_balance } from "./wallet.js"



check_balance('37jKPSmbEGwgfacCr2nayn1wTaqMAbA94Z').then((bal) => {
  console.log(bal);
});