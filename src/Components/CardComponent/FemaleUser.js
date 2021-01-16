import React, { Component } from 'react'
import axios from 'axios'
import Filter from '../Filter/Filter'
import './CardComponent.css'

class CardComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: []
        }
    }
 
    componentDidMount (){
    axios.get('https://randomuser.me/api/?gender=female&results=3')
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
            
            <div >
            <div className="row">
                <p className="allusers-p col-3 ml-2">Female Users</p>
                </div>
                <div className="row">
                    <div className="allusers-filter col-2 ml-3">Filter By</div>
                </div> 
               <Filter/>
               {
                   this.state.data.map(item => (
                    <div class="card mt-4 ml-2 info card border-0 shadow-sm card-details">
                    <div class="row">
                        <div class="card-img col-2 ml-4">
                        <img src={item.picture.medium} className="img-card mt-3"/> 
                        </div>
                        <div class="ml-4 mt-3 card-details">
                         <strong className="mr-3 card-name">{item.name.first} {item.name.last}</strong><br/>
                         <em class="card-info">{item.location.street.number} {item.location.street.name},{item.location.city}{item.location.state}</em>
                         <div class="row-info card-info">
                        <span>
                            <i class="fa fa-envelope white mr-2" arial-hidden="true"></i>
                        </span>
                        {item.email}
                        <span>
                            <i class="fa fa-phone white ml-3" arial-hidden="true"></i>
                        </span>
                        {item.phone}
                        <span>
                            <button className="ml-2 card-button"><i class="fa fa-arrow-right"></i></button>
                        </span>
                         </div>
                        </div>
                       
                         
                         
                     </div>
                     
                    </div>
                    
                    
                     
                  ))
               }
               </div> 

        )
        
    }
}

export default CardComponent

// https://randomuser.me/api/?results=3

