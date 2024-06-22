import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userId} = useParams()
    return (
        <div className="bg-gray-400 text-white w-full h-[50px]">User: {userId}</div>
    )
}

export default User;