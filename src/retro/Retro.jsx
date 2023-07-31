import { useState } from "react"
import Navbar from "../navbar/Navbar"
import Board from "../board/Board"

function Retroboard() {

    const[title, setTitle] = useState("");

    return(
        <>
            <Navbar 
                title={title}
            />
            <Board 
                setTitle={setTitle}
            />   
        </>
    )

}

export default Retroboard