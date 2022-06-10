import { Route, Routes } from 'react-router-dom';

import About from './components/Home/About';
import Blogs from './components/Home/Blogs';
import Home from './components/Home/Home';
import ProjectOverview from './components/Home/ProjectOverview';
import Navigation from './components/Shared/Navigation/Navigation';
import NoRoute from './components/Shared/NoRoute/NoRoute';


function App() {
  return (
    <div>
    <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="project/:projectId" element={<ProjectOverview />}></Route>
        <Route path="*" element={<NoRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
