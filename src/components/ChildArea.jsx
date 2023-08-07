const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "lightyellow"
}

export const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
    {open ? (
        <div style={style}>
          <h2>ChildArea コンポーネント</h2>
        </div>
      ) : null}
    </>
  )
}