import React, { useState } from 'react';

import './App.css';
import { Modal } from './components/Modal';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      Hello from my branch
      <button type="submit" className="button">Отправить</button>
      <Modal />
    </div>
  );
}

export default App;
