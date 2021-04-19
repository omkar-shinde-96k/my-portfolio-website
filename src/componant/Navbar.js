import React from 'react';
import '../App.scss';
 
function Navbar() {
    return (
        <>
            <div id="nav" className="navbar">
                <div className="menu1"><i className="fa fa-bars"></i></div>
                <ul>
                    <li><a href="#" > Home </a></li>
                    <li><a href="#about" > About Us </a></li>
                    <li><a href="#" > Projects </a></li>
                    <li><a href="https://github.com/omkar-shinde-96k" > Github </a></li>
                    <li><a href="https://www.instagram.com/learn_web_development/" > Insta-Page </a></li>
                </ul>
                <a className="mybtn" href="#" role="button">Contact Us</a>
            </div>

            <div className="main">
                <h1 >Hello,</h1>
                <h2>I'm Omkar Shinde</h2>
                <h1 class="typewrite" data-period="2000" data-type='[ "Web Devloper", "React Developer", "Web Designer"  ]'>
                    <span class="wrap"></span>
                </h1>
                <p>
                    I am passionate about building excellent Website that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
                </p>
                <br/>
                <div style={{ display: "flex" }}>
                    <a href="" className="mybtn text-center"> Hire Me</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="" className="mybtn text-center"> Download CV</a>
                </div>
                <div data-aos="zoom-in" className="social-icons">
                    <a href="https://github.com/omkar-shinde-96k" class="fa fa-github"></a>
                    <a href="https://www.instagram.com/learn_web_development/" class="fa fa-instagram"></a>
                    <a href="https://www.facebook.com/learn_web_development-117663443596435" class="fa fa-facebook-square"></a>
                    <a href="" class="fa fa-envelope"></a>
                </div>

                <br></br>
                <div className="text-center"> 
                    <a href="#about" class=" fa fa-chevron-circle-down" style={{fontSsize:"48px",color:"white",fontSize:"60px",textDecoration:"none"}}></a>
                </div>
                
            </div> 
            <div className="drower">
                <div className="menu2">
                    <i className="fa fa-bars"></i>
                </div> 
                <ul>
                    <li><a href="#" > Home </a></li>
                    <li><a href="#about"> About Us </a></li>
                    <li><a href="#" > Services </a></li>
                    <li><a href="#" > Projects </a></li>
                    <li><a href="https://github.com/omkar-shinde-96k" > Github </a></li>
                    <li><a href="https://www.instagram.com/learn_web_development/" > Instagram </a></li>
                </ul>
            </div>

            <div class="icon-bar">
                <a href="https://github.com/omkar-shinde-96k" class="google"><i class="fa fa-github"></i></a>
                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/learn_web_development/" class="instagram"><i class="fa fa-instagram"></i></a>
                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a> 
            </div>
        </>
    )
}

export default Navbar;
