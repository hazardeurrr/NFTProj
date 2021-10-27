import React from 'react'
import G1 from '../../../public/assets/gifs/output.gif'
import G2 from '../../../public/assets/gifs/output2.gif'
import G3 from '../../../public/assets/gifs/output3.gif'
import G4 from '../../../public/assets/gifs/output4.gif'
import G5 from '../../../public/assets/gifs/output5.gif'
import G6 from '../../../public/assets/gifs/output6.gif'
import G7 from '../../../public/assets/gifs/output7.gif'
import G8 from '../../../public/assets/gifs/output8.gif'
import G9 from '../../../public/assets/gifs/output9.gif'


const GifsList = () => {

 

    return (
      <div>
        <div style={{display:'flex'}}>
          <img style={{width: '33.3%', height:'33.3%'}} src={G4} alt="Crab Rave gif"/>
          <img style={{width: '33.3%', height:'33.3%'}} src={G9} alt="Crab Rave gif"/>
          <img style={{width: '33.3%', height:'33.3%'}} src={G6} alt="Crab Rave gif"/>
        </div>
        <div style={{display:'flex'}}>
          <img style={{width: '33.3%', height:'33.3%'}} src={G7} alt="Crab Rave gif"/>
          <img style={{width: '33.3%', height:'33.3%'}} src={G2} alt="Crab Rave gif"/>
          <img style={{width: '33.3%', height:'33.3%'}} src={G8} alt="Crab Rave gif"/>
        </div><div style={{display:'flex'}}>
          <img style={{width: '33.3%', height:'33.3%'}} src={G3} alt="Crab Rave gif"/>
          <img style={{width: '33.3%', height:'33.3%'}} src={G1} alt="Crab Rave gif"/>
          <img style={{width: '33.3%', height:'33.3%'}} src={G5} alt="Crab Rave gif"/>
        </div>
      </div>
    )
}
export default GifsList;