import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './page/Login';
import Signup from './page/Signup';
import Cart from './component/Cart';
import Error from './page/Error';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<BrowserRouter>
    <Routes>
    <Route path='/'element={<App/>}>
    </Route>
    <Route path='/login'element={<Login/>}>
    </Route>
    <Route path='/signup'element={<Signup/>}>
    </Route>
    <Route path='/cart'element={<Cart/>}>
    </Route>
    <Route path='*'element={<Error/>}>

    </Route>
    </Routes>
  </BrowserRouter>

 </React.StrictMode>
)