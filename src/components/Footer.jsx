import React,{ useState } from 'react';


import './styles/Footer.css';


const Footer = () => {

  const [formActive, setFormActive] = useState(false);
  
 

  const handleClick = () => {
   
    setFormActive(!formActive);
    
      
    
  }
    
    



   // Define el estado inicial del formulario
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone1: '',
    message: '',
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (event) => {
    // Actualiza el estado del formulario con el nuevo valor del campo
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    // Evita que el formulario se envíe por defecto
    event.preventDefault();

  

    
    console.log('datos del formulario:', formData);
    window.alert("datos enviados exitosamente!");

    // Limpia el formulario después del envío
    setFormData({ name: '', email: '',phone:'', message: '' });
    setFormActive(false);
  };
  
  return (
    <>
      <footer className="footer">
      <div  className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2>CONTACTO</h2>
            <p>
              <a href="mailto:chepechay16@gmail.com"><p>correo</p></a>
            </p>
            <p>
              <a href="https://api.whatsapp.com/send?phone=50237914995"><p>teléfono</p></a>
            </p>
          </div>
          <div className='imageF'>
            <img src="./public/logofooter.png" alt="" />
            
          </div>
          <div className="footer-options">
            <a className="footer-option" onClick={handleClick} href='#'><h1>Form</h1></a>
           
            
          </div>
          
          {formActive && (
            <div id='top' className="footer-form active">
              <div  className="footer-form">
          <h2>Formulario de contacto</h2>
              <form  onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                <label htmlFor="phone1">Teléfono:</label>
                    <input type="tel" id="phone1"name="phone1"value={formData.phone1}onChange={handleChange}require/>
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
                <br />
                <button type="submit">Enviar</button>
              </form>
            </div>
            </div>
          )}
          </div>
        </div>
      
    </footer>
    </>
  )
};

export default Footer;

