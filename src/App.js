
import './App.css';
import Header from './component/Header/Header'
import Informat from './component/Information/Informat'
import { Route } from 'react-router-dom'
import Exchange from './component/Information/Exchange/Exchange';
import Currencies from './component/Information/Currencies/Currencies'



function App() {
  return (
    <div className="App">
      <Header />
      <Informat />
      <Route path='/exchange' render={() => <Exchange />}  />
      <Route path='/currencies' render={() => <Currencies />} />
    </div>
  );
}

export default App;


