import { useEffect } from "react"
import mole from '../mole.png'

const Mole= (props) =>{

    useEffect(()=>{
        let randomSecond = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(()=>{
            props.setDisplayMole(false)
        }, randomSecond)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img style={{'width': '50px'}} src={mole} onClick={props.bopamole} />
        </div>
    )
}

export default Mole