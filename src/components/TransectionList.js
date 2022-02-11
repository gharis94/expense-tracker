import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function TransectionList() {
    const {transections,delete_trans} = useContext(GlobalContext);

  return <div>
    <li>        
        {transections.map(transection=>(
            <ul key={transection.id}>
                <h4>{transection.des}</h4>
                <h4>{transection.amount}</h4>
                <button onClick={()=>delete_trans(transection.id)}>x</button>
            </ul>
        ))}
        
    </li>
      
  </div>;
}

export default TransectionList;
