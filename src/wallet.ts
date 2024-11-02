import bitcore from 'bitcore-lib'
import axios from 'axios'

export interface i_wallet {
  address: string;
  private_key: string;
}

export const create_wallet: () => i_wallet = () => {
  const private_key: bitcore.PrivateKey = new bitcore.PrivateKey();
  const address: bitcore.Address = private_key.toAddress();
  return (
    { address: String(address), private_key: String(private_key) } as i_wallet
  );
};

export const check_balance: (wallet_address: string) => Promise<number> = async(wallet_addrs: string) => {
  const res = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${wallet_addrs}/balance`);
  let balance: number = res.data.balance;
  const length = (''+balance).length;
  const decimals_length: number = 8;

  if(length < decimals_length) {
    var new_balance: string = `${balance.toString()}`;
    for(let q: number = 0; q < (decimals_length - length); ++q) {
      new_balance = ('0'+new_balance);
    }
    new_balance = ('0.'+new_balance);
    console.log(new_balance);
    balance = Number(new_balance);
  }

  return balance;
};