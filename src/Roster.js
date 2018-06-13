import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'
import Header from "./Header";

class Roster extends Component {
    render() {
        return (
            <div>
                <Header/>
            <Switch>
                <Route exact path='/roster' component={FullRoster}/>
                <Route path='/roster/:number' component={Player}/>
            </Switch>
            </div>
        )
    }
}

export default Roster
