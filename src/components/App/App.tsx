import React, { useState, useEffect } from 'react';
import { Rates, fetchRates } from '../../api/api';
import Select from '../Select';
import './App.css';

const BASE_CURRENCY = 'GBP';

const App: React.FC = () => {
  const [currencies, setCurrencies] = useState<Rates>({});
  const [amount, setAmount] = useState<number>(0);
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');

  useEffect(() => {
    const getCurrencies = async () => {
      setCurrencies(await fetchRates(BASE_CURRENCY));
    };
    getCurrencies();
  }, []);

  const convert = (amount: number, from: string, to: string): number => {
    console.log(currencies);
    console.log({ amount, from, to });
    if (!currencies[from] || !currencies[to]) {
      console.log('ITS ME PEKORA!');
      return 0;
    }
    const rate = currencies[to] / currencies[from];
    const convertedAmount = rate * amount;
    return convertedAmount;
  };

  const formatCurrency = (amount: number, currency: string) => {
    if (!currency) {
      return amount;
    }
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  console.log({ from, to });
  return (
    <div className="app">
      <form>
        <input
          onChange={e => setAmount(Number(e.target.value))}
          type="number"
          name="from_amount"
        />
        <Select onChange={value => setFrom(value)} />
        <p>in</p>
        <Select onChange={value => setTo(value)} />
        <p>is</p>
        <p className="to_amount">
          {formatCurrency(convert(amount, from, to), to)}
        </p>
      </form>
    </div>
  );
};

export default App;
