import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="menu-bar">
                <Container>
                    <NavLink to="/home">
                        <img id="logo" alt="logo" src={logo}></img>
                    </NavLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-item">
                            <NavLink to="/home" className="nav-link">Home</NavLink>
                            <NavLink to="/tours" className="nav-link">All Tours</NavLink>

                            {user.email && <NavLink to="/myOrders" className="nav-link">My Orders</NavLink>}
                            {user.email && <NavLink to="/manageOrders" className="nav-link">Manage Orders</NavLink>}
                            {user.email && <NavLink to="/addTour" className="nav-link">Add a Tour</NavLink>}
                            {user?.email ? <button onClick={logOut} variant="warning" size="sm" className="mx-3 btn-logout">Logout : {user?.displayName}</button>
                                :
                                <NavLink as={Link} to="/login"><button className="mx-3 btn-login ">Login</button></NavLink>}

                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;