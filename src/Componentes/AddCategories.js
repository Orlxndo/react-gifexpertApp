import React, { useState } from 'react' ;


export const AddCategories = ({setstate}) => {
    
    const [inputValue, setinputValue] = useState('Digimon');
    
    const handleinputValue =(e)=>{
        setinputValue(e.target.value)
        //console.log(e.target);
        
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
        setstate(cat =>[inputValue,...cat]);
        setinputValue('');
        }      
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Agregar Categorias</h2>
            <h3>{inputValue}</h3>
            <input 
            type = 'text'
            value={inputValue}
            onChange= {handleinputValue}/>
        </form>
    )
}
