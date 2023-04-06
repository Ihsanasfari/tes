import NavigationBar from "./components/NavigationBar";

import Footer from "./components/Footer";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Kosan from "./pages/Kosan";
import Kontrakan from "./pages/Kontrakan";
import Asrama from "./pages/Asrama";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="z-auto w-full">
      <NavigationBar />
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/kosan" element={<Kosan />}></Route>
            <Route path="/kontrakan" element={<Kontrakan />}></Route>
            <Route path="/asrama" element={<Asrama />}></Route>
          </Routes>
        </Router>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
