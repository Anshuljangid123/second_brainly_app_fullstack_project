
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './App.css'

import Dashboard from './pages/dashboard';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';


function App() {
  
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}  />
        <Route path="/signin" element={<Signin/>}  />
        <Route path="/Dashboard" element={<Dashboard/>}  />
      </Routes>
      
    </BrowserRouter>

  </>

}

export default App;
