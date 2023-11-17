import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Store from './components/context/store';
import MainRouter from './components/routing/router/MainRouter';
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <Store>
      <BrowserRouter>
         <MainRouter/>
      </BrowserRouter>
    </Store>
  );
}

export default App;
