import { useEffect } from "react"
import molehill from '../molehill.png'

function EmptySlot(props){
    useEffect(()=>{
        let randomSecond = Math.ceil(Math.random() * 5000)
        let timer = setTimeout (()=>{
            props.setDisplayMole(true)
        }, randomSecond)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img style={{'width': '50px'}} src={molehill} />
        </div>
    )
}

export default EmptySlot