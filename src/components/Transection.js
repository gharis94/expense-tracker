import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
function Transection() {
  const {transections} = useContext(GlobalContext);
  return (<div>
    <div className='income'>
        <h3> $ {transections.reduce((total,num)=>{
          if(num.amount>0){
            total += num.amount;
            return total;
          }
          else{
            return total;
          }
        },0)}</h3>
        <h3>Income</h3>
    </div>
        <div className='expense'>
        <h3> $ {transections.reduce((total,num)=>{
          if(num.amount<0){
            total +=num.amount;
            return total;
          }
          else{
            return total;
          }
        },0)}</h3>
        <h3>expense</h3>
    </div>
  </div>);
}

export default Transection;
