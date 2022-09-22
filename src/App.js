import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode enabled', 'success')
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode enabled', 'success')
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    
<Navbar title="TextUtilsProps" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
  {/* <About/> */}
  

</div>
</>
 );
 
}

export default App;
