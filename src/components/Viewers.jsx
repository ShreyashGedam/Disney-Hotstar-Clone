import styled from "styled-components";

export const Viewers = () => {
  return (
    <Container>
      <h2>1</h2>
      <h2>2</h2>
      <h2>3</h2>
      <h2>4</h2>
      <h2>5</h2>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
