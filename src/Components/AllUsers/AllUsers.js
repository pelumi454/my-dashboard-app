import React, { Component } from 'react'
import './AllUsers.css'
import MaleUsers from '../CardComponent/MaleUser'
import CardComponent from '../CardComponent/CardComponent'
import BaseRouter from '../../route'
import FemaleUser from '../CardComponent/FemaleUser'

class AllUsers extends Component {
    render() {

        return (
            <div className="all-users pt-3">
                
             <BaseRouter> 
                <CardComponent/>
                 <MaleUsers/>
                {/* <FemaleUser/>  */}
                 </BaseRouter> 
            </div>    
        )
    }
}

export default AllUsers






