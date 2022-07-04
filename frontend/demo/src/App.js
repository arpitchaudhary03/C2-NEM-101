import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Notes } from './Components/Notes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/notes' element={<Notes />}></Route>
      </Routes>

    </div>
  );
}

export default App;
