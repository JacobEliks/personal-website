import CustomNavbar from './Navbar';
import Home from './Home';
import Form from './Form';
import PortfolioPage from './PortfolioPage';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomNavbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/portfolio' element={<PortfolioPage />}></Route>
          <Route path='/contact' element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
