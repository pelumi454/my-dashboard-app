import React from 'react'
import './emerald.css'
// import './dashboard.css'
import leusers from '../../img/img1.png'
import maleusers from '../../img/img2.png'
import femaleusers from '../../img/img3.png'
import allusers from '../../img/img4.png'
import {Link} from 'react-router-dom'

const Emerald = () => {
    return (
        
                <div className="col-6 ">
                    <div class="row dashboard-home">
                    <p className="col-4 header-title">Hello, <span className="span">Emerald</span></p>
                    <p className="col-8 dashboard-p">Welcome to your dashboard, kindly sort through the user base</p>
                    </div>
                    
                    <div class="search-container row">
                       <button type="submit" className=" col-7 searchbutton"><i class="fa fa-search"></i>find a user</button>
                    </div>
                    <div className="row">
                        <p className="col-4 mt-5 show-user">Show users</p>
                    </div>
                    <div className="row ml-5 pl-2">
                        <div className="col-md-2 mt-2">
                            <Link to='/'>
                            <img src={allusers} class="img-responsive1"></img>
                            </Link>
                        </div>
                        <div className="col-md-2 mr-3">
                            <Link to='/male'>
                            <img src={maleusers} class="img-responsive2"></img>
                             </Link>
                        </div>
                        <div className="col-md-2 mt-2">
                            <Link to='/female'>
                             <img src={femaleusers} class="img-responsive3"></img>
                             </Link>
                       
                     
                        </div>
                    </div>
                </div>
    )
}

export default Emerald; 
