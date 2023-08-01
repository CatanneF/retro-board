import { useState } from "react";
import "../board/board.css"
import '../App.css'


function Row(props)  {
    const [taskItems, settaskItems] = useState([{task: "", status: "rowA"}]);
   
    const newItem = () => {
        settaskItems([...taskItems, { task: ""}]);
    };
    const updateItem = (userInput, index) => {
        const newActions = [...taskItems];
        newActions[index] = { task: userInput };
        settaskItems(newActions);
    };
    const deleteItem = (index) => {
        settaskItems(
            taskItems.filter((item, currentIndex) => currentIndex !== index)
        );
    };

    return (
        <div className="Row">
            <div className="Header">
                <h2>{props.header}</h2>
                <button className="add-row" onClick={newItem}>+</button>
            </div>
            {taskItems.map((item, index) => {
                const { task } = item;
                    return (
                        <div key={`action-item-${index}`} className={props.row}>
                            <textarea 
                                value={task}
                                key={item.id}
                                placeholder="Enter task here ..."
                                aria-label="Enter task here ..."
                                onChange={(e) => updateItem(e.target.value, index)}
                            />
                            <button className="arrow-btn">⇦</button>
                            <button className="deletebtn" onClick={() => deleteItem(index)}>
                                X
                            </button>
                            <button className="arrow-btn">⇨</button>
                        </div>
                    );
            })};
        </div>  
    );
};


export default Row;