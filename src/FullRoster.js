import React from 'react'
import PlayerAPI from './Api'
import { Link } from 'react-router-dom'
import Footer from "./Footer";

const FullRoster = () => (
    <div>
        <section>
        <article>
            <h3>Utah Jazz Roster 2018-2019</h3>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
        </article>
            <img src="https://clutchpoints.com/wp-content/uploads/2018/03/Rudy-Gobert-Donovan-Mitchell-Thabo-Sefolosha-Joe-Ingles-Ricky-Rubio.jpg"
                 alt="Players" className="responsive"/>
        </section>
        <Footer/>
    </div>
)

export default FullRoster