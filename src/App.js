import './asset/css/App.css';
import {ToastContainer} from 'react-toastify'
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <ToastContainer/>
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
