import axios from 'axios';
import { Maybe } from './generated/graphql';

export const getBalance = function (walletAddress: Maybe<string> | undefined): Promise<number> {
    return axios.get(
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
};