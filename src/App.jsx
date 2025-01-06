import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AllRestaurants from './Components/AllRestaurants';


function App() {

  return (
    <>
    <BrowserRouter >
       <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/allrestaurants' element={<AllRestaurants />} />
       </Routes>
    </BrowserRouter>
    <Outlet />
    </>
  );
};

export default App;
