import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect( () => {
    //     fetch('https://api.github.com/users/Aabi0207')
    //     .then((res) => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
    return (
        <>
        <div className="text-center bg-gray-700 text-white p-4 text-3xl ">
            followers: {data.followers}
        </div>
        <img src={data.avatar_url} alt="" width={300}/>
        </>
    )
}

export default GitHub;

export const githubInfoLoader = async function() {
    const response = await fetch('https://api.github.com/users/Aabi0207')
    return response.json()
}