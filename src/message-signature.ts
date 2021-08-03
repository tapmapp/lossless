import axios from 'axios';
import { Maybe } from './generated/graphql';

export const verify = function (message: Maybe<string> | undefined, address: Maybe<string> | undefined, signature: Maybe<string> | undefined): boolean {
    return true;
    /*return axios.post(
        `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x3b9be07d622accaed78f479bc0edabfd6397e320&address=${walletAddress}&tag=latest&apikey=${process.env.API_KEY}`
    )
    .then((response: any) => {
      return <number>response.data.result;
    })
    .catch((error: any) => {
      // handle error
      console.log(error);
      return 0;
    });
    */
};