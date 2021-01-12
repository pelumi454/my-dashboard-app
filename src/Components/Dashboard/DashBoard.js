import React from 'react'
import './dashboard.css'
import leusers from '../../img/img1.png'
import maleusers from '../../img/img2.png'
import femaleusers from '../../img/img3.png'
import allusers from '../../img/img4.png'

const DashBoard = () => {
    return (
        <div className="dashboard">
            <div className="row dashboard-row">
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
                <div className="col-6 all-users">
                    <div className="row">
                    <p className="allusers-p col-3">All Users</p>
                    </div>
                    <div className="row">
                    <p className="filter col-2">Filter By</p>
                    </div> 
                    <div class="search-container row">
                       <button type="submit" className=" col-4 ml-5  searchbutton2"><i class="fa fa-search"></i>find a user</button>
                       <select class="col-4 all-select form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DashBoard; 
