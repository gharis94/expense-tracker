import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
function AddTransection() {
  const [text,setText]=useState("");
  const [amount,setAmount]=useState("");
  const {add_trans} = useContext(GlobalContext);

  const onsubmit=(e)=>{
    e.preventDefault();
    console.log('a')
    const newTrans ={
      id: new Date().getDate().toString(),
      des:text,
      amount:Number(amount)
    }
    add_trans(newTrans);
  }
  return (<div>
    <form onSubmit={(e)=>onsubmit(e)}>
        <input
            type='text'
            value={text}
            placeholder='Enter the Description'
            onChange={(e)=>setText(e.target.value)}
        />
        <input
            type='number'
            value={amount}
            placeholder="Enter the amount"
            onChange={(e)=>setAmount(e.target.value)}            
        />
        <button>Submit</button>
    </form>
  </div>);
}

export default AddTransection;