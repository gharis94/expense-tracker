import { createContext,useReducer } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState ={
    transections:[
    {id:1, des:'salary',amount:20 },
    {id:2, des:'egg',amount:-2},
    {id:3, des:"milk",amount:-2}
]};

//create Global Context
export const GlobalContext = createContext(initialState);

 // create Global Provider
export const GlobalProvider =({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    //actions
    const delete_trans =(id)=>{
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }
    const add_trans =(trans)=>{
        console.log(trans)
        dispatch({
            type:'ADD',
            payload: trans
        })
    }
    return(
        <GlobalContext.Provider value={{
            transections:state.transections,
            delete_trans,
            add_trans
        }}>{children}</GlobalContext.Provider>
    )
 } 
