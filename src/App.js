import ReactFCCtest from 'react-fcctest';

import './App.css';

import Quoter from './quoter/index';
import Footer from './quoter/Footer';

function App() {
  return (
    <div className="app">
      <ReactFCCtest />
      <div id="content">
        <Quoter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
