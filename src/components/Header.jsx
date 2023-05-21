import styled from "styled-components";
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector((state) => state.user.name);
  const photo = useSelector((state) => state.user.photo);

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    }); 
  }, [name]);

  const handleAuth = () => {
    const auth = getAuth();
    if (!name) {
      signInWithPopup(auth, provider)
        .then((res) => {
          setUser(res.user);
        })
        .catch((err) => alert(err.message));
    } else {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        navigate("/");
      });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {name ? (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImage src={photo} />
            <DropDown onClick={handleAuth}>
              <span>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      ) : (
        <Login onClick={handleAuth}>LOGIN</Login>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
`;

const NavMenu = styled.div`
  height: 50px;
  width: 300px;
  margin-right: auto;
  margin-left: 25px;
  display: flex;
  flex-flow: row nowrap;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      padding: 2px 5px;
      position: relative;
      line-height: 1.08;

      &:before {
        background-color: rgb(249, 249, 249);
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        position: absolute;
        right: 0px;
        transform-origin: left;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1 !important;
      }
    }

    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: tra;
  }
`;

const UserImage = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  cursor: pointer;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
