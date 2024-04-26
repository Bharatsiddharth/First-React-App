import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
     <Navbar title="TextUtils"/>
     <div className="container  col-8" >
            <Textform heading="Enter The Text To Analyze"/>
     </div>
    </>
  );
}

export default App;
