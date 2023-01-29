import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("http://api.coinpaprika.com/v1/ticker")
    .then(response => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <string>Loading...</string> : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.price_usd} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
 