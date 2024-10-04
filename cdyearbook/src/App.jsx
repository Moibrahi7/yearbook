import './App.css';
import { GradPage } from './pages/gradpage/GradPage.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/landing/Home.jsx';
import { Header } from './components/Header/Header.jsx';
import AddPage from './pages/addpage/AddPage.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element= {<Home/>} />
          <Route path='/:cohort' exact element= {<GradPage/>} />
          <Route path='/:cohort/add' exact element= {<AddPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
