import React, {Component} from 'react'
import './App.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <nav className="footer">
                    <a href="http://www.espn.com/nba/team/_/name/utah/utah-jazz"><button>ESPN.COM</button></a>
                    <a href="http://www.nba.com/jazz"><button>NBA.COM</button></a>
                </nav>
            </div>
        )
    }
}

export default Footer