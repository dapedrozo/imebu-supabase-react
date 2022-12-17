import React, { useEffect, useContext } from "react";
import DashboardMain from '../components/IndexPage/DashboardMain';
import {GeneralContext} from '../context/GeneralContext'

function IndexPage() {
  const {getSession} = useContext(GeneralContext)

  useEffect(() => {
    getSession()
  }, [])
  
  return (
    <div>
      <DashboardMain/>
    </div>
  )
}

export default IndexPage