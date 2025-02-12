import './App.css';
import { GradPage } from './pages/gradpage/GradPage.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/landing/Home.jsx';
import { Header } from './components/Header/Header.jsx';
import AddPage from './pages/addpage/AddPage.jsx';
import LoginPage from './pages/loginpage/LoginPage.jsx';
import  NotFound  from './pages/404page/404Page.jsx';
import { AuthProvider } from './pages/loginpage/AuthContext.jsx';


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element= {<Home/>} />
          <Route path='*' exact element= {<NotFound/>} />
          <Route path='/home' exact element= {<Home/>} />
          <Route path='/login' exact element= {<LoginPage/>} />
          <Route path='/24.1' exact element= {<GradPage cohort={"24.1"} />} />
          <Route path='/24.4' exact element= {<GradPage cohort={"24.4"} />} />
          <Route path='/24.1/add' exact element= {<AddPage cohort={"24.1"}/>} />
          <Route path='/24.4/add' exact element= {<AddPage cohort={"24.4"}/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
