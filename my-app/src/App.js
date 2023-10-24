import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Button } from 'react-bootstrap';
import Home from './pages/home';
import { Route, Router, Routes, RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  );
}


export default App;
