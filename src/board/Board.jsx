import { useState } from "react"
import "../board/board.css"
import '../App.css'
import RowA from "./RowA"
import RowB from "./RowB"
import RowC from "./RowC"
import PropTypes from "prop-types";



function Board(props) {


    const[newTask, setNewTask] = useState("")
    //const[status, setStatus] = useState("")
    const[allItems, setAllItems] = useState(([{task: "", status: ""}]))

    const listAllItems = () => {
        setAllItems([...allItems, { task: {newTask}, status: {status}}])
    };



    

    const [actionItems, setActionItems] = useState([{task: ""}]);
    const newItemA = () => {
        setActionItems([...actionItems, { task: ""}]);
    };

    const updateStatus=(id,newStatus)=>{
        let itemsList = allItems;
        itemsList = itemsList.map(item => {
            if(item.id===id){
                console.log('in here')
                item.status = newStatus;
            }
        return item
        })
        setAllItems(itemsList)
    }
  

    
    return (
        <>  
        <input className="title" placeholder="Untitled Board" maxLength="25" onChange={(e) => props.setTitle(e.target.value)}></input>
           <div className="Board-container">
          <RowA
            row = "item item-row-A"
            header = "Went Well"
            setNewTask = {setNewTask}
            newTask = {newTask}
            allItems = {allItems}
            updateStatus = {updateStatus}
        />
         <RowB 
            row = "item item-row-B"
            header = "To Improve"
            setNewTask= {setNewTask}
            newTask = {newTask}
            allItems = {allItems}
            updateStatus = {updateStatus}
           />
          <RowC 
            row = "item item-row-C"
            header = "Action Items"    
            setNewTask = {setNewTask}
            allItems = {allItems}
            setItems = {setItems}
            updateStatus = {updateStatus}
            newTask = {newTask}
            />
       </div>
       </> 
    
            
        //    {actionItems.map((item, index) => {
        //         const { task } = item;
        //         return (
        //             <>
        //             <div className="Row">
        //                 <div className="Header">
        //                     <h2>Went Welllllll</h2>
        //                     <button className="add-row" onClick={newItemA}>+</button>
        //                 </div>
        //                 <div key={`action-item-${index}`} className="item item-row-A">
        //                     <input
        //                         value={task}
        //                         placeholder="Enter task here ..."
        //                         aria-label="Enter task here ..."
        //                         onChange={(e) => updateItem(e.target.value, index)}
        //                     />
        //                     <button onClick={(addToC)}>left</button>
        //                     <button className="btn col s2" onClick={() => deleteItem(index)}>
        //                         X
        //                     </button>
        //                     <button onClick={(addToB)}>right</button>
        //                 </div>
        //             </div>
        //             <div className="Row">
        //                 <div className="Header">
        //                     <h2>To Improve</h2>
        //                     <button className="add-row" onClick={newItemB}>+</button>
        //                 </div>
        //                 <div key={`action-item-${index}`} className="item item-row-B">
        //                     <input
        //                         value={task}
        //                         placeholder="Enter task here ..."
        //                         aria-label="Enter task here ..."
        //                         onChange={(e) => updateItem(e.target.value, index)}
        //                     />
        //                     <button className="btn col s2" onClick={() => deleteItem(index)}>
        //                         X
        //                     </button>
        //                 </div>
        //             </div>
        //             <div className="Row">
        //                 <div className="Header">
        //                     <h2>Action Items</h2>
        //                     <button className="add-row" onClick={newItemC}>+</button>
        //                 </div>
        //                 <div key={`action-item-${index}`} className="item item-row-C">
        //                     <input
        //                         value={task}
        //                         placeholder="Enter task here ..."
        //                         aria-label="Enter task here ..."
        //                         onChange={(e) => updateItem(e.target.value, index)}
        //                     />
        //                     <button className="btn col s2" onClick={() => deleteItem(index)}>
        //                         X
        //                     </button>
        //                 </div>
        //             </div>
                 
                

      )

     
}

Board.propTypes = {
    setTitle: PropTypes.func.isRequired
};

export default Board