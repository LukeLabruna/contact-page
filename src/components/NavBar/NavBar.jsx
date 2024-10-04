import { Link } from "react-router-dom"
import './NavBar.css'	

const NavBar = () => {
  return (
    <div className="navBar">
        <Link className="navBar-logo">
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
    </div>
  )
}

export default NavBar