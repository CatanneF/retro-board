import { useState } from "react";
import "../board/board.css"
import '../App.css'
import PropTypes from "prop-types";



function RowC(props)  {
    const [actionItems, setActionItems] = useState([{task: "", status: "rowC"}]);
   
    const newItem = () => {
        setActionItems([...actionItems, { task: "", status: "rowC"}]);
    };
    const updateItem = (userInput, index) => {
        props.setNewTask(userInput);
        const newActions = [...actionItems];
        newActions[index] = { task: userInput };
        setActionItems(newActions);
    };
    const deleteItem = (index) => {
        setActionItems(
            actionItems.filter((item, currentIndex) => currentIndex !== index)
        );
    };

    // const resizeTextbox = (e) => {
    //     textarea.style.height = "auto";
    //     let boxHeight = e.target.scrollHeight;
    //     textarea.style.height = `${boxHeight}px`
    // }; 

    return (
        <div className="Row">
            <div className="Header">
                <h2>{props.header}</h2>
                <button className="add-row" onClick={newItem}>+</button>
            </div>
            {actionItems.map((item, index) => {
                const { task } = item;
                if(item && item.status==='RowC')
                    return (
                        <div key={`action-item-${index}`} className={props.row}>
                            <textarea 
                                value={task}
                                key={item.id}
                                placeholder="Enter task here ..."
                                aria-label="Enter task here ..."
                                onChange={(e) => updateItem(e.target.value, index)}
                                
                            />
                            <button onClick={()=>{updateStatus(newTask.id,'RowB')}}>L</button>
                            <button className="deletebtn" onClick={() => deleteItem(index)}>
                                X
                            </button>
                            <button onClick={()=>{updateStatus(newTask.id,'RowA')}}>R</button>
                        </div>

                    )
            })}
        </div>

        
       
    )

};

RowC.propTypes = {
    setNewTask: PropTypes.func.isRequired
}

export default RowC;