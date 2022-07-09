import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';




function App() {

  let [ itemList, setItemList ] = useState( [] );

useEffect(() => {
    
  getItems();
    
}, [] )


// GET request 
  const getItems = () => {
    axios.get('/gallery')
    .then((response) => {
    console.log(response.data)
    setItemList(response.data)
    }).catch((error) => {
        console.log( 'error in GET', error)
    })
};















    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        {itemList.map((item, i) => {
            return (<img key={i} className="images" src={item.path}/>)
        })}  
      </div>

    );
}

export default App;
