import { useState } from "react"
import '../Styles/Box.css'
function Box(){
    const [width, setWidth] = useState(100)
    const [height, setHeight] = useState(100)
    const [color, setColor] = useState('magenta')
    function handleWidth(evt){
        setWidth(evt.target.value)
    }

    function handleHeight(evt){
        setHeight(evt.target.value)
    }

    function handleColor(evt){
        setColor(evt.target.value)
    }

    return <div className="Box">
        <h1>Generate Box</h1>
        <form className="form">
            <label htmlFor="width" >Width</label>
            <input type="number" id="width" value={width} onChange={handleWidth} min={1}/>
            <label htmlFor="height">Height</label>
            <input type="number" id="height" value={height} onChange={handleHeight} min={1}/>
            <label htmlFor="color">Color</label>
            <input type="color" id="color" value={color} onChange={handleColor}/>
        </form>
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor:color
        }}></div>
    </div>
}

export default Box