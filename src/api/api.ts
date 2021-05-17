const endpoint = process.env.REACT_APP_ENDPOINT;

export type Rates = {
  [key: string]: number;
};

export async function fetchRates(base = 'GBP'): Promise<Rates> {
  const res = await fetch(`${endpoint}/${base}`);
  const rates = await res.json();
  return rates.conversion_rates;
}
