import './App.css';
import { Outlet } from 'react-router';
import Footer from "./components/Footer";
import Header from "./components/Header"


function App(): JSX.Element {
  return (
    <div>
    <Header/>
    <Footer/>
    <Outlet/>
    </div>
  );
}

export default App;
