import { Link } from "react-router-dom"
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo-contact">
        <Link className="footer-logo" to={"/"}>
          <h2>John Doe</h2>
          <p>Digital Consulting Group</p>
        </Link>
        <div className="footer-contact">
          <h3>Trabaja con nosotros</h3>
          <Link to={"/contact"}><button>Contacto</button></Link>
        </div>
      </div>
      <div className="footer-social-media">
        <a><i className="fa-brands fa-square-github"></i></a>
        <a><i className="fa-brands fa-square-instagram"></i></a>
        <a><i className="fa-brands fa-square-facebook"></i></a>
        <a><i className="fa-brands fa-square-x-twitter"></i></a>
      </div>
      <div className="footer-copyrigth">
        <p>Copyright © 2024 John Doe - Digital Consulting Group</p>
      </div>
    </footer>
  )
}

export default Footer