import './App.css';
import { useState } from 'react';

const App = () => {
  // count is a state variable used to keep track of the number of clicks
  // Using the useState() hook, create a state variable called count with a value of 0
  const [count, setCount] = useState(0);

  // Using the useState() hook, create a state variable called multiplier with a value of 1. 
  // This state variable will be used to keep track of the current number of samosas per click.
  const [multiplier, setMultiplier] = useState(1);

  // Define a function called updateCount() that sets the value of the state variable count to its current value
  // plus multiplier when called
  const updateCount = () => setCount(count + multiplier);

  //  add event handlers to the button of each upgrade. If the user has enough samosas, the upgrade changes the threshold of the multiplier state variable

  // define a function called buyDoubleStuffed() that sets the value of the state variable multiplier to two times its current value if the current number of counts is greater than or equal to 10.
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count-10);
    }
  }

  // define a function called buyPartyPack() that sets the value of the state variable multiplier to five times its current value if the current number of counts is greater than or equal to 100.
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  // Define a function called buyFullFeast() that sets the value of the state variable multiplier to ten times its current value if the current number of counts is greater than or equal to 1000.
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier( multiplier * 10);
      setCount(count - 1000);
    }
  }

  return (
    <div className="App">
      <div className='header'> 
        <h1> Samosa Selector </h1>
        <h2> Count: {count} </h2>
        <img className="samosa" src="https://helpful-griffin-0a0ba5.netlify.app/samosa.png" onClick={updateCount}></img>
        <div className="container">
          <div className='upgrade'>
            <h3> Double Stuffed</h3>
            <p> 2x per click </p>
            <button onClick={buyDoubleStuffed}> 10 samosas </button>
          </div>
          <div className='upgrade'>
            <h3> Party Pack </h3>
            <p> 5x per click </p>
            <button onClick={buyPartyPack}> 100 samosas </button>
          </div>
          <div className='upgrade'>
            <h3> Full Feast </h3>
            <p> 10x per click </p>
            <button onClick={buyFullFeast}> 1000 samosas </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App