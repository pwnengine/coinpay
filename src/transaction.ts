import axios from 'axios'

export const btc_price: (currency: 'usd' | 'eur') => Promise<number> = async(currency: 'usd' | 'eur') => {
  const res = await axios.get('https://bitcoinexplorer.org/api/price');
  return currency === 'usd' ? Number(res.data.usd) : Number(res.data.eur);
}

export const usd_to_btc: (amount: number) => Promise<number> = async(amount: number) => {
  return (amount / (await btc_price('usd')));
};

export const eur_to_btc: (amount: number) => Promise<number> = async(amount: number) => {
  return (amount / (await btc_price('eur')));
};