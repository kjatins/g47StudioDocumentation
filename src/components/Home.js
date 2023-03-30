import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="home">
      <div className="banner">
        <img src="./images/intro1.jpg" alt="" />
      </div>
      <h1 className='heading'><span>What we <br/>C<span id='headti'>r</span>eate <span id='headti'>!</span></span></h1>
        <div className="tech">
          <img src="./images/tech.jpg" alt="" />
          <h1>Tech</h1><span className='spantext'>
            <p>Here We Create <br />what an tech enthusiast want #TechRealatedContents <br /> So, lets go into the deep dive of<br />
            Tech, Computers and your SmartPhone!</p></span>
          <Link to='/playList/Tech'><button className="button1"  role="button">See More<span className='next'></span></button></Link>
          <i className='box'></i>
        </div>
        <div className="auto">
        <img src="./images/bmw.png" alt="" />
          <h1>Auto</h1><span className='spantext'>
            <p>Habibi Come to AutoClub <br /> If are a real #CGHA Lover Meaning <br /> Cluch Gear HandBrack Accelerator. So,
            Lets drive our <br /> Own Car of Content!</p></span>
          <Link to='/playList/Auto'><button className="button2" role="button">See More<span className='next'></span></button></Link>
        </div>
        <div className="unboxing">
        <img src="./images/youtubeunbox.jpeg" alt="" />
          <h1>Unboxing</h1><span className='spantext'>
           <p> If you Are Big Fan of <br /> New Things Or even you are #gearhead <br />Lets check whats new in our stack!</p></span>
          <Link to='/playlist/Unbox'><button className="button3" role="button">See More<span className='next'></span></button></Link>        </div>
      </div>
    </>
  )
}
