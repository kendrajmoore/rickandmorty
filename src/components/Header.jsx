import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import rickImage from '/Users/kendramoore/rick/public/rick-and-morty-30998.png'


function Header() {
  return (
    <>
        <header>
            <Link className="site-logo" to="/"><img id="header-img" src={rickImage}/></Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? "active-link" : null}
                to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null}
                to="/characters">Characters</NavLink>
                 <NavLink className={({isActive}) => isActive ? "active-link" : null}
                to="/search">Search</NavLink>
                 <NavLink className={({isActive}) => isActive ? "active-link" : null}
                to="/favorites">Favorites</NavLink>
            </nav>
        </header>

    </>
  )
}

export default Header