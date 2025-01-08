import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BellaItalia from './Components/BellaItalia';
import AllRestaurants from './Components/AllRestaurants';


function App() {

  return (
    <>
    <BrowserRouter >
       <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/allrestaurants' element={<AllRestaurants />} />
        <Route path='/bellaitalia' element={<BellaItalia />} />
       </Routes>
    </BrowserRouter>
    <Outlet />
    </>
  );
};

export default App;
