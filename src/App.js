import React from "react";
import Navbar from './components/navbar/navbar'
import './App.css'
import Banner from "./components/banner/banner";
import Rowpost from "./components/rowpost/rowpost"
import {originals,action} from './urls'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost  url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Actions' isSmall/>
      </div>
    );
}

export default App;
