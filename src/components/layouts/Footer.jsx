import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

function Footer() {
  const navigate = useNavigate()

  const reload = () =>{
    navigate(0)
  }
  const colorIcons = {
    color: "#004484"
  }
  return (
    <div className="pt-4" style={{backgroundColor: "#004884"}}>
      <div className="container rounded-3" style={{backgroundColor: "white"}}>
        <div className="container p-4">
            <div className="row align-items-center">
            <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                  <span onClick={reload} className="navbar-brand mx-auto" style={{ cursor: "pointer" }}>
                    <img
                      className=""
                      src="http://imebu.gov.co/web4ini/wp-content/uploads/2021/02/IMEBU-logo_2021-300x232.jpg"
                      alt="IMEBU"
                      style={{ maxWidth: 150, width: "80%" }}
                    />
                  </span>
                </div>
                <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10 fw-bold">
                  <h4 style={colorIcons}>
                  Instituto Municipal de Empleo y Fomento Empresarial del Municipio de
                Bucaramanga - IMEBU.
                  </h4>
                </div>                
                <div className="col-12">
                  <ul style={{listStyle: "none", padding: "0px"}}>
                    <li>
                    <strong>Dirección:</strong> Calle 48 No. 28 - 40 Piso 2. Bucaramanga, Santander, Colombia.
                    </li>
                    <li>
                      <strong>Código Postal:</strong> 680003, <strong>Código Dane:</strong> 68001
                    </li>
                    <li>
                      <strong>Horario de Atención:</strong> Lunes a
                  viernes de 07:30 a.m. a 12:00 p.m. y de 02:00 p.m. a 06:00 p.m.
                    </li>
                    <li>
                      <strong>Teléfono:</strong> +57 6706464
                    </li>
                    <li>
                      <strong>Email Información:</strong> atencionalciudadano@imebu.gov.co
                    </li>
                    <li>
                      <strong>Notificaciones Judiciales:</strong> juridica@imebu.gov.co
                    </li>
                  </ul>  
                </div>
            </div>
        </div>
        <div className="container pb-4">
            <div className="row align-items-center">
                <div className="col-4">
                    <a href="https://www.facebook.com/imebuoficial" style={{textDecoration:"none"}}>
                      <FaFacebookF className='me-1' style={colorIcons}/>
                        Siguenos en Facebook
                    </a>
                </div>
                <div className="col-4">
                    <a href="https://twitter.com/Imebu" style={{textDecoration:"none"}}>
                        <FaTwitter className='me-1' style={colorIcons}/>
                        Siguenos en Twitter
                    </a>
                </div>
                <div className="col-4">
                    <a href="https://instagram.com/imebu_?igshid=YmMyMTA2M2Y=" style={{textDecoration:"none"}}>
                        <FaInstagram className='me-1' style={colorIcons}/>
                        Siguenos en Instagram
                    </a> 
                </div>
            </div>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default Footer