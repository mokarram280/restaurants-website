import './App.css';
import CardSlider from './Components/CardSlider';
import Company from './Components/Company';
import LatestTrends from './Components/LatestTrends';
import NavbarArea from './Components/NavbarArea';

function App() {

  return (
    <>
      <NavbarArea />
      <Company />
      <CardSlider />
      <LatestTrends />
    </>
  );
};

export default App;
