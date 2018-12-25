import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/redux-sample' className="nav-link">Redux Sample</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/simple-route' className="nav-link">Simple Route</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/nested-route' className="nav-link">Nested Route</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={`/nested-route/${7}`}  className="nav-link">Nested Route with Params</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;
