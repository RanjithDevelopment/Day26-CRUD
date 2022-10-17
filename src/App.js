import React from 'react';
import Tablecomponent from './Components/Tablecomponent';
import Navbar from './Components/navbar'
import Form from './Components/form ';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/Navbar" element={< Navbar/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path='/Tablecomponent' element={<Tablecomponent/>}/>
        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
