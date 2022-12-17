import React from 'react'
import ObservatorioCard from './ObservatorioCard';
import {Outlet} from 'react-router-dom';

function ObservatorioMain() {
  const cardObservatorio=[
  {
    imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",
    title:"Indicadores de Mercado Laboral",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    url:"/observatorio/indicadores-mercado-laboral"
  },
  {
    imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",
    title:"Indicadores Macroeconomicos",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    url:"/observatorio/indicadores-macroeconomicos"
  },
  {
    imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",
    title:"Pulso Social",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    url:"/observatorio/pulso-social"
  },
  {
    imageCard:"https://www.bucaramanga.gov.co/wp-content/uploads/2022/02/BANNER_JOVENES2560x900.png",
    title:"Indicadores Empresariales",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    url:"/observatorio/indicadores-empresariales"
  }
]
  return (
    <div className="container d-flex justify-content-center align-items-center mt-4">
      <div className="row pt-4 pb-4">
        {
        cardObservatorio.map((element, index)=>(<ObservatorioCard key={index} item={element}/>))
        }
      </div>
    </div>
  )
}

export default ObservatorioMain