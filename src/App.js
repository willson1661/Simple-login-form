import "./styles.css";
import React from "react";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import MyButton from "./component/MyButton";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";




const App = () => {

  return (
    <div class="App">
   
    
        <Router>
        <MyButton to=" " />
          <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="Loading...">
                <Home />
              </React.Suspense>
            }
          />
          <Route
              path="/Signup"
              element={
                <React.Suspense fallback="Loading...">
                  <Signup/>
                </React.Suspense>
              }
            />
               <Route
              path="/Login"
              element={
                <React.Suspense fallback="Loading...">
                  <Login/>
                </React.Suspense>
              }
            />
              </Routes>
              </Router>
    

    </div>
  );
};
export default App;
