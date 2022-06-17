import logo from './logo.svg';
import './App.css';
import Form from './component/form.component'
import {
    BrowserRouter as Router,
    Routes,
    Route, useNavigate
} from "react-router-dom";
import {useEffect, useState} from 'react';
import Home from "./page/home/home.component";
import Login from "./page/login/login.component";

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    useEffect(() => {
        let authToken = localStorage.getItem('token')

        if (authToken) {
            // navigate('/home')
        }

        if (!authToken) {
            // navigate('/login')
        }
    }, [])
    const handleAction = (state) => {
        // switch (state) {
        //     case "login":
        //         login(email,password)
        //             .then(response=>{
        //                 console.log(response)
        //                 localStorage.setItem('token',response._tokenResponse.refreshToken)
        //
        //                 // navigate('/home')
        //
        //             })
        //         break
        //     case "register":
        //         register(email,password)
        //         break
        // }

    }


    return (
      <Router>
          <div className="App">
              <>
                  <Routes>
                      <Route exact path="/login" element={
                          <Login title="Login"
                                />} />
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
