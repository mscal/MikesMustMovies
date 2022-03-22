import React, { useState, useEffect } from 'react';
import './App.css';
import useShowOnScroll from "./useShowOnScroll";
import Papa from 'papaparse';

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

function App() {
    const [data, setData] = useState([]);

    const hidden = useShowOnScroll();
    useEffect(() => {
      Papa.parse('https://docs.google.com/spreadsheets/d/1I-VdIEjcSPe8LYGsVAp-P8Nk6QCEdWGVtXkKeFO-U-4/pub?output=csv', {
          download: true,
          header: true,
          complete: function(results) {
            setData(results.data)
          }
      })
    }, []);
    const mov = Array.from(data);
    console.log(mov, 'loggin');

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mike's Must Movies</h1>
          <h2 className="App-subtitle">A Google Sheets connected project</h2>
          {!hidden && (
            <div className="navigation"><h2 className="nav-title">Mikes Must Movies</h2></div>
          )}
        </header>
        <MovieGallery  data={mov}/>
      </div>
    );
}

export default App;
