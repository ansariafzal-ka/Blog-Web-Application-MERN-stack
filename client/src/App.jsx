import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <main className="w-full h-full font-Roboto px-10 md:px-14">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/create-post" element={<CreatePage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
