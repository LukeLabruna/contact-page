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
        <a className="navBar-logo" href="#home">
            <h1>Jhon Doe</h1>
            <p>Digital Consulting Group</p>
        </a>
        <ul>
            <li><a href="#aboutUs">Nosotros</a></li>
            <li><a href='#services'>Servicios</a></li>
            <li><a href='#solutions'>Soluciones</a></li>
            <li><a className="navBar-contact">Contacto</a></li>
        </ul>
    </header>
  )
}

export default NavBar