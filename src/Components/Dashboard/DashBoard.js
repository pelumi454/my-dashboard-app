import React from 'react'
import AllUsers from '../AllUsers/AllUsers'
import Emerald from '../Emerald/Emerald'

const DashBoard = () => {
    return (
        <div className="dashboard">
             <div className="row dashboard-row">
             <Emerald></Emerald>
            <AllUsers></AllUsers>
             </div>
        </div>
    )
}

export default DashBoard
