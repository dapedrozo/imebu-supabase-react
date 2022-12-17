import React, {useEffect} from 'react'

function PulsoSocial() {

  const sytleGeneralPage={
    minHeight:"60vh"
  }

  useEffect(() => {
    !function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");
  }, [])
  
  return (
    <div className="container" style={sytleGeneralPage}>
      <div className="infogram-embed" data-id="5b9e7fe6-5f06-4bfb-a230-3727ad545a6f" data-type="interactive" data-title="INDICADORES PULSO SOCIAL"></div>
    </div>
  )
}

export default PulsoSocial