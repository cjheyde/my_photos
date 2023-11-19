import './App.css';
import Formular from "./components/Formular";
import Register from './components/Register';

function App() {
  return (
    <div className="mainBox">
      <h1 className='pageTitle'>Photos App</h1>
      <Formular />
      <Register />    
    </div>
  )
}

export default App
