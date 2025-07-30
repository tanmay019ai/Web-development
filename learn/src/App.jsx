import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState("Tanmay");
  const [number, setNumber] = useState(0);

  
  const handleChangeName = () => 
    {
      if (userName === "Sarthak") {
        setUserName("Tanmay");
        return;
      }
    setUserName("Sarthak");
  };

  return (
    <div>
      <h1  >User name is {userName}</h1>
      <button onClick={handleChangeName}>Change user name</button>

      <h1>Number is {number}</h1>
      <button id='hi' onClick={() => setNumber(number + 1)}>Increment</button>
      <button id='ho' onClick={() => setNumber(number - 1)}>Decrement</button>
    </div>

  );
}

export default App;
