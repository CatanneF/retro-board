import { v4 as uuidv4 } from 'uuid';
import "../board/board.css"
import '../App.css'


function Row({tasks, taskItems, settaskItems, category, header, row})  {
    
    
    const newItem = () => {
        const newTask = { task: "", category: category, id: ""};
        newTask.id = uuidv4();
        settaskItems([...taskItems, newTask]);    
    }; 
   
    const addText = (userInput, item) => {
        const updateItems = taskItems.map((taskItem) => {
            if (taskItem.id === item.id) {
            taskItem = { task: userInput, category: item.category, id: item.id };     
        };
        return taskItem;   
        });
        settaskItems(updateItems);
    };

    const deleteItem = (item) => {
        console.log(item.id)
        const toDelete = item.id;
        const newTaskItems = taskItems.filter(currentId => !toDelete.includes( currentId.id ));
        console.log(newTaskItems)
        settaskItems(newTaskItems);
       
    }; 
    

    const moveItemLeft = (item) => {
        if (item.category === "row A") {
            // const newTask = {...item};
            // newTask.category = "row C";
            //  console.log(item)
            const updateItems = taskItems.map((taskItem) => {
                if (taskItem.id === item.id) {
                    taskItem.category = "row C"; 
                     
                }
                // const itemIndex = taskItems.indexOf(taskItem);
                // const toIndex = taskItems.length -1
                // const getItem = taskItems.splice(itemIndex, 1)[0];
                // taskItems.splice(toIndex, 0, getItem);
                  
                return taskItem;   
            })
            settaskItems(updateItems);
        }else if (item.category === "row B") {
            const updateItems = taskItems.map((taskItem) => {
                if (taskItem.id === item.id) {
                    taskItem.category = "row A";
                }; 
                return taskItem;   
            });
            settaskItems(updateItems);
        }else {
            const updateItems = taskItems.map((taskItem) => {
                if (taskItem.id === item.id) {
                    taskItem.category = "row B";
                }; 
                return taskItem;   
            });
            settaskItems(updateItems);
        };        
    };

    const moveItemRight = (item) => {   
        if (item.category === "row A") {
            const updateItems = taskItems.map((taskItem) => {
                if (taskItem.id === item.id) {
                    taskItem.category = "row B";
                }; 
                return taskItem;   
            });
            settaskItems(updateItems);
        }else if (item.category === "row B") {
            const updateItems = taskItems.map((taskItem) => {
                if (taskItem.id === item.id) {
                    taskItem.category = "row C";
                    return taskItem
                }; 
                return taskItem;   
            });
            settaskItems(updateItems);
        }else {
            const updateItems = taskItems.map((taskItem) => {
                if (taskItem.id === item.id) {
                    taskItem.category = "row A";
                }; 
                return taskItem;   
            });
           settaskItems(updateItems);
        };  
    };


    return (
        <div className="Row">
            <div className="Header">
                <h2>{header}</h2>
                <button className="add-row" onClick={newItem}>+</button>
            </div>
            {tasks && tasks.map((item, index) => {
                const { task } = item;
                    return (  
                        <div key={`action-item-${index}`} className={row}>
                            <textarea 
                                value={task}
                                key={item.id}
                                category={header}
                                placeholder="Enter task here ..."
                                aria-label="Enter task here ..."
                                onChange={(e) => addText(e.target.value, item)}
                            />
                            <button className="arrow-btn" onClick={() => moveItemLeft(item)}>⇦</button>
                            <button className="deletebtn" onClick={() => deleteItem(item)}>X</button>
                            <button className="arrow-btn" onClick={() => moveItemRight(item)}>⇨</button>
                        </div>    
                    )
            })}
        </div>  
    );
};


export default Row;