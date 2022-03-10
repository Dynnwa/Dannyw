import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
    return (
            <nav>
                <div className="nav">
                    <Link to="/index">Home</Link>
                    <Link to="/Experience">Experiences</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Activities">Activities</Link>

                </div>
            </nav>
    )

}

