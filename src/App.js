
import './App.css';
import Header from './component/Header/Header'
import Informat from './component/Information/Informat'
import Сurrencies from './component/Information/Currencies/Currencies'
import { Route} from 'react-router-dom'
import ExchangeContainer from './component/Information/Exchange/ExchangeContainer';




function App(props) {
  return (
      <div className="App">
        <Header />
        <Informat />
        <Route path='/exchange' render={() => <ExchangeContainer />} onClick={() => { props.getNewCourse() }}/>
        <Route path='/currencies' render={() => <Сurrencies />} />
      </div>
  );
}

export default App;


