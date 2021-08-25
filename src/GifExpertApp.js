import React, { useState } from 'react' ;
import { AddCategories } from "./Componentes/AddCategories.js";
import { GifGrid } from './Componentes/GifGrid.js';

export const GifExpertApp = ()=> {

    const [categorias, setstate] = useState(['Dragon Ball']);
    //console.log(categorias);

    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategories setstate = {setstate} /> 
            <hr />
                    
            <ol>
            {
            categorias.map( category =>( 
                <GifGrid 
                    key= {category}
                    category = {category}
                 />
            ))
            }
            </ol>
            
        </div>
        
    )
}