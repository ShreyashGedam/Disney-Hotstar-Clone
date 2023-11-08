import { VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Recommends = () => {
  const recommends = useSelector((state) => state.movie.recommend);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Contain>
        {recommends ? (
          recommends.map((e) => (
            <Wrap key={e._id}>
              <Link to={`/detail/${e.type}/${e._id}`}>
                <img src={e.cardImg} alt="" />
              </Link>
            </Wrap>
          ))
        ) : (
          <Skeleton>
            <p>...Loading</p>
          </Skeleton>
        )}
      </Contain>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Skeleton = styled.div`
  background-color: rgba(249, 249, 249, 0.1);
  width: 100%;
  height: 180px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contain = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 500ms ease-in-out 0s;
    border-radius: 10px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
