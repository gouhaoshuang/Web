import React, { Component } from "react";
import NavBar from "./navbar";
import Linux from "./linux";
import Web from "./web";
import Django from "./django";
import Home from "./home";
import NotFound from "./notFound";
import WebContent from "./webContent";
import { Routes , Route ,Navigate} from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <div className="container">
            <Routes>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Linux" element={<Linux></Linux>}>
                    <Route  path="/Linux/homework" element={<h4> homework 的内容</h4>}></Route>
                    <Route  path="/Linux/terminal" element={<h4> terminal 的内容</h4>}></Route>
                    <Route  path="/Linux/*" element={<h4> 其他</h4>}></Route>

                </Route>
                <Route path="/Django" element={<Django></Django>}></Route>   
                <Route path="/Web" element={<Web></Web>}></Route>   
                <Route path="/Web/content/" element={<WebContent></WebContent>}></Route>

                <Route path="/404" element={<NotFound></NotFound>}></Route>

                <Route path="*" element={<Navigate replace to="/404/"></Navigate>}>  </Route>

            </Routes>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
