import React from 'react'
import {useParams} from 'react-router-dom'
import SignUpPersona from './SignUpPersona'
import SignUpEmpresa from './SignUpEmpresa'

function SignUp() {
  const params = useParams()

  if(params.tipoRegistro==="registro-persona"){
    return (
      <SignUpPersona/>
    )
  }else{
    return (
      <SignUpEmpresa/>
    )
  }
}

export default SignUp