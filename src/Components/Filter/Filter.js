import React from 'react'
import './Filter.css'

const Filter = () => {
    return (
            <div class="search-container row">
                       <button type="submit" className=" col-4  filter-search"><i class="fa fa-search"></i>Find in list</button>
                       <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle filter-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Country
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                        <div className=" show-country col-3 pt-3 ml-3"><i class="fa fa-toggle-on toggle"></i>  Show Country</div>
                </div>
    )
}

export default Filter
