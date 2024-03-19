import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Exchanges from './pages/Exchanges';
import Coins from './pages/Coins';
import CoinDetails from './pages/CoinDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/exchanges"  element={<Exchanges/>}/>
                <Route path="/coins"  element={<Coins/>}/>
                <Route path="/coin:id"   element={<CoinDetails/>}/>
              
         </Routes>
         <Footer/>
    </div>
  );
}

export default App;

