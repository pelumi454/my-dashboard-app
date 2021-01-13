import React from 'react'
import './emerald.css'
// import './dashboard.css'
import leusers from '../../img/img1.png'
import maleusers from '../../img/img2.png'
import femaleusers from '../../img/img3.png'
import allusers from '../../img/img4.png'

const Emerald = () => {
    return (
                <div className="col-6 dashboard-home">
                    <div class="row">
                    <p className="col-4 ml-5 pl-4 header">Hello, <span className="span">Emerald</span></p>
                    <p className="col-8 ml-4 dashboard-p">Welcome to your dashboard, kindly sort through the user base</p>
                    </div>
                    
                    <div class="search-container row">
                       <button type="submit" className=" col-7 searchbutton"><i class="fa fa-search"></i>find a user</button>
                    </div>
                    <div className="row">
                        <p className="col-4 ml-3 mt-5">Show users</p>
                    </div>
                    <div className="row ml-5 pl-2">
                        <div className="col-md-2 mt-2">
                        <img src={allusers} class="img-responsive1"></img>
                      
                        </div>
                        <div className="col-md-2 mr-3">
                        <img src={maleusers} class="img-responsive2"></img>
                     
                        </div>
                        <div className="col-md-2 mt-2">
                        <img src={femaleusers} class="img-responsive3"></img>
                     
                        </div>
                    </div>
                </div>
    )
}

export default Emerald; 
