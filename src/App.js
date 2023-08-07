import { useState } from 'react';
import './App.css' ;
import { ChildArea } from './components/ChildArea';

function App() {
  const [text, setText] = useState();
  const [open, setOpen] = useState(false);
  
  // テキストの変更値取得
  const onChangeText = (e) => {
    setText(e.taget.value);
  }
  
  // ボタンクリック表示反転
  const onClickOpen  = () => {
    setOpen(!open);
  }
  
  return (
    <div className="App">
      <input type="text" onChange={onChangeText} />
      <br /><br />
      <button onClick={onClickOpen}>表示/非表示</button>
      <ChildArea open={open} />
    </div>
  );
}

export default App;
