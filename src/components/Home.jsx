import styled from "styled-components";
import { ImgSlider } from "./ImgSlider";
import { Viewers } from "./Viewers";
import { Recommends } from "./Recommends";
import { NewDisney } from "./NewDisney";
import { Originals } from "./Originals";
import { Trending } from "./Trending";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setMovies } from "../features/movie/movieSlice";

export const Home = () => {
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const db = getDatabase();
    const refData = ref(db, "movies");
    onValue(refData, (snapshot) => {
      const data = snapshot.val();
      data.shift();
      data.forEach((e) => {
        switch (e.type) {
          case "recommend":
            recommends = [
              ...recommends,
              {
                id: uuidv4(),
                ...e,
              },
            ];
            break;

          case "new":
            newDisneys = [
              ...newDisneys,
              {
                id: uuidv4(),
                ...e,
              },
            ];
            break;

          case "original":
            originals = [
              ...originals,
              {
                id: uuidv4(),
                ...e,
              },
            ];
            break;

          case "trending":
            trending = [
              ...trending,
              {
                id: uuidv4(),
                ...e,
              },
            ];
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
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
