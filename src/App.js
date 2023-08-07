import { useState } from 'react';
import './App.css' ;

function App() {
  console.log("app");
  const [count, setCount] = useState(0);
  
  const onClickCountUp = () => {
    setCount(count + 1);
    console.log("setcount");
  }
  
  const onClickCountDown = () => {
    setCount(count - 1);
    console.log("setcount");
  }
  
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>
    </div>
  );
}

export default App;
