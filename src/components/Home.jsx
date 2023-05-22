import styled from "styled-components";
import { ImgSlider } from "./ImgSlider";
import { Viewers } from "./Viewers";
import { Recommends } from "./Recommends";

export const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
    </Container>
  );
};

const Container = styled.main`
  background-image: url("/images/home-background.png");
  background-size: cover;
  position: relative;
  top: 72px;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
`;
