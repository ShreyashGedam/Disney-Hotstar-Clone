import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
