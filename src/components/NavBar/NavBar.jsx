import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <div>
            <h1>Jhon Doe</h1>
            <p>Digital Consulting Group</p>
        </div>
        <ul>
            <li><Link>Soluciones</Link></li>
            <li><Link>Como trabajamos</Link></li>
            <li><Link>Nosotros</Link></li>
            <li><Link>Servicios</Link></li>
            <li><Link>Contacto</Link></li>
        </ul>
    </div>
  )
}

export default NavBar