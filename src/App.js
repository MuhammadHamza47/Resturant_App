// import logo from './logo.svg';
import './App.css';
import BestBurger from './Components/BestBurger/BestBurger';
import BigBurger from './Components/BigBurger/BigBurger';
import Chef from './Components/Chef/Chef';
import Footer from './Components/Footer/Footer';
import Group from './Components/Group/Group';
import Home from './Components/Home/Home';
import Package from './Components/Popular/Package';
import Statistics from './Components/Statistics/Statistics';
import Update from './Components/Update/Update';


function App() {
  return (
    <>
    <Home/>
    <Chef/>
    <BestBurger/>
    <BigBurger/>
    <Statistics/>
    <Package/>
    <Group/>
    <Update/>
    <Footer/>
    </>
  );
}

export default App;
