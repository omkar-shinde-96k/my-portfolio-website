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
                <h1 id="about" className="text-center p-4 pb-0"> Projects </h1>
                <div>
                    <Switch>
                        <ul>
                            <a class="project-nav  " ><NavLink class="" to="/">Top</NavLink> </a>
                            <li class="project-nav"><NavLink class="" to="/react">React Js</NavLink> </li>
                            <li class="project-nav"><NavLink class="" to="/MERN">MERN Stack </NavLink> </li>
                            <li class="project-nav"><NavLink class="" to="/CSS">CSS Design</NavLink> </li>
                        </ul>
                    </Switch>
                </div>
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
