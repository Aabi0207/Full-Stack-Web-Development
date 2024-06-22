import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

    return (
        // user here takes the object passed
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </ UserContext.Provider>
    )
}

export default UserContextProvider;