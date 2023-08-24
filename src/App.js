import './App.css';
/* import About from './Components/About'; */
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React, {useState} from 'react';
/* import {Routes, Route} from 'react-router-dom' */

function App() {
  const[mode,setMode]=useState('light');
  const[edText,setEdText]=useState('Enable');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setEdText('Disable');
      document.body.style.backgroundColor='#121212';
     
    }
    else{
      setMode('light');
      setEdText('Enable');
      document.body.style.backgroundColor='#FBFCF8';
    }
  }
  return (<>
  <Navbar title='TextUtils' one='Home' two='About' mode={mode} edText={edText} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  {/* <Routes>
  <Route path="/" element={<Textarea showAlert={showAlert} heading='Enter Your Text Below:' mode={mode}/>}/>
  <Route path="/about" element={<About mode={mode} />}/>
  </Routes> */}
  <Textarea showAlert={showAlert} heading='Enter Your Text Below:' mode={mode}/>
</>
  );
}



export default App;
