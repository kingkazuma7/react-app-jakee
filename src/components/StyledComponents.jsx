import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <SContainer>
        <p className="title">Styled Components</p>
        <SButton className="button">fight</SButton>
      </SContainer>
    </>
  )
}

const SContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  background-color: antiquewhite;
  margin-bottom: 3rem;
`;
const SButton = styled.button`
  width: fit-content;
  text-align: center;
  margin: 0 auto;
`;