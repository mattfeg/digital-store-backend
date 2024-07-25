import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderLogin from './components/HeaderLogin';
import Login from './components/Login';
import RecuperarSenha from './EsqueciASenha';
import './index.css';
import 'primeicons/primeicons.css';

const App = () => {
  return (
    <>
      <h1 className='text-3xl'>
        
        <Login/>
        {/* <RecuperarSenha/> */}
      </h1>
      
    </>
  );
}

export default App;