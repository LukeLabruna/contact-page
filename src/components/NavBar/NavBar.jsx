import { Link } from "react-router-dom"
import './NavBar.css'	
import { useState, useEffect } from "react"

const NavBar = () => {

  const [ scrolled, setScrolled ] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    const halfViewportHeight = window.innerHeight * 0.5; // 50vh en píxeles

    if (offset < halfViewportHeight) {
      setScrolled(false)
    } else {
      setScrolled(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <header className={`navBar ${scrolled ? 'scrolled' : ''}`}>
        <Link className="navBar-logo" to={"/"}>
            <h1>Jhon Doe</h1>
            <p>Digital Consulting Group</p>
        </Link>
        <ul>
            <li><Link>Soluciones</Link></li>
            <li><Link>Como trabajamos</Link></li>
            <li><Link>Nosotros</Link></li>
            <li><Link>Servicios</Link></li>
            <li><Link className="navBar-contact">Contacto</Link></li>
        </ul>
    </header>
  )
}

export default NavBar