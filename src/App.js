import React, { useState, useEffect } from 'react';

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch the available currencies when the app loads
  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    try {
      // Mocked currency list for simplicity. You can expand this or fetch from an API.
      const availableCurrencies = ['USD', 'EUR', 'GBP', 'JPY'];
      setCurrencies(availableCurrencies);
    } catch (error) {
      console.error('Error fetching currencies:', error);
    }
  };

  const handleConvert = async () => {
    if (!amount) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[toCurrency];
      setResult((amount * rate).toFixed(2));
    } catch (error) {
      console.error('Error fetching conversion rate:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Currency Converter</h1>

      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block mb-2">From:</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2">To:</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
        placeholder="Amount"
      />

      <button
        onClick={handleConvert}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {loading ? 'Converting...' : 'Convert'}
      </button>

      {result && (
        <div className="mt-4 text-lg">
          {amount} {fromCurrency} = {result} {toCurrency}
        </div>
      )}
    </div>
  );
};

export default App;
