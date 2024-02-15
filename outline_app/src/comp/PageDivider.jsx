import React from 'react';
import Outline from "./Outline_field.jsx"
import Workspace from "./Workspace_field.jsx"
import SearchField from "./Search_field.jsx"

function PageDivider(){
    return(<section className='page-divider'>
        <Outline/>
        <Workspace />
        <SearchField />
        </section>
    )
}

export default PageDivider