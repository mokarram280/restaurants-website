import './App.css';
import Activities from './Components/Activities';
import CardSlider from './Components/CardSlider';
import Company from './Components/Company';
import CoolRestaurants from './Components/CoolRestaurants';
import Footer from './Components/Footer';
import LatestTrends from './Components/LatestTrends';
import NavbarArea from './Components/NavbarArea';

function App() {

  return (
    <>
      <NavbarArea />
      <Company />
      <CardSlider />
      <LatestTrends />
      <CoolRestaurants />
      <Activities />
      <Footer />
    </>
  );
};

export default App;
