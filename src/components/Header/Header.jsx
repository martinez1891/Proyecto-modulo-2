import React from 'react';

import './Header.css';



const Header = (props) => {
    
    return (
        <div className= "header">
            
               
                <img className="logoMatea" src ={props.logoMatea} />
                <h3 className ="titleMatea">{props.titulo}</h3>        
            
                
                
            
        </div>
    );
};

export default Header;