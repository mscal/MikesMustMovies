import React, { useState } from 'react';
import './App.css';
import Tabletop from 'tabletop';


function MovieGallery({data}) {
  return <div className="movie-gallery">
    {
      data.map(obj => {
        return (
            <div className="movie-obj" key={obj.movie}>
              <p>{obj.movie}</p>
              <p>{obj.dateofrelease}</p>
              <img alt={obj.movie + " poster"} src={obj.img} />
            </div>
          )
      })
    }
  </div>;
}

function SheetConnect(setData) {
  Tabletop.init({
    key: '1I-VdIEjcSPe8LYGsVAp-P8Nk6QCEdWGVtXkKeFO-U-4',
    callback: googleData => {
    setData(
        googleData
    )
    },
    simpleSheet: true
  })
}

function App() {
    const [data, setData] = useState([]);
    SheetConnect(setData);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mike's Must Movies</h1>
          <h5 className="App-title">A Google sheet connected project</h5>
        </header>
        <MovieGallery  data={data}/>
      </div>
    );
}

export default App;
