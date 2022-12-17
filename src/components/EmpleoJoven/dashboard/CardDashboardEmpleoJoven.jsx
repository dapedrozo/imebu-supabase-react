import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../../layouts/GeneralCSS.css';

function CardDashboardEmpleoJoven({item}) {
    const navigate = useNavigate()

    const goToPage = (url)=> {
        navigate(url)
    }

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4">
        <div className="card text-center card-propia animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={item.imageCard} alt="image" className="card-img-top"/>
            </div>
            <div className="card-body card-body-propia">
                <h3>{item.title}</h3>
                <h4 className="card-text card-text-propia">{item.description}</h4>
                <button onClick={()=>goToPage(item.url)} className="btn btn-outline-primary">Ingresar</button>
            </div>
        </div>
    </div>
  )
}

export default CardDashboardEmpleoJoven