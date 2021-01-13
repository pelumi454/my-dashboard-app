import React from 'react'
import './CardComponent.css'

const CardComponent = (props) => {
    return (
        <div >
            <div class="card mt-5">
            <div class="card-body">
               {props.item.name.first}
              <img src={props.item.picture.medium}/> 
             </div>
        </div>
           {/* {}  */}
        </div>
    )
}

export default CardComponent
