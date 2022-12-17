import React, { useEffect, useContext } from "react";
import PostularEmpresa from '../components/EmpleoJoven/PostularEmpresa'
import {GeneralContext} from '../context/GeneralContext'

function EmpleoJovenPostulaEmpresa() {
  const {getSession} = useContext(GeneralContext)

  useEffect(() => {
    getSession("empleo-joven")
  }, [])
  
  return (
    <div>
      <PostularEmpresa/>
    </div>
  )
}

export default EmpleoJovenPostulaEmpresa