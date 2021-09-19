
import './App.css';
import Header from './component/Header/Header'
import Informat from './component/Information/Informat'
import { Route } from 'react-router-dom'
import ExchangeContainer from './component/Information/Exchange/ExchangeContainer';
import CurrenciesContainer from './component/Information/Currencies/CurrenciesContainer'



function App(props) {
  return (
    <div className="App">
      <Header />
      <Informat />
      <Route path='/exchange' render={() => <ExchangeContainer />} onClick={() => { props.getNewCourse() }} />
      <Route path='/currencies' render={() => <CurrenciesContainer />} />
    </div>
  );
}

export default App;


