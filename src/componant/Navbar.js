import {React,useState } from 'react';   
import '../App.scss';

function Navbar() {

    const [toggle, setToggle] = useState(true)

    const Toggle=()=>{
       setToggle(!toggle)
    }

    const Navlinks = () => {
        return (
            <>
                    <li><a href="#"> Home </a></li>
                    <li><a href="#achivments">Achivments </a></li>
                    <li><a href="#projects" > Projects </a></li>
                    <li><a href="https://github.com/omkar-shinde-96k" > Github </a></li>
                    <li><a href="#about"> About Us </a></li>
                    <li><a href="https://www.instagram.com/learn_web_development/" > Insta page </a></li>
            </>
        )
    }


    return (
        <>
            <div id="nav" className="navbar">
                <div className="menu1" onClick={Toggle}><i className="fa fa-bars"></i></div>
                <ul>
                <Navlinks/>
                </ul>
                <a className="mybtn" href="https://wa.me/919309120138" role="button">Contact Us</a>
            </div>

            <br/>

            <div className="main" itemscope itemtype="https://omkarshinde.vercel.app/">
                <h1  itemprop="omkar shinde"  >Hello,</h1>
                <h2 itemprop="name">I'm Omkar Shinde</h2>
                <h1  itemprop="omkar shinde"  class="typewrite" data-period="2000" data-type='[ "Web Devloper", "React Developer", "Web Designer"  ]'>
                    <span class="wrap"></span>
                </h1>
                <p itemprop="description">
                    I am passionate about building excellent Website that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
                </p>
                <br />
                <div style={{ display: "flex" }}>
                    <a href="https://wa.me/919309120138"  itemprop="Download Resume"  itemtype="https://omkarshinde.vercel.app/"  className="mybtn text-center"> Hire Me</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a itemprop="telephone" href="https://wa.me/919309120138" className="mybtn text-center"> Download Resume</a>
                </div>
                <div className="social-icons">
                    <a href="https://github.com/omkar-shinde-96k" itemprop="Github"  itemtype="https://github.com/omkar-shinde-96k" class="fa fa-github"></a>

                    <a style={{color:"blue"}}  itemprop="telphone" itemprop="url"  href="tel:9309120138" class="fa fa-phone"></a> 

                    <a style={{color:"green"}} itemprop="whatsapp" itemprop="url" href="https://wa.me/919309120138" class="fa fa-whatsapp"></a>

                    <a style={{color:"rgb(234,66,52)"}} itemprop="email" itemprop="url" href="mailto:oshinde796@gmail.com" class="fa fa-envelope"></a>

                    <a style={{color:"#3366ff"}} itemprop="linkedin" itemprop="url" href="https://www.linkedin.com/in/omkar-shinde-992b9120b/" class="fa fa-linkedin"></a>

                    <a style={{color:"#bc2a8d"}} itemprop="instagram" itemprop="url" href="https://www.instagram.com/learn_web_development/" class="fa fa-instagram"></a>
                </div>

                <br></br>
                <div className="text-center">
                    <a href="#about" class=" fa fa-chevron-circle-down" style={{ fontSsize: "48px", color: "white", fontSize: "60px", textDecoration: "none" }}></a>
                </div>

            </div>
            {toggle? "":
            <div className="drower">
                <div className="menu2" onClick={Toggle}>
                    <i className="fa fa-bars"></i>
                </div>
                <ul>
                <Navlinks/>
                </ul>
            </div>
}
            <div class="icon-bar">
                <a href="https://github.com/omkar-shinde-96k" itemprop="github" itemprop="url" class="google"><i class="fa fa-github"></i></a>

                <a href="tel:9309120138" itemprop="Facebook" itemprop="url" class="facebook"><i class="fa fa-phone"></i></a>

                <a href="https://wa.me/919309120138" itemprop="Whatsapp" itemprop="url" class="twitter"><i class="fa fa-whatsapp"></i></a>

                <a href="https://www.instagram.com/learn_web_development/" itemprop="Instagram" itemprop="url" class="instagram"><i class="fa fa-instagram"></i></a>

                <a href="https://www.linkedin.com/in/omkar-shinde-992b9120b/" itemprop="Linkedin" itemprop="url" class="linkedin"><i class="fa fa-linkedin"></i></a>

                <a href="mailto:oshinde796@gmail.com" itemprop="E-mail" itemprop="url" class="facebook"><i class="fa fa-envelope"></i></a>
            </div>
        </>
    )
}

export default Navbar;
