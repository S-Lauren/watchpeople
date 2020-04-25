import React from 'react';
import logo from './logo.svg';
import MetaTags from 'react-meta-tags';
import './App.css';
import MeinRouter from "./components/MeinRouter";
function App() {
  return (
    <div className="App">
      <MetaTags>
            <title>Watch People</title>
            <meta name="watch people" content="react app" />
            <meta property="og:title" content="Watch People" />
            <meta property="og:image" content="../public/watchpoeple_preview.png" />
      </MetaTags>
      <MeinRouter /> 
    </div>
  );
}

export default App;
