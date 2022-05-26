import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import SignUp from './components/signup/SignUp';
import HomePage from './components/Homepage/HomePage';
// import Login from './components/login/Login';
function App() {
  return (
    <div className='main_div'>
       <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} /> 
          {/* <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
