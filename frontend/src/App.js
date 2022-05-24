import './App.css';
import NavBar from './components/Nav/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from './components/Signup/SignUp';
import SignIn from './components/Signin/SignIn';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/footer/Footer';
import AccordianHold from './components/accordianhold/AccordianHold';
function App() {
  return (
    <div className='main_div'>
      <NavBar />
       <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} /> 
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <AccordianHold />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
