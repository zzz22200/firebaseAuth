import logo from './logo.svg';
import './App.css';
import Form from './component/form.component'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { useState } from 'react';
import {login, register} from "./service/firebaseAuth.service";
import Home from "./page/home/home.component";


function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleAction = (state) => {
        switch (state) {
            case "login":
                login(email,password)
                    .then(response=>{
                        console.log(123)
                        console.log(response)
                        localStorage.setItem('token',response._tokenResponse.refreshToken)
                    }).catch(error=>{
                        console.log(error)
                })
                break
            case "register":
                register(email,password)
                    .then((response) => {
                        localStorage.setItem('token',response._tokenResponse.refreshToken)
                        console.log(123)

                        console.log(response)
                    })
                break
        }

    }


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
                      <Route
                          path='/home'
                          element={
                              <Home />}
                      />
                  </Routes>
              </>
          </div>
      </Router>
  );
}

export default App;
