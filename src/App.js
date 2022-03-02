import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const startVinyls = [];
  const [currentVinyls, setVinyls] =  useState(startVinyls);

  const vinylList = currentVinyls.map(vinyl => 
    <li key={vinyl._id}>
      {vinyl.artist}: {vinyl.album}
    </li>
  )

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    
    fetch('http://localhost:3000/vinyls/seeAll', requestOptions)
      .then(response => response.json())
      .then(data => setVinyls(data.vinyls))
  }

    const handleInputChange = (event) => {
      event.preventDefault();
      const requestOptions = {
        method: 'POST',
        redirect: 'follow',
        body: `{}`}
      
      fetch('http://localhost:3000/vinyls/', requestOptions)
        .then(response => response.json())
        .then(data => setVinyls(data.vinyls))

    }
    
    
  return (
    <div className="App">
      <button onClick={handleSubmit}>Submit</button>
      <ul>{vinylList}</ul>
      <form className='coordForm' onSubmit={handleSubmit}>
        <input type='text'  name='artist' placeholder='artist' value={artist} onChange={handleInputChange}/>
        <input type='text'  name='album' placeholder='album' value={album} onChange={handleInputChange}/>
        <button>Find</button>
      </form>
    </div>
  );
}

export default App;
