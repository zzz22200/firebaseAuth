import logo from './logo.svg';
import './App.css';
import Form from './component/form.component'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { useState } from 'react';
import { app } from './firebase-config';


const handleAction = (state) => {
    console.log(state)
}

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    return (
      <Router>
          <div className="App">
              <>
                  <Routes>
                      <Route path='/login' element={
                          <Form title="Login"
                                setEmail={setEmail}
                                setPassword={setPassword}
                                handleAction={() => handleAction("login")}/>} />
                      <Route path='/register' element={
                          <Form title="Register"
                                setEmail={setEmail}
                                setPassword={setPassword}
                                handleAction={() => handleAction("register") }/>} />
                  </Routes>
              </>
          </div>
      </Router>
  );
}

export default App;
