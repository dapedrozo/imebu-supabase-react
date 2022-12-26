import React, {useContext, useState, useEffect} from 'react'
import {GeneralContext} from '../../context/GeneralContext';
import {useNavigate} from 'react-router-dom';

function SignUpEmpresa() {
  const {setSendingLogin, sendingLogin, getTiposDocumento, getCiiu, registerEmpresaGeneral} = useContext(GeneralContext)
  const navigate = useNavigate()
  
  const [authRegister, setAuthRegister] = useState([{
    email:"",
    password:"",
    confirm_password:""
  }])
  const [empresaRegister, setEmpresaRegister] = useState([{
    nombre_empresa:"",
    nombre_representante:"",
    apellidos_representatnte:"",
    numero_ciuu:"",
    tipo_doc:"",
    num_doc:"",
    telefono1:"",
    politica_tratamiento:false,
    acepto_terminos_condiciones:false,
  }])
  const [tiposDocView, setTiposDocView] = useState([])
  const [ciiuView, setCiiuView] = useState([])

  const handleAuthRegisterChange=(e, index)=>{
    const { name, value } = e.target;
    const list = [...authRegister]
    list[index][name]=value
    setAuthRegister(list)
  }
  const handleEmpresaRegisterChange=(e, index)=>{
    const { name, value } = e.target;
    const list = [...empresaRegister]
    list[index][name]=value
    setEmpresaRegister(list)
  }
  const handleEmpresaRegisterCheckTerms=(e, index)=>{
    const {name}=e.target
    const list = [...empresaRegister]
    list[index][name]=e.target.checked
    setEmpresaRegister(list)
  }

  const submitRegisterEmpresa = (e) =>{
    e.preventDefault()
    setSendingLogin(true)
    registerEmpresaGeneral(empresaRegister[0], authRegister[0])
  }

  const loadData=async()=>{
    const tiposDoc = await getTiposDocumento()
    const ciius = await getCiiu()
    setTiposDocView(tiposDoc)
    setCiiuView(ciius)
    empresaRegister[0].tipo_doc = tiposDoc[0].tipo_doc;
    empresaRegister[0].numero_ciuu = ciius[0].numero_ciuu;
    setEmpresaRegister(empresaRegister)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='d-flex justify-content-center align-items-center' style={{minHeight:"60vh"}}>
      <div className='card col-xs-11 col-sm-11 col-md-9 col-lg-7 col-xl-6 text-center mt-4' style={{border:"none"}}>
        <div className="card-header" style={{background:"white-gray", border:"none"}}>
        <h2>Registrate como Empresa</h2>
        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, iste! Dolores vitae eaque voluptate facere nam odit molestias natus omnis? Eaque esse voluptatum est quis ab repellendus ut distinctio facere!</h6>
        </div>
        <div className="card-body" style={{background:"white-gray", border:"none"}}>
          <div className="row g-3">
          <form onSubmit={(e)=>submitRegisterEmpresa(e)}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <label htmlFor="nombre_empresa" className="form-label">Nombre de la empresa</label>
                  {
                    empresaRegister.map((element, index)=>(
                    <input key={index} type="text" className="form-control" required name='nombre_empresa' id="nombre_empresa" onChange={(e)=>handleEmpresaRegisterChange(e, index)} value={element.nombre_empresa}/>
                    ))
                  }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="ciiu" className="form-label">Código CIIU</label>
                {
                empresaRegister.map((element, index)=>(
                  <select key={index} className='form-select' id="numero_ciuu" name="numero_ciuu" onChange={(e) => handleEmpresaRegisterChange(e, index)} value={element.numero_ciuu}>
                  {ciiuView.map((elemento, index)=>(
                      <option key={index} value={elemento.numero_ciuu}>{elemento.numero_ciuu} - {elemento.nombre_ciuu}</option>
                  ))}
                  </select>
                ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="tipoDocumento" className="form-label">Tipo Documento</label>
                {
                empresaRegister.map((element, index)=>(
                  <select key={index} className='form-select' id="tipo_doc" name="tipo_doc" onChange={(e) => handleEmpresaRegisterChange(e, index)} value={element.tipo_doc}>
                  {tiposDocView.map((elemento, index)=>(
                      <option key={index} value={elemento.tipo_doc}>{elemento.tipo_doc}</option>
                  ))}
                  </select>
                ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="numero_documento" className="form-label">Número Documento</label>
                {
                  empresaRegister.map((element, index)=>(
                  <input key={index} type="text" className="form-control" required name='num_doc' id="num_doc" onChange={(e)=>handleEmpresaRegisterChange(e, index)} value={element.num_doc}/>
                  ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="nombre_representante" className="form-label">Nombres del representante legal</label>
                {
                  empresaRegister.map((element, index)=>(
                  <input key={index} type="text" className="form-control" required name='nombre_representante' id="nombre_representante" onChange={(e)=>handleEmpresaRegisterChange(e, index)} value={element.nombre_representante}/>
                  ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="apellidos_representatnte" className="form-label">Apellidos del representante legal</label>
                {
                  empresaRegister.map((element, index)=>(
                  <input key={index} type="text" className="form-control" required name='apellidos_representatnte' id="apellidos_representatnte" onChange={(e)=>handleEmpresaRegisterChange(e, index)} value={element.apellidos_representatnte}/>
                  ))
                }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="telefono1" className="form-label">Teléfono</label>
                {
                  empresaRegister.map((element, index)=>(
                  <input key={index} type="text" className="form-control" required name='telefono1' id="telefono1" onChange={(e)=>handleEmpresaRegisterChange(e, index)} value={element.telefono1}/>
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
                  <input key={index} type="password" className="form-control" required name='password' id="password" pattern=".{6,}" placeholder='Debe tener al menos 6 caracteres' onChange={(e)=>handleAuthRegisterChange(e, index)} value={element.password}/>
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
                  empresaRegister.map((element, index)=>(
                    element.acepto_terminos_condiciones === true ? (
                      <div className="form-check" key={index}>
                        <input className="form-check-input is-valid" type="checkbox" id={"flexCheckDefault"+index} name='acepto_terminos_condiciones' onClick={(e)=>handleEmpresaRegisterCheckTerms(e, index)}/>
                        <label className="form-check-label" htmlFor={"flexCheckDefault"+index}>
                        Acepta términos y condiciones?
                        </label>
                      </div>
                    ) : (
                      <div className="form-check" key={index}>
                        <input className="form-check-input is-invalid" required type="checkbox" id={"flexCheckDefault2"+index} name='acepto_terminos_condiciones' onClick={(e)=>handleEmpresaRegisterCheckTerms(e, index)}/>
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
                  empresaRegister.map((element, index)=>(
                    element.politica_tratamiento === true ? (
                      <div className="form-check" key={index}>
                        <input className="form-check-input is-valid" type="checkbox" id={"flexCheckDefault3"+index} name='politica_tratamiento' onClick={(e)=>handleEmpresaRegisterCheckTerms(e, index)}/>
                        <label className="form-check-label" htmlFor={"flexCheckDefault3"+index}>
                        Acepta la política de tratamiento de datos personales?
                        </label>
                      </div>
                    ) : (
                      <div className="form-check" key={index}>
                        <input className="form-check-input is-invalid" required type="checkbox" id={"flexCheckDefault4"+index} name='politica_tratamiento' onClick={(e)=>handleEmpresaRegisterCheckTerms(e, index)}/>
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
            {(sendingLogin || empresaRegister[0].num_doc==="" || empresaRegister[0].nombre_empresa==="" || empresaRegister[0].nombre_representante==="" || empresaRegister[0].apellidos_representatnte==="" || empresaRegister[0].telefono1==="" || empresaRegister[0].politica_tratamiento===false || empresaRegister[0].acepto_terminos_condiciones===false || authRegister[0].email==="" || authRegister[0].password!==authRegister[0].confirm_password) ? (
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
                <button className='btn btn-lg' disabled style={{backgroundColor: "#3366CC", color:"white"}}>Registrarme como persona</button>
                <button className='btn btn-lg' disabled style={{backgroundColor: "#3366CC", color:"white"}}>Iniciar Sesión</button>
              </div>
              </>
            ) : (
              <>
              <div className="d-grid gap-2">
                <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={()=>navigate('/registro-persona')}>Registrarme como persona</button>
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

export default SignUpEmpresa