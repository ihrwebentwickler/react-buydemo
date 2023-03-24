import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </div>
    );
}

export default App;







/*
import Header from './components/Header/Header';
import './styles/_main.scss';
import Site from "./components/Site/Site";

export default function App() {
    return (
        <>
            <div className="site">
                <Header/>
                <Site/>
            </div>
        </>
    );
}*/