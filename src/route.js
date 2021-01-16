import React from 'react';
import {Switch, Route} from 'react-router-dom'
import CardComponent from './Components/CardComponent/CardComponent'
import FemaleUser from './Components/CardComponent/FemaleUser'
import MaleUser from './Components/CardComponent/MaleUser'
import UserList from './Components/UserList/UserList'


const BaseRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={CardComponent}/>
            <Route path="/male" component={MaleUser}/>
            <Route path="/female" component={FemaleUser}/>
            <Route path="/userlist" component={UserList}/>
        </Switch>
    )
}

export default BaseRouter


