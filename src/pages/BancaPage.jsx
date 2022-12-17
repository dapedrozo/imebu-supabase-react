import React from 'react'
import BancaMain from '../components/BancaPage/BancaMain';

function BancaPage() {
    const sytleGeneralPage={
        minHeight:"51vh"
      }
  return (
    <div style={sytleGeneralPage}>
        <BancaMain/>
    </div>
  )
}

export default BancaPage