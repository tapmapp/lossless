import axios from 'axios';

export const getBalance = function (walletAddress: string): Promise<number> {
    return axios.get(
    `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x3b9be07d622accaed78f479bc0edabfd6397e320&address=${walletAddress}&tag=latest&apikey=${process.env.API_KEY}`
    )
    .then((response: any) => {
      return response.data.result;
    })
    .catch((error: any) => {
      // handle error
      console.log(error);
      return 0;
    });
};