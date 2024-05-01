import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import { useState } from 'react';

function App() {
  const [mode ,setMode] = useState('light')

  const toogleMode = ()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#00009c72';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
     <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
     <div className="container  col-8" >
            <Textform heading="Enter The Text To Analyze" mode={mode} />
            {/* <About/> */}
     </div>
    </>
  );
}

export default App;
