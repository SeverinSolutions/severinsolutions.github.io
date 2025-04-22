import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </Router>
        </ThemeProvider>
    );
};

export default App;