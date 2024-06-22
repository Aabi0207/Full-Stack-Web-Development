import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext)

    return (
        <div>
            {user?`Welcome ${user.password}`: "please Login!"}
        </div>
    )
}

export default Profile;