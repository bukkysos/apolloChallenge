import React from 'react'
import { Logo } from "../assets/images";


export const Header = () => {
    return (
        <nav className="navbar navbar-expand-md p-0 mb-3 ">
            <div className="container-fluid apollo_nav">
                <img src={Logo} alt="" className="h-75 border" />
                <span className="navbar-brand">Hacker News</span>
                <div className=" navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item px-2 my-auto">new</li>
                        <li className="nav-item px-2 my-auto">past</li>
                        <li className="nav-item px-2 my-auto">ask</li>
                        <li className="nav-item px-2 my-auto">show</li>
                        <li className="nav-item px-2 my-auto">jobs</li>
                        <li className="nav-item px-2 my-auto">submit</li>
                    </ul>
                    <div className="d-flex navbar-nav">
                        <li className="nav-item px-2 my-auto">login</li>
                    </div>
                </div>
            </div>
        </nav>
    )
}
