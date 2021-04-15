import React from 'react'

function ProjectCom() {
    return (
        <>
            <div className="project-inner">
                <img src="../../images/bg.jpg" width="100%" height="60%" />
                <p>Fast load times and lag free interaction, my highest priority.</p>
                <div class="d-flex justify-content-around">
                    <a href="/" style={{ color: "black", border: "1px solid black" }} class="mybtn">priview</a>
                    <a href="/" style={{ color: "black", border: "1px solid black" }} class="mybtn">Source Code</a>
                </div>
            </div>
        </>
    )
}


function Top() {
    return (
        <>
            <div className="container-fluid">
                <div className="row project-row" >
                    <div data-aos="zoom-in" className="project-outer text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12  ">
                        <ProjectCom />
                    </div>
                    <div data-aos="zoom-in" className="project-outer text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 ">
                        <ProjectCom />
                    </div>
                    <div data-aos="zoom-in" className="project-outer text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12   ">
                        <ProjectCom />
                    </div>
                    <div data-aos="zoom-in" className="project-outer text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12    ">
                        <ProjectCom />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top;
