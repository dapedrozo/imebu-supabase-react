import React, { useEffect, useContext } from "react";
import SignIn from '../components/Gateway/SignIn';
import {GeneralContext} from '../context/GeneralContext'
import {useNavigate} from 'react-router-dom';

function SignInPage() {
  const {getSession} = useContext(GeneralContext)
  const navigate = useNavigate()

  const getSess =async()=>{
    const data = await getSession()
    if(data){
      navigate("/")
    }
  }

  useEffect(() => {
    getSess()
  }, [])

  return (
    <SignIn/>
  )
}

export default SignInPage