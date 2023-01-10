import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    let [displayMole, setDisplayMole] = useState(false)

    const bopAMole = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    return (
        <div>
            {displayMole==true ? <Mole onClick ={bopAMole} setDisplayMole={setDisplayMole} />
             : <EmptySlot setDisplayMole={setDisplayMole}></EmptySlot>}
        </div>
    )
}

export default MoleContainer

// I've tried multiple different ways and no matter what I do
// my set score won't increase. Is there something I'm missing?