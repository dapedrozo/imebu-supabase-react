import React, {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {GeneralContext} from '../../context/GeneralContext';

function PostularEmpresa() {
  const {saveDocumentosEmpleoJoven} = useContext(GeneralContext)
  const navigate = useNavigate()

  useEffect(() => {
    saveDocumentosEmpleoJoven()
  }, [])
  

  return (
    <div className="d-flex table-responsive align-items-center justify-content-center" style={{minHeight:"60vh"}}>
      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre Documento</th>
              <th scope="col">Documento</th>
              <th scope="col">Opciones</th>
              <th scope="col">Estado</th>
              <th scope="col">Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
      </table>
      </div>
  </div>
  )
}

export default PostularEmpresa