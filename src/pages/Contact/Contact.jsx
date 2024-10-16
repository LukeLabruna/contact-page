import { useState } from "react"
import configObject from '../../utils/envConfig.js'
const { USER_EMAIL, APP_PASSWORD } = configObject
import './Contact.css'

const Contact = () => {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const mainBody = {
        to: USER_EMAIL,
        subject: "Informacion para contacto",
        text: "Email enviado desde la web",
        html: `
        <div style="text-align: center; width: 100%;">
  <table style="border-collapse: collapse; margin: 0 auto; width: 80%;" cellpadding="10" cellspacing="0" border="1">
    <thead>
      <tr style="background-color: #f2f2f2;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;"></th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Datos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Nombre</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.first_name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Apellido</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.last_name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Email</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.email}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Teléfono</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.phone_number}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Mensaje</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.message}</td>
        </tr>
        </tbody>
  </table>
  </div>
  `,
        userEmail: USER_EMAIL,
        appPassword: APP_PASSWORD
      }

      const mainResponse = await fetch("https://email-microservice-5iqf.onrender.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(mainBody)
      })

      const mainData = await mainResponse.json()

      const clientBody = {
        to: formData.email,
        subject: "Informacion para contacto",
        text: "Email enviado desde la web",
        html: `<div style="width: 50vw; margin: 0 auto; background-color: #ffd381; padding: 20px; text-align: center;">
        <h1 style="color: #777;">Jhon Doe</h1>
        <p style="color: #c99027;">Digital Consulting Group</p>
        <br>
        <h2 style="color: #777;">Hola ${formData.first_name} ${formData.last_name}!</h2>
        <p style="color: #c99027;">Gracias por contactarnos!</p>
        <p style="color: #c99027;">Nos comunicaremos a la brevedad.</p>
      </div>
      `,
        userEmail: USER_EMAIL,
        appPassword: APP_PASSWORD
      }

      const clientResponse = await fetch("https://email-microservice-5iqf.onrender.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(clientBody)
      })

      const clientData = await clientResponse.json()
      console.log("MainData", mainData)
      console.log("ClientData", clientData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="contact">
      <h2>Contactanos</h2>
      <form onSubmit={handleSubmit}>
        <h3>Formulario de contacto</h3>

        <div className="full_name">
          <div>
            <label htmlFor="first_name">Nombre</label>
            <input type="text" name="first_name" id='first_name' value={formData.first_name} onChange={handleOnChange} />
          </div>
          <div>
            <label htmlFor="first_name">Apellido</label>
            <input type="text" name="last_name" id='last_name' value={formData.last_name} onChange={handleOnChange} />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleOnChange} />
        </div>

        <div>
          <label htmlFor="phone_number">Telefono</label>
          <input type="text" name="phone_number" id="phone_number" value={formData.phone_number} onChange={handleOnChange} />
        </div>

        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" value={formData.message} onChange={handleOnChange}></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contact