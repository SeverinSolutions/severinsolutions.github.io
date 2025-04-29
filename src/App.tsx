import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Theme from "./theme";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <main style={{flex: 1}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
