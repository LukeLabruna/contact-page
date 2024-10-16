import Home from "../../pages/Home/Home"
import AboutUs from "../../pages/AboutUs/AboutUs"
import Services from "../../pages/Services/Services"
import Solutions from "../../pages/Solutions/Solutions"
import TablePrice from "../../pages/TablePrice/TablePrice"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

const Contairner = () => {

  const aboutUsRef = useRef(null)
  const servicesRef = useRef(null)
  const solutionsRef = useRef(null)

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location])

  return (
    <>
      <Home />
      <AboutUs ref={aboutUsRef}/>
      <Services ref={servicesRef}/>
      <Solutions ref={solutionsRef}/>
      <TablePrice />
    </>
  )
}

export default Contairner