import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/alert';

import { useState } from 'react';

function App() {
  const [mode ,setMode] = useState('light')
  const [alert ,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
        setAlert(null);
    },1500)
  }

  const toogleMode = ()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = ' #13135c';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text utils - Dark mode';
      // setInterval(() => {
      //   document.title = "text util is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "text util install"
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Text utils - light mode'
    }
  }

  return (
    <>
     <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
     <Alert alert={alert} />
     <div className="container  col-8" >
            <Textform showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />
            {/* <About/> */}
     </div>
    </>
  );
}

export default App;
