// 親→子のprops変更を親だけにとどめる
import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "lightyellow"
}

export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("childAreaがレンダリング");
  
  // 重いデータ
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  
  return (
    <>
    {open ? (
        <div style={style}>
          <h2>ChildArea コンポーネント</h2>
        </div>
      ) : null}
    </>
  )
});