import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/alert';

import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  const remveBodyclasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }

  const toogleMode = (cls)=>{
    remveBodyclasses();
    // console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = ' #13135c';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'Text utils - Dark mode';
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
      // document.title = 'Text utils - light mode'
    }
  }

  return (
    <>
    <Router>
     <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
     <Alert alert={alert} />
     <div className="container  col-8" >

     <Switch>
          <Route exact path="/about">
            <About mode={mode}  />
          </Route>
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="text utils - Word Counter Character Counter" mode={mode} />
          </Route>
      </Switch>

            
     </div>
     </Router>
    </>
  );
}

export default App;
