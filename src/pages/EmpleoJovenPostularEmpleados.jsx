import React, { useEffect, useContext } from "react";
import PostularEmpleados from '../components/EmpleoJoven/PostularEmpleados'
import {GeneralContext} from '../context/GeneralContext'

function EmpleoJovenPostularEmpleados() {
  const {getSession} = useContext(GeneralContext)

  useEffect(() => {
    getSession("empleo-joven")
  }, [])

  return (
    <div>
      <PostularEmpleados/>
    </div>
  )
}

export default EmpleoJovenPostularEmpleados