import React, {useContext, useEffect, useState} from 'react'
import {GeneralContext} from '../../context/GeneralContext';
import {useNavigate} from 'react-router-dom';

function SignIn() {
  const {login, validateUserActive, setSendingLogin, sendingLogin} = useContext(GeneralContext)

  const navigate = useNavigate()

  const [persona, setPersona] = useState({email:"",password:""})
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    setSendingLogin(true)
    login(persona)
  }

  const handlePersonaChange=(e)=>{
    const { name, value } = e.target;
    persona[name] = value;
    setPersona(persona)
  }

  const validate=async ()=>{
    const user = await validateUserActive()
    if(user==="noUser"){navigate("/login")}
    if(user==="noRegistro"){navigate("/registro")}
  }

  useEffect(() => {
    //validate()
  }, [])


  return (
    <div className='d-flex justify-content-center align-items-center' style={{minHeight:"60vh"}}>
      <div className='card col-xs-11 col-sm-11 col-md-9 col-lg-7 col-xl-6 text-center mt-4' style={{border:"none"}}>
        <div className="card-header" style={{background:"white-gray", border:"none"}}>
        <h2>Bienvenido al portal Institucional del Imebu</h2>
        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, iste! Dolores vitae eaque voluptate facere nam odit molestias natus omnis? Eaque esse voluptatum est quis ab repellendus ut distinctio facere!</h6>
        </div>
        <div className="card-body" style={{background:"white-gray", border:"none"}}>
          <div className="row g-3">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="email" className="form-label">Correo</label>
                <input type="email" className="form-control" name='email' id="email" required onChange={(e)=>handlePersonaChange(e)}/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-4">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" required name='password' id="password" onChange={(e)=>handlePersonaChange(e)}/>
              </div>
            </div>
            {sendingLogin ? (
              <div className="d-grid gap-2">
                <button className='btn btn-lg' disabled style={{backgroundColor: "#3366CC", color:"white"}}>Iniciar Sesión</button>
              </div>
            ):(
              <div className="d-grid gap-2">
                <button className='btn btn-lg' type='submit' style={{backgroundColor: "#3366CC", color:"white"}}>Iniciar Sesión</button>
              </div>
            )}
          </form>
            {sendingLogin ? (
              <>
              <div className="d-grid gap-2">
                <button className='btn btn-lg' disabled style={{backgroundColor: "#3366CC", color:"white"}}>Registrarme como persona</button>
                <button className='btn btn-lg' disabled style={{backgroundColor: "#3366CC", color:"white"}}>Registrarme como empresa</button>
              </div>
              </>
            ) : (
              <>
              <div className="d-grid gap-2">
                <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={()=>navigate('/registro-persona')}>Registrarme como persona</button>
                <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={()=>navigate('/registro-empresa')}>Registrarme como empresa</button>
              </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn