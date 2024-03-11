import React from 'react';

function Tag({children, color}) 
{ 
    return(
    <span
    style={{
        backgroundColor: color,
        borderRadius: '4px',
        color: '#fff',
        padding: '0.2rem 0.5rem',
        fontWeight: 'bold',
        }}
        >
    {children}
    </span>
);
    }
    

function Align({children}) 
{ 
    return(
    <span
    style={{
        textAlign: 'center',
        }}
        >
    {children}
    </span>
);
    }

export {Align, Tag};