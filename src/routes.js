import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Detalhes from './pages/Detalhes';

function RoutesApp() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/contato' element={ <Contato /> } />
          <Route path='/detalhes' element={ <Detalhes /> } />
        </Routes>
      </BrowserRouter>
  )
}

export default RoutesApp;
