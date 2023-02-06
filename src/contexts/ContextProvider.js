import React, { createContext, useContext, useState} from 'react';


//we first call the function and pass it
const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification : false,
}

//now using the context
export const ContextProvider = ({children}) => {
    // we set the state for knowing if they are active
    const [activeMenu, setActiveMenu] = useState(true);

    //we set a State to enabling the clicking configuration of the icons
    const [isClicked, setIsClicked] = useState(initialState);

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    //we are using state for the sidebar component to know when to render the component based on screen size
    const [screenSize, setScreenSize] = useState(undefined)


    return (
        <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize
        }}

        >
            {children}

        </StateContext.Provider>
    )
}

//we use this active menu inside our sidebar or components\
export const useStateContext =() => useContext(StateContext)