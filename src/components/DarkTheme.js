import React, { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import "./DarkTheme.css"

const DarkTheme = ({themp}) => {

    
 
    const [theme, setTheme] = useState(themp);
 const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);



    return (
        <div className={`App ${theme}`}>
            <DarkModeSwitch className='switch'
          style={{ marginBottom: '2rem' }}
         checked={theme}
         onChange={toggleTheme}
        size={80} />

           

        </div>
    )
}

export default DarkTheme