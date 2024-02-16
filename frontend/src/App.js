import AdminPanel from "./Pages/AdminPanel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import HomePage from "./homepage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
