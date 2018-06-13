import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './App.css';


class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                        <Link to='/'><button>Home</button></Link>
                        <Link to='/roster'><button>Roster</button></Link>
                        <Link to='/schedule'><button>Schedule</button></Link>
                </nav>
                <article>
                <h1>UTAH JAZZ FAN SITE</h1>
                </article>
            </div>
        )
    }
}

export default Header
