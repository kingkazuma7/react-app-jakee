export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">styled jsx</p>
        <button className="button">fight</button>
      </div>
      <style jsx="true">
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr;
            place-content: center;
            background-color: antiquewhite;
            margin-bottom: 3rem;
          }
          .title {
            font-size: 20px;
            font-weight: bold;
            color: green;
          }
          .button {
            width: fit-content;
            text-align: center;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  )
}
