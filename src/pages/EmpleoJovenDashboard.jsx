import React, { useEffect, useContext } from "react";
import DashboardEmpleoJoven from '../components/EmpleoJoven/dashboard/DashboardEmpleoJoven'
import {GeneralContext} from '../context/GeneralContext'

function EmpleoJovenDashboard() {
  const {getSession} = useContext(GeneralContext)

  useEffect(() => {
    getSession("empleo-joven")
  }, [])

  return (
    <div>
      <DashboardEmpleoJoven/>
    </div>
    
  )
}

export default EmpleoJovenDashboard