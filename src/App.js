import { useCallback, useMemo, useState } from 'react';
import './App.css' ;
import { ChildArea } from './components/ChildArea';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';

function App() {
  const [text, setText] = useState(); // テキストの入力check
  const [open, setOpen] = useState(false); // 要素の表示/非表示check
  
  // テキストの変更値取得
  const onChangeText = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  }
  
  // ボタンクリック表示反転
  const onClickOpen  = () => {
    setOpen(!open);
  }
  
  // ボタンクリックで非表示
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  
  // 変数のmemo化
  const temp = useMemo(() => 1 + 3, []);
  
  return (
    <div className="App">
      <input type="text" onChange={onChangeText} />
      <br /><br />
      <button onClick={onClickOpen}>表示/非表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}

export default App;
