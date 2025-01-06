import './App.css';
import AllRestaurants from './Components/AllRestaurants';
import Footer from './Components/Footer';
import NavbarArea from './Components/NavbarArea';
import HomePage from './HomePage';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
    <NavbarArea />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/allrestaurants' element={<AllRestaurants />} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
};

export default App;
