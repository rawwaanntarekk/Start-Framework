import React from 'react'
import { Link } from 'react-router-dom'
import style from "./NavBar.module.css"

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark-blue text-uppercase fw-bold p-5 ">
        <div className="container">
            <Link className="navbar-brand text-white" to="home">start framework</Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">
                    <li className="nav-item  ">
                        <Link className="nav-link text-white" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="contact">Contact</Link>
                    </li>
                   
                </ul>
               
            </div>
        </div>
      </nav>
      
    </div>
  )
}
