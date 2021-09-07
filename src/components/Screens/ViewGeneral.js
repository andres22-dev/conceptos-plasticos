import React, { useState } from 'react'


export default function ViewGeneral(props) {
    const [screen, setScreen] = useState("initial");
    return (
        <div>
            {props.children}
        </div>
    )
}
