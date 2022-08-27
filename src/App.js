import "./App.css";
import CartContainer from "./CartContainer";
import FirstPage from "./FirstPage";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import MainSection from "./MainSection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/mainSection" element={<MainSection />} />
      </Routes>
    </>
  );
}

export default App;
