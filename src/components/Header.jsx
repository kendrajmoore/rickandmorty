import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Header() {
  return (
    <>
        <header>
            <Link className="site-logo" to="/"><img id="header-img" src="rick-and-morty-30998.png"/></Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? "active-link" : null}
                to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null}
                to="/characters">Characters</NavLink>
                 <NavLink className={({isActive}) => isActive ? "active-link" : null}
                to="/search">Search</NavLink>
            </nav>
        </header>

    </>
  )
}

export default Header