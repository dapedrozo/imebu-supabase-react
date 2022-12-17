import React from 'react'
import CardDashboardEmpleoJoven from './CardDashboardEmpleoJoven'

function DashboardEmpleoJoven() {
  const cardDashboardEmpleoJoven=[
    {
      imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",
      title:"Postula tu empresa",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      url:"/empleo-joven/postular-empresa"
    },
    {
      imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",
      title:"Postula los empleados de tu empresa",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      url:"/empleo-joven/postular-empleados"
    }
  ]

  return (
    <div className='d-flex justify-content-center align-items-center' style={{minHeight:"60vh"}}>
        <div className="row mt-4 mb-4 ps-4 pe-4 container">
        {
        cardDashboardEmpleoJoven.map((element, index)=>(<CardDashboardEmpleoJoven key={index} item={element}/>))
        }
        </div>
    </div>
  )
}

export default DashboardEmpleoJoven