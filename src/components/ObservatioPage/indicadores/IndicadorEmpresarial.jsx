import React, {useEffect} from 'react'

function IndicadorEmpresarial() {

  const sytleGeneralPage={
    minHeight:"60vh"
}

  useEffect(() => {
    !function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");
  }, [])
  
  
  return (
    <div className="container" style={sytleGeneralPage}>
      <div className="infogram-embed" data-id="c5a5fedd-bd7b-4b5d-9184-b6cc7940614f" data-type="interactive" data-title="INDICADORES EMPRESARIALES"></div>
    </div>
  )
}

export default IndicadorEmpresarial