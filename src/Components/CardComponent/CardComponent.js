import React from 'react'
import './CardComponent.css'

const CardComponent = (props) => {
    return (
        <div >
            <div class="card mt-5">
            <div class="card-body">
              <img src={props.item.picture.medium} className="img-thumbnail card-image"/> 
             </div>
        </div>
       
        </div>

    )
}

export default CardComponent
