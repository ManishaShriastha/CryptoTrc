import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import Coin from './components/coinItems/Coin';

function App() {

  const [coins, setCoins] = useState([]);
  const [search,setsearch] = useState("");

  useEffect(()=>{
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=101&page=1&sparkline=false")
      .then((res)=>{
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error)=>console.error(error));
  }, []);

  const changehandler = (e)=>{
    setsearch(e.target.value);
  }

  const filteredCoins = coins.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className='header'>
        <h1 className='brand'><i className='fas fa-ring'></i> CRYPTOFY</h1>
        <form>
          <input className='inputfield' type="text" onChange={changehandler} placeholder='Search a Coin'></input>
        </form>
      </div>
      <div className='coinContainer'>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              pricechange={coin.price_change_percentage_24h}
            />              
          );

         })
        }
        
      </div>
    </div>
  );
}

export default App;
