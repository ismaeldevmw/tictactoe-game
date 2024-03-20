import './styles.scss';
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(1);
  console.log('Hello');

  const onBtnClick = () => {
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  };
  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}>Click me please</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;
