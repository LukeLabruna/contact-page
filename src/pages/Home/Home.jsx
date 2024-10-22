import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <>
            <section id='home' className='home'>
                <div className='home-slogan'>
                    <p>ACTIVA TU HUELLA DIGITAL</p>
                    <p>Y POTENCIA TU FUTURO</p>
                </div>
                <div className='home-logo'>
                    <h1>Jhon Doe</h1>
                    <p>Digital Consulting Group</p>
                </div>
                <div className='home-logo-bar'></div>
            </section>
            <div className='cover'></div>
        </>
    )
}

export default Home