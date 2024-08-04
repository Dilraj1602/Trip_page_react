import { useState } from "react";
import "./App.css";
import Page from "./component/Page"
import data from './data'
function App() {
 
  const [Places,setPlaces] =useState(data);

  function removePlace(id){
    const newPlaces = Places.filter((place) => place.id !== id);
    setPlaces(newPlaces);
  }

  if(Places.length === 0){

    return(
      <div className="refresh">
      <h2>No Tours Left</h2>
      <button className="btn-white" onClick={() => setPlaces(data)}>
        Refresh
      </button>
    </div>
    );

  }

  return (
    <div className="App">
    <Page Places={Places} removePlace={removePlace} ></Page>
    </div>
  );
}

export default App;
