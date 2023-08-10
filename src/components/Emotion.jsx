/** @jsxImportSource @emotion/react */
/** @jsx jsx **/
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function Emotion() {
  const containerStyle = css`
    display: grid;
    grid-template-columns: 1fr;
    place-content: center;
    background-color: antiquewhite;
    margin-bottom: 3rem;
  `;
  const titleStyle = css({
    margin: 0,
    color: "darkyellow",
  });
  return (
    <div>
      <div css={containerStyle}>
        <p css={titleStyle}>Emotion</p>
        <SButton>fight</SButton>
      </div>
    </div>
  )
}

const SButton = styled.button`
  width: fit-content;
  text-align: center;
  margin: 0 auto;
`;

export default Emotion