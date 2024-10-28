import { Link } from 'react-router-dom'
import './NavBar.css'	
import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

const NavBar = () => {

  const [ scrolled, setScrolled ] = useState(false)

  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null);
  const location = useLocation()

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }

    const handleScroll = () => {
      setShowMenu(false);
    }

    document.addEventListener("click", handleClickOutSide);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowMenu(false)
  }, [location.pathname])

  const handleOnClickMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    
    const handleScroll = () => {
      const offset = window.scrollY
  
      if (offset < 20 ) {
        setScrolled(false)
      } else {
        setScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <header className={`navBar ${scrolled ? 'scrolled' : ''}`}>
        <Link className="navBar-logo" to={"/"}>
            <h1>John Doe</h1>
            <p>Digital Consulting Group</p>
        </Link>
        <button className='navBar-menu-button' onClick={handleOnClickMenu}><i className="fa-solid fa-bars"></i></button>
        <ul className={showMenu ? 'showMenu' : ''} ref={menuRef}>
            <li><Link to={"/#aboutUs"}>Nosotros</Link></li>
            <li><Link to={"/#services"}>Servicios</Link></li>
            <li><Link to={"/#solutions"}>Soluciones</Link></li>
            <li><Link to='/contact' className="navBar-contact">Contacto</Link></li>
        </ul>
    </header>
  )
}

export default NavBar