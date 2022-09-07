import React, { useState, useEffect } from "react";
import {
    NavLink
} from "react-router-dom";

const NavBar = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY >= 800);
        };

        window.addEventListener('scroll', handleScroll);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return <>
        <div className="container-fluid px-0 d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-lg-4 text-center bg-secondary py-3">
                    <div className="d-inline-flex align-items-center justify-content-center">
                        <i className="bi bi-envelope fs-1 text-primary me-3"></i>
                        <div className="text-start">
                            <h6 className="text-uppercase mb-1">Email Us</h6>
                            <span>info@example.com</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-center bg-primary border-inner py-3">
                    <div className="d-inline-flex align-items-center justify-content-center">
                        <a href="index.html" className="navbar-brand">
                            <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-dark me-3"></i>CakeZone</h1>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 text-center bg-secondary py-3">
                    <div className="d-inline-flex align-items-center justify-content-center">
                        <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                        <div className="text-start">
                            <h6 className="text-uppercase mb-1">Call Us</h6>
                            <span>+012 345 6789</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav className={`navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0 ${isFixed ? "sticky-top" : ""}`}>
            <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-primary me-3"></i>CakeZone</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto mx-lg-auto py-0">
                    <NavLink className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"} to="about">About Us</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"} to="menu">Menu & Pricing</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"} to="chef">Master Chefs</NavLink>
                    {/* <a href="index.html" className="nav-item nav-link active">Home</a> */}
                    {/* <a href="about.html" className="nav-item nav-link">About Us</a> */}
                    {/* <a href="menu.html" className="nav-item nav-link">Menu & Pricing</a> */}
                    {/* <a href="team.html" className="nav-item nav-link">Master Chefs</a> */}
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            {/* <a href="service.html" className="dropdown-item">Our Service</a> */}
                            <NavLink className={"dropdown-item"} to="service">Our Service</NavLink>
                            <NavLink className={"dropdown-item"} to="testimonial">Testimonial</NavLink>
                            {/* <a href="testimonial.html" className="dropdown-item">Testimonial</a> */}
                        </div>
                    </div>
                    <NavLink className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"} to="contact">Contact Us</NavLink>
                </div>
            </div>
        </nav>
    </>
}

export default NavBar;