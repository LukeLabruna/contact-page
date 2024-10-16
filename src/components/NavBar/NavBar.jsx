import { Link } from 'react-router-dom'
import './NavBar.css'	
import { useState, useEffect } from "react"

const NavBar = () => {

  const [ scrolled, setScrolled ] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
   // const halfViewportHeight = window.innerHeight * 0.5

    if (offset < 20 ) {
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
        <Link className="navBar-logo" to={"/#home"}>
            <h1>Jhon Doe</h1>
            <p>Digital Consulting Group</p>
        </Link>
        <ul>
            <li><Link to={"/#aboutUs"}>Nosotros</Link></li>
            <li><Link to={"/#services"}>Servicios</Link></li>
            <li><Link to={"/#solutions"}>Soluciones</Link></li>
            <li><Link to='/contact' className="navBar-contact">Contacto</Link></li>
        </ul>
    </header>
  )
}

export default NavBar