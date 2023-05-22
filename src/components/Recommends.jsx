import styled from "styled-components";

export const Recommends = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Contain>
        <Wrap>1</Wrap>
        <Wrap>2</Wrap>
        <Wrap>3</Wrap>
        <Wrap>4</Wrap>
      </Contain>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Contain = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div``;
