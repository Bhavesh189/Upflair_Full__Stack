import React, { useEffect } from 'react'
import { useState } from 'react';

const Practice = () => {

    const [x, setX] = useState(1);
    console.log(x)

    // useEffect(() => {

    //     const y = setInterval(() => {
    //         setX(x=>x+1);
    //         if(x==5) clearInterval(y);
    //     }, 1000);
    // }, []);

    // const [n, setN] = useState({
    //     name: "Bhavesh"
    // });

    // console.log(n)

    // const [c, setClick] = useState("y");

    return (
        <>
            {/* <h1>{n.name}</h1>

            <button onClick={() => {
                n.name = "Infinity";
                setClick("AA")
            }}>
                Change
            </button> */}
        </>
    );

}

export default Practice