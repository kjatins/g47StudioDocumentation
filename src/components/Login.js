import React from 'react'

export default function Login() {
  // // user credentials
  // let available_user_name = Array("Adam", "G47studio"),
  //   available_user_pass = Array("1989-30", "2002-26")


  // for (var i = 0; i < available_user_name.length; i++) {
  //   let user_names = available_user_name[i];
  //   let user_passws = available_user_pass[i];
  //   document.querySelector("#available_accounts").insertAdjacentHTML("beforend", "<div></div>" + user_names + "<div></div" + user_passws + "<div></div>");
  // }
  // document.querySelector(".lbtn").click(function () {
  //   let user_name = document.querySelector('.user').value,
  //     user_pass = document.querySelector('.pass').value,
  //     btn = document.querySelector('.lbtn'),
  //     result = document.querySelector('.result');
  //   if (document.querySelector(".lbtn").inArray(user_name, available_user_name) >= 0) {
  //     if (available_user_name.indexOf(user_name) == available_user_pass.indexOf(user_pass)) {
  //       result.html("you welcome:" + user_name);
  //     }
  //     else {
  //       result.html("you selected wrong password");

  //     }
  //   } else {
  //     result.html("this name doe not registerd ");

  //   }
  // });
  return (
    <div className="logpage">
      <div className='Login'>
        <div className="lback">
          <h1>Welcome To <br /> Our Login Page!</h1>
          <h4>PRO Tip :- Adam was born in 1989-30 <br /> And G47studio was created in 2002-26</h4>
        <div id="available_accounts"></div>
        </div>
        <div className="lmain">
          <span className='closebtn'></span>
          <span className='lmainback'></span>
          <div className="linput">
            <input className='user' type="text" placeholder='Enter User Name' /><span className='useimg'></span>
            <input className='pass' type="password" placeholder='Enter Password' /><span className='pasimg'></span>
          </div>
          <button className='lbtn' type="submit">Log in</button>
          <div className="clear"></div>
          <div className="result"></div>
        </div>
      </div>
      <div className="userprofile">
        <button className='darkmode'>
          <label className="switch">
            <input type="checkbox" />
            <span className='slider'></span>
          </label>
          Dark Mode!</button>
        <button className='logout'><span className='logimg'></span> Log Out</button>
      </div>
    </div>
  )
}
