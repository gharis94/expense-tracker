import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Transection from './components/Transection';
import AddTransection from './components/AddTransection';
import {GlobalProvider} from './context/GlobalState'
import TransectionList from './components/TransectionList';

function App() {
  return (<>
    <GlobalProvider>
      <Header/>
      <Balance/>
      <Transection/>
      <AddTransection/>
      <TransectionList/>
    </GlobalProvider>
  </>
    
  );
}

export default App;
