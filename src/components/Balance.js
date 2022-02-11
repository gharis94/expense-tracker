import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
  const{transections}=useContext(GlobalContext);
  return <div>
      <h2>Balance</h2>
      <h2> ${transections.reduce((total,num)=>{
        total +=num.amount;
        return total;
      },0)}</h2>
  </div>;
}

export default Balance;
