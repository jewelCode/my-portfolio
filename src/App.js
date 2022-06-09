import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About';
import Home from './components/Home/Home';
import Navigation from './components/Shared/Navigation/Navigation';


import NoRoute from './components/Shared/NoRoute/NoRoute';


function App() {
  return (
    <div>
    <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NoRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
