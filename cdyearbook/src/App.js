import './App.css';
import { GradPage } from './pages/gradpage/GradPage.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/landing/Home.jsx';
import { Header } from './components/Header/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/:cohort' exact element= {<GradPage/>} />
        <Route path='/' exact element= {<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
