import { useState, useEffect } from "react"
import "../board/board.css"
import '../App.css'
import Row from "./Row"
import PropTypes from "prop-types";



function Board(props) {
    
    //const[newTask, setNewTask] = useState("")
    const[isActive, setisActive] = useState("false");

    const ToggleLayoutH = () => {
        setisActive(true)
    }
    const ToggleLayoutV = () => {
        setisActive(false)
    }

    
    return (
        <>  
        <div className="settings">
            <h3 className="layout">Layout:</h3>
            <button className="view-btn" onClick={ToggleLayoutH} >Horizontal</button>
            <button className="view-btn" onClick={ToggleLayoutV} >Vertical</button>
        </div>
        
        <input className="title" placeholder="Untitled Board" maxLength="25" onChange={(e) => props.setTitle(e.target.value)}></input>
        <div className={isActive ? "Board-container flex-row" : "Board-container flex-column"}>
            <Row
                row = "item item-row-A"
                header = "Went Well"           
            />
            <Row 
                row = "item item-row-B"
                header = "To Improve"
            />
            <Row 
                row = "item item-row-C"
                header = "Action Items"    
            />
        </div>
        </> 
    )     
};

Board.propTypes = {
    setTitle: PropTypes.func.isRequired,
};

export default Board