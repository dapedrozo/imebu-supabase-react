import React from 'react'
import ProgramasCard from './ProgramasCard'

function DashboardMain() {

  const cardProgramas=[
    {
      imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",
      title:"Empleo Joven",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      url:"/empleo-joven"
    },
    {
      imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",
      title:"Empleo",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      url:"/observatorio/indicadores-macroeconomicos"
    },
    {
      imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",
      title:"Banca",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      url:"/observatorio/pulso-social"
    },
    {
      imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",
      title:"Centos de Desarrollo Empresarial",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      url:"/observatorio/indicadores-empresariales"
    }
  ]

  return (
    <div className='d-flex justify-content-center align-items-center' style={{minHeight:"60vh"}}>
        <div className="row mt-4 mb-4 ps-4 pe-4 container">
        {
        cardProgramas.map((element, index)=>(<ProgramasCard key={index} item={element}/>))
        }
        </div>
    </div>
  )
}

export default DashboardMain