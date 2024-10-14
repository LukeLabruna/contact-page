import './CardPrice.css'

const CardPrice = ({title, subtitle, price, numberSections}) => {
  return (
    <div className='cardPrice'>
        <div>
            <h2> {title} </h2>
            <h3> {subtitle} </h3>
        </div>
        <h2> ${price} </h2>
        <div>
            <p>Hasta {numberSections} secciones</p>
            <p>Diseño personalizado</p>
            <p>Programación personalizada</p>
            <p>Versón móvil incluida</p>
            <p>Dominio, host y cuentas de email</p>
            <p>Chat de WhatsApp en tu sitio</p>
            <p>Formularios de contacto</p>
        </div>
        <button>Contratar</button>
    </div>
  )
}

export default CardPrice