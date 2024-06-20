import logo from './logo.svg';
import './App.css';
import { GradListGrid } from './components/gradList/grid/GradListGrid';
import { GradListCarousol } from './components/gradList/carasol/GradListCarousol';

function App() {
  return (
    <div className="App">
      <GradListCarousol/>
      <GradListGrid/>
    </div>
  );
}

export default App;
