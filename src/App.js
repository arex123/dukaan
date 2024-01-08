import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='container'>
        <Header />
        <Body />
      </div>

      {/* 
Navbar
header
body 
    overview
    transactionList


*/}


    </div>
  );
}

export default App;
