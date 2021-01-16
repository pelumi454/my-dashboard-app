import React from 'react'
import AllUsers from '../AllUsers/AllUsers'
import Emerald from '../Emerald/Emerald'

const DashBoard = (props) => {
    return (
        <div className="dashboard">
             {props.children}
        </div>
    )
}

export default DashBoard
