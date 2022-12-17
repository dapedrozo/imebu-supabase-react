import React from 'react'
import ObservatorioMain from '../components/ObservatioPage/ObservatorioMain';

function ObservatorioPage() {
    const sytleGeneralPage={
        minHeight:"60vh"
    }

  return (
    <div style={sytleGeneralPage}>
        <ObservatorioMain/>
    </div>
  )
}

export default ObservatorioPage