import React from 'react'

export default function ButtonGeneral({ text, width, listener }) {
    return (
        <div style={{ width: width }} onClick={listener}>
            <h3>{text}</h3>
        </div>
    )
}
