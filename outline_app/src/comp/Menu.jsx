import React, {useState} from "react"
import AddCard from "./AddCard"
function Menu(){
    return(
        <>
        <header>
        <nav>
            <AddCard />
            <button className="load-button">Load </button>
            <button className="save-button">Save</button>
            <button className="save-button">New Project</button>
            <input type="text" id="search-field" placeholder="Search" />
            <button id="search-button">🔍</button>

        </nav>
        </header>
        </>
    )
}

export default Menu