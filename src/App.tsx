import React, { useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      Hello from my branch
      <button type="submit" class="button">Отправить</button>
    </div>
  );
}

export default App;
