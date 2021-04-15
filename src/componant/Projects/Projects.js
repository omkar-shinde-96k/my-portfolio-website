import React from 'react'
import './Projects.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import Top from './Top'
import Reactjs from './React'
import MERN from './MERN'
import CSS from './CSS'

function Projects() {
    return (
        <>
            <Router>
                <h1 data-aos="zoom-in" id="about" className="text-center p-1 pb-0"> Projects </h1>
                <Switch>
                    <div data-aos="zoom-in" className="container">
                        
                        <div class="row" data-aos="zoom-in">
                            <div className=" project-nav text-center col-xl-3">
                                <a><NavLink class="" to="/">Top Projects</NavLink> </a>
                            </div>

                            <div className="project-nav text-center col-xl-3">
                                <a><NavLink class="" to="/react">React Js</NavLink> </a>
                            </div>

                            <div className="project-nav text-center col-xl-3">
                                <a><NavLink class="" to="/MERN">MERN Stack </NavLink> </a>
                            </div>

                            <div className="project-nav text-center col-xl-3">
                                <a><NavLink class="" to="/CSS">CSS Design</NavLink>  </a>
                            </div> 
                        </div>

                    </div>
                   
                </Switch>
                <br/> <br/>  
                <Switch>
                    <Route exact path='/' component={Top} />
                    <Route path='/React' component={Reactjs} />
                    <Route path='/MERN' component={MERN} />
                    <Route path='/CSS' component={CSS} />
                </Switch>
            </Router>
        </>
    )
}

export default Projects
