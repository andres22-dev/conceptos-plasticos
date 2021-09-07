import React from 'react'
import ButtonGeneral from '../Elements/ButtonGeneral';
const buttons = ['Bienvenido', 'Recicladores', 'Asociaciones', 'Super Usuario'];
// buttons = {'Bienvenido':'HomeInfo'}
export default function Home(props) {
    return (
        <div>
            <div> <h1>Conceptos Plasticos </h1></div>
            <div className="layout__menu">
                {
                    buttons.map(btn => {
                        return (<ButtonGeneral text={btn} width="100%" listener={() => props.changeView()} />)
                    })
                }
            </div>
        </div>
    )
}
