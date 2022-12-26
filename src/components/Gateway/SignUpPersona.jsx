import React, {useContext, useState, useEffect} from 'react'
import {GeneralContext} from '../../context/GeneralContext';
import {useNavigate} from 'react-router-dom';

function SignUpPersona() {
  const {setSendingLogin, sendingLogin, getTiposDocumento, registerPersonaGeneral} = useContext(GeneralContext)
  const navigate = useNavigate()

  const [personaRegister, setPersonaRegister] = useState([{
    nombres:"",
    apellidos:"",
    tipo_doc:"",
    num_doc:"",
    telefono1:"",
    politica_tratamiento:false,
    acepto_terminos_condiciones:false,
  }])
  const [authRegister, setAuthRegister] = useState([{
    email:"",
    password:"",
    confirm_password:""
  }])
  const [tiposDocView, setTiposDocView] = useState([])

  const handlePersonaRegisterChange=(e, index)=>{
    const { name, value } = e.target;
    const list = [...personaRegister]
    list[index][name]=value
    setPersonaRegister(list)
  }
  const handleAuthRegisterChange=(e, index)=>{
    const { name, value } = e.target;
    const list = [...authRegister]
    list[index][name]=value
    setAuthRegister(list)
  }
  const handlePersonaRegisterCheckTerms=(e, index)=>{
    const {name}=e.target
    const list = [...personaRegister]
    list[index][name]=e.target.checked
    setPersonaRegister(list)
  }

  const submitRegisterPersona = async (e) =>{
    e.preventDefault()
    setSendingLogin(true)
    await registerPersonaGeneral(personaRegister[0], authRegister[0])
  }

  const loadData=async()=>{
    const tiposDoc = await getTiposDocumento()
    setTiposDocView(tiposDoc)
    personaRegister[0].tipo_doc = tiposDoc[0].tipo_doc;
    setPersonaRegister(personaRegister)
  }

  useEffect(() => {
    loadData()
  }, [])
  

  return (
    <div className='d-flex justify-content-center align-items-center' style={{minHeight:"60vh"}}>
      <div className='card col-xs-11 col-sm-11 col-md-9 col-lg-7 col-xl-6 text-center mt-4' style={{border:"none"}}>
        <div className="card-header" style={{background:"white-gray", border:"none"}}>
        <h2>Registrate como Persona Natural</h2>
        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, iste! Dolores vitae eaque voluptate facere nam odit molestias natus omnis? Eaque esse voluptatum est quis ab repellendus ut distinctio facere!</h6>
        </div>
        <div className="card-body" style={{background:"white-gray", border:"none"}}>
          <div className="row g-3">
          <form onSubmit={(e)=>submitRegisterPersona(e)}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="tipo_doc" className="form-label">Tipo Documento</label>
                {
                personaRegister.map((element, index)=>(
                  <select key={index} className='form-select' id="tipo_doc" name="tipo_doc" onChange={(e) => handlePersonaRegisterChange(e, index)} value={element.tipo_doc}>
                  {tiposDocView.map((elemento, index)=>(
                      <option key={index} value={elemento.tipo_doc}>{elemento.tipo_doc}</option>
                  ))}
                  </select>
                ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="num_doc" className="form-label">Número Documento</label>
                {
                  personaRegister.map((element, index)=>(
                  <input key={index} type="text" className="form-control" required name='num_doc' id="num_doc" onChange={(e)=>handlePersonaRegisterChange(e, index)} value={element.num_doc}/>
                  ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="nombres" className="form-label">Nombres</label>
                {
                  personaRegister.map((element, index)=>(
                  <input key={index} type="text" className="form-control" required name='nombres' id="nombres" onChange={(e)=>handlePersonaRegisterChange(e, index)} value={element.nombres}/>
                  ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="apellidos" className="form-label">Apellidos</label>
                {
                  personaRegister.map((element, index)=>(
                  <input key={index} type="text" className="form-control" required name='apellidos' id="apellidos" onChange={(e)=>handlePersonaRegisterChange(e, index)} value={element.apellidos}/>
                  ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="telefono1" className="form-label">Teléfono</label>
                {
                  personaRegister.map((element, index)=>(
                  <input key={index} type="text" className="form-control" required name='telefono1' id="telefono1" onChange={(e)=>handlePersonaRegisterChange(e, index)} value={element.telefono1}/>
                  ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="email" className="form-label">Correo</label>
                {
                  authRegister.map((element, index)=>(
                  <input key={index} type="email" className="form-control" required name='email' id="email" onChange={(e)=>handleAuthRegisterChange(e, index)} value={element.email}/>
                  ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="password" className="form-label">Contraseña</label>
                {
                  authRegister.map((element, index)=>(
                  <input key={index} type="password" className="form-control" required name='password' id="password" placeholder='Debe tener al menos 6 caracteres' pattern=".{6,}" onChange={(e)=>handleAuthRegisterChange(e, index)} value={element.password}/>
                  ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-4">
                <label htmlFor="confirm_password" className="form-label">Confirmación de Contraseña</label>
                {
                  authRegister.map((element, index)=>(
                    element.confirm_password === element.password ? (
                      <input key={"valid"+index} type="password" className="form-control is-valid" required name='confirm_password' id="confirm_password" pattern=".{6,}" placeholder='Debe tener al menos 6 caracteres' onChange={(e)=>handleAuthRegisterChange(e, index)} value={element.confirm_password}/>
                    ) : (
                        <input key={"invalid"+index} type="password" className="form-control is-invalid" required name='confirm_password' id="confirm_password" pattern=".{6,}" placeholder='Debe tener al menos 6 caracteres' onChange={(e)=>handleAuthRegisterChange(e, index)} value={element.confirm_password}/>
                    )
                    )
                  )
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-start">
              {
                  personaRegister.map((element, index)=>(
                    element.acepto_terminos_condiciones === true ? (
                      <div className="form-check" key={index}>
                        <input className="form-check-input is-valid" type="checkbox" id={"flexCheckDefault"+index} name='acepto_terminos_condiciones' onClick={(e)=>handlePersonaRegisterCheckTerms(e, index)}/>
                        <label className="form-check-label" htmlFor={"flexCheckDefault"+index}>
                        Acepta términos y condiciones?
                        </label>
                      </div>
                    ) : (
                      <div className="form-check" key={index}>
                        <input className="form-check-input is-invalid" required type="checkbox" id={"flexCheckDefault2"+index} name='acepto_terminos_condiciones' onClick={(e)=>handlePersonaRegisterCheckTerms(e, index)}/>
                        <label className="form-check-label" htmlFor={"flexCheckDefault2"+index}>
                        Acepta términos y condiciones?
                        </label>
                      </div>
                    )
                    )
                  )
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4 text-start">
              {
                  personaRegister.map((element, index)=>(
                    element.politica_tratamiento === true ? (
                      <div className="form-check" key={index}>
                        <input className="form-check-input is-valid" type="checkbox" id={"flexCheckDefault3"+index} name='politica_tratamiento' onClick={(e)=>handlePersonaRegisterCheckTerms(e, index)}/>
                        <label className="form-check-label" htmlFor={"flexCheckDefault3"+index}>
                        Acepta la política de tratamiento de datos personales?
                        </label>
                      </div>
                    ) : (
                      <div className="form-check" key={index}>
                        <input className="form-check-input is-invalid" required type="checkbox" id={"flexCheckDefault4"+index} name='politica_tratamiento' onClick={(e)=>handlePersonaRegisterCheckTerms(e, index)}/>
                        <label className="form-check-label" htmlFor={"flexCheckDefault4"+index}>
                        Acepta la política de tratamiento de datos personales?
                        </label>
                      </div>
                    )
                    )
                  )
                }
              </div>
            </div>
            {(sendingLogin || personaRegister[0].num_doc==="" || personaRegister[0].nombres==="" || personaRegister[0].apellidos==="" || personaRegister[0].telefono1==="" || personaRegister[0].politica_tratamiento===false || personaRegister[0].acepto_terminos_condiciones===false || authRegister[0].email==="" || authRegister[0].password!==authRegister[0].confirm_password) ? (
              <div className="d-grid gap-2">
                <button className='btn btn-lg' disabled style={{backgroundColor: "#3366CC", color:"white"}}>Registrarme</button>
              </div>
            ):(
              <div className="d-grid gap-2">
                <button type='submit' className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}>Registrarme</button>
              </div>
            )}
          </form>
            {sendingLogin ? (
              <>
              <div className="d-grid gap-2">
                <button className='btn btn-lg' disabled style={{backgroundColor: "#3366CC", color:"white"}}>Registrarme como empresa</button>
                <button className='btn btn-lg' disabled style={{backgroundColor: "#3366CC", color:"white"}}>Iniciar Sesión</button>
              </div>
              </>
            ) : (
              <>
              <div className="d-grid gap-2">
                <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={()=>navigate('/registro-empresa')}>Registrarme como empresa</button>
                <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={()=>navigate('/login')}>Iniciar Sesión</button>
              </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPersona