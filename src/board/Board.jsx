import { useState } from "react"
import "../board/board.css"
import '../App.css'
import Row from "./Row"
import PropTypes from "prop-types";



function Board(props) {
// Toggle Board Horizontally or Vertically
    const[isActive, setisActive] = useState("false");
    const ToggleLayoutH = () => {
        setisActive(true)
    }
    const ToggleLayoutV = () => {
        setisActive(false)
    }

// Array of tasks
    const [taskItems, settaskItems] = useState([{task: "", category:"row A", id:"one"}, {task: "", category:"row B", id: "two"}, {task: "", category:"row C", id: "three"}]);

    const rowA = taskItems.filter((taskItem) => taskItem.category === "row A");
    const rowB = taskItems.filter((taskItem) => taskItem.category === "row B");
    const rowC = taskItems.filter((taskItem) => taskItem.category === "row C");
   

    return (
        <>  
        <div className="settings">
            <h3 className="layout">Layout:</h3>
            <button className="view-btn" onClick={ToggleLayoutH} >Horizontal</button>
            <button className="view-btn" onClick={ToggleLayoutV} >Vertical</button>
        </div>
    {/* Header */}
        <input className="title" placeholder="Untitled Board" maxLength="50" onChange={(e) => props.setTitle(e.target.value)}></input>
        <div className={isActive ? "Board-container flex-row" : "Board-container flex-column"}>
                <Row
                    row = "item item-row-A"
                    header = "Went Well"
                    category = "row A"
                    tasks = {rowA}  
                    taskItems = {taskItems}
                    settaskItems = {settaskItems}    
    
                />
                <Row 
                    row = "item item-row-B"
                    header = "To Improve"
                    category = "row B"
                    tasks = {rowB}
                    taskItems = {taskItems}
                    settaskItems = {settaskItems}  
                />
                <Row 
                    row = "item item-row-C"
                    header = "Action Items"
                    category = "row C"
                    tasks = {rowC}  
                    taskItems = {taskItems}
                    settaskItems = {settaskItems}    
                />           
        </div>
        </> 
    )     
};

Board.propTypes = {
    setTitle: PropTypes.func.isRequired,
};

export default Board