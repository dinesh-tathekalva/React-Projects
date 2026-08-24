import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating'
import { useState } from 'react';

function App() {
  const [rating, setRating]=useState(3);
  return (
    <div className="App">
     <StarRating max={5} value={rating} onChange={setRating}></StarRating>
    </div>
  );
}

export default App;
