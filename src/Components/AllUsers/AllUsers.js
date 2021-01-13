import React, { Component } from 'react'
import './AllUsers.css'
import Filter from '../Filter/Filter'
import axios from 'axios'
import CardComponent from '../CardComponent/CardComponent'

class AllUsers extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            data: []
       }
   }

   componentDidMount (){
   axios.get('https://randomuser.me/api/?results=3')
   .then(res=> {
       const data = res.data.results
       console.log(data)
       this.setState({
           data: data
       })

   })
   .catch(error => {
       console.log(error)
   })
     
   }
   
    render() {

        return (
            
                <div className="col-6 all-users pt-5">
                 <div className="row">
                     <p className="allusers-p col-3 ml-2">All Users</p>
                     </div>
                     <div className="row">
                         <div className="allusers-filter col-2 ml-3">Filter By</div>
                     </div> 
                    <Filter/>
                    {
                        this.state.data.map(item => (
                            <CardComponent item = {item} />
                        ))
                    }
                    </div> 
        )
    }
}

export default AllUsers






