import './App.css';
import Home from './components/Home.js';
import Login from './components/Login';
import Support from './components/Support';
import About from './components/About';
import Tech from './components/playList/Tech';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import React,{useState} from 'react';
import Unboxing from './components/playList/Unbox';
import Auto from './components/playList/Auto';

function App() {
    // const valuenone = 'none';
    const [show , setShow]= useState(false);

    const showLog=()=>{
        setShow(!show)
    }
    return (
        <>
            <Router>
            <header>
                <div className="navbar">
                    <div className="logo">
                        <a href="main.css"><img src="./images/jk0icon.png" height="45px" /></a>
                        <p>JKTHECREATOR</p>
                    </div>
                    <nav>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Support">Support</Link></li>
                        <li><Link to="" className=''><button className="button0" onClick={showLog} role="button">login</button></Link></li>
                    </nav>

                </div>
            </header>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/About" element={<About/>}/>
                    <Route exact path="/Support" element={<Support/>} />
                    <Route exact path="/playList/Tech" element={<Tech/>}/>
                    <Route exact path="/playList/Auto" element={<Auto/>}/>
                    <Route exact path="/playList/Unbox" element={<Unboxing/>}/>
                </Routes>
            </Router>
            {show && <Login />}
            <footer>
                <div className="foot">
                    <li>
                        <h1>Stay Connected</h1>
                    </li>
                    <li>
                        <h2>Haryana, India</h2>
                    </li>
                    <li>
                        <h3>Copyright &copy; 2022 G47Studio</h3>
                    </li>
                    <li>
                        <h4>(+91) 7746845046</h4>
                    </li>
                    <div className="slogo">
                        <a href="https://discord.com/invite/QTFTbAbG"><img src="./images/discord-2-24.png" /></a>
                        <a href="https://github.com/kumarjatinsheoran"><img src="./images/github.png" height='24px' /></a>
                        <img src="./images/instagram.png" />
                        <a href="https://www.linkedin.com/in/jatin-kumar-678a91258"><img src="./images/linkedin-3-24.png" /></a>
                        <a href="https://www.youtube.com/@jkthecreator/"><img src="./images/yt.png" height='24px' /></a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
