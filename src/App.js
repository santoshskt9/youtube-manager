import logo from './logo.svg';
import './App.css';
import Drawer from './components/Drawer/Drawer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Success from './components/Success/Success';

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Drawer />} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<div>
            <h1>404</h1>
            <h1>Oops, you might be lost! </h1><Link to='/'>Back to Home</Link>
          </div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
