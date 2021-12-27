import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/techniks">
                <button>Techniks</button>
            </Link>
            <Link to="/techniks/add">
                <button>add</button>
            </Link>
        </nav>
    )
}
