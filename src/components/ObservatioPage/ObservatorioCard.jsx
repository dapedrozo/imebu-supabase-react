import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../layouts/GeneralCSS.css';

function ObservatorioCard({item}) {
    const navigate = useNavigate()

    const goToPage = (url)=> {
        navigate(url)
    }

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4">
        <div className="card text-center card-propia animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={item.imageCard} alt="image" className="card-img-top"/>
            </div>
            <div className="card-body card-body-propia">
                <h4>{item.title}</h4>
                <p className="card-text card-text-propia">{item.description}</p>
                <button onClick={()=>goToPage(item.url)} className="btn btn-outline-primary">Ver el indicador</button>
            </div>
        </div>
    </div>
  )
}

export default ObservatorioCard