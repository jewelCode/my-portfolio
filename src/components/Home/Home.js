import React from 'react';
import Footer from '../Shared/Footer/Footer';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;