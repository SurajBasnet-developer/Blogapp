import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/homepage";
import Blog from "./components/blog";
import ViewPage from "./components/ViewPage";
import CreatePage from "./components/Create";
import LearnPage from "./components/Learn";
import ContactPage from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/view/:id" element={<ViewPage />} />
          <Route path="/create/dx1575" element={<CreatePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
