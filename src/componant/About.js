import React from 'react'


const About = () => {

    const Skill = (props) => {
        return (
            <div>
                <div className="skill">
                    <p className="skill-name">{props.name}</p>
                    <div className="progress">
                        <div id={props.id} className="progress-bar progress-bar-striped  progress-bar-animated" >{props.percent}</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <h1 id="about" data-aos="zoom-in" className="text-center p-4 pb-0"> About Us </h1>

            <div className="container-fluid">
                <div className="row">
                    <div data-aos="zoom-in" className="about-child text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12  ">
                        <div className="boxshadow">
                            <i className="fa fa-rocket"></i>
                            <h2>Fast</h2>
                            <p>Fast load times and lag free interaction, my highest priority.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="about-child text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 ">
                        <div className="boxshadow">
                            <i className="fa fa-mobile-phone"></i>
                            <h2>Responsive</h2>
                            <p>My layouts will work on any device, big or small.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="about-child text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12   ">
                        <div className="boxshadow">
                            <i className="fa fa-lightbulb-o"></i>
                            <h2>Intuitive</h2>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                    </div>
                    <div className="about-child text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12    ">
                        <div data-aos="zoom-in" className="boxshadow">
                            <i className="fa fa-rocket"></i>
                            <h2>Dynamic</h2>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="container " >
                <div className="row">
                    <div data-aos="fade-right"  className="about-text text-center col-xl-6 col-sm-12 p-5 ">
                        <img src="../images/omkar.jpg" width="300px" height="300px"></img>
                        <h1> Who's this guy?</h1>
                        <p> I'm a Full Stack Web Developer ,
                        I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. .</p>
                    </div>

                    <div data-aos="fade-right" className="text-center d-flex flex-column justify-content-center  col-xl-6 col-sm-12 ">

                        <div className="skills-box">
                            <Skill id="html" name="HTML" percent="90%" />
                            <Skill id="css" name="CSS & Sass" percent="90%" />
                            <Skill id="javascript" name="Javascript" percent="75%" />
                            <Skill id="bootstrap" name="Bootstrap" percent="90%" />
                            <Skill id="jq" name="jQuery" percent="80%" />
                            <Skill id="react" name="React js" percent="75%" />
                            <Skill id="node" name="Node Js" percent="75%" />
                            <Skill id="mongo" name="MongoDB" percent="75%" />
                        </div>

                    </div>

                </div>
            </div>




        </div>
    )
}

export default About;
