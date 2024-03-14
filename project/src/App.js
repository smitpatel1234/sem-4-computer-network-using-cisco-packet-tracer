import './App.css';
import Signup from './signup.jsx';
import Signin from './signin.jsx';

import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Classroom from './classroom.jsx';



const App = () => {




  return (
    <>
  <div className='bg'>
    <Router>
      <Routes>
      <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
    
    </div>
    </>
  );
};

export default App;
