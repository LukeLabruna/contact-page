import './Services.css'

const Services = () => {
    return (
        <section id='services' className='services'>
            <div>
                <img src="/assets/img/coding.png" alt="" />
                <div>
                    <h3>PROGRAMACIÓN</h3>
                    <h2>Desarrollamos tu página web</h2>
                    <ul>
                        <li><img src='/assets/img/check.png'/> Página Web Estática</li>
                        <li><img src='/assets/img/check.png'/> E-commerce</li>
                        <li><img src='/assets/img/check.png'/> Landings</li>
                        <li><img src='/assets/img/check.png'/> Mantenimiento</li>
                        <li><img src='/assets/img/check.png'/> Gestión de dominios, servidores y correos corporativos</li>
                        <li><img src='/assets/img/check.png'/> SEO y Optimización</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h3>MARKETING DIGITAL</h3>
                    <h2>Manejamos tus redes sociales</h2>
                    <ul>
                        <li><img src='/assets/img/check.png'/> Manejo de Redes sociales</li>
                        <li><img src='/assets/img/check.png'/> Branding</li>
                        <li><img src='/assets/img/check.png'/> Calendarización de contenido</li>
                        <li><img src='/assets/img/check.png'/> Diseño de piezas para Instagram</li>
                    </ul>
                </div>
                <img src="/assets/img/social-media.png" alt="" />
            </div>
        </section>
    )
}

export default Services