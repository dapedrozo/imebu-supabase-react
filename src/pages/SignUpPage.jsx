import React, { useEffect, useContext } from "react";
import SignUp from '../components/Gateway/SignUp';
import {GeneralContext} from '../context/GeneralContext'
import {useNavigate, useParams} from 'react-router-dom';

function SignUpPage() {
  const {getSession} = useContext(GeneralContext)
  const navigate = useNavigate()
  const params = useParams()

  const getSess =async()=>{
    const data = await getSession(params.tipoRegistro)
    if(data){
      navigate("/")
    }
  }

  useEffect(() => {
    getSess()
  }, [])
  

    return (
      <SignUp/>
    )
}

export default SignUpPage