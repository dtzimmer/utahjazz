import React, {Component} from 'react'
import Header from "./Header";
import Footer from "./Footer";



class Home extends Component {
    render() {
        return (
            <div>
                <Header/>

                <body>
                    <section>
                    <article>
                        <h3>What will the Jazz do this offseason?</h3>
                        <p>With the NBA offseason in full swing, the Utah Jazz
                            have multiple options in front of them. On this SLC Dunk Facebook
                            Live we talk about Paul George and Lebron James and their potential
                            fit with Donovan Mitchell and the Utah Jazz. Will it happen?
                            No. But it’s fun to dream! <br/>Then we talk about the two different
                            scenarios in the draft for the Jazz. Will they trade up or will they
                            stand pat and what offseason moves do the Jazz need to make?</p>
                    </article>
                        <img src="https://cdn.vox-cdn.com/thumbor/w7Me71vzUXKfhCBzNsbf7tgr2EQ=/0x0:4221x2809/920x613/filters:focal(1707x328:2381x1002):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60044917/usa_today_10793635.0.jpg"
                             alt="Donovan Mitchell" className="responsive"/>
                    </section>
                    <section>
                        <article>
                            <h3>Utah Jazz entries to play at least eight games over two-week span</h3>
                            <p>The Utah Jazz announced today the team’s complete 2018 summer league
                                schedule. The Jazz will be the host team for the 2018 Utah Jazz Summer
                                League on July 2, 3 and 5 in downtown Salt Lake City at Vivint Smart Home
                                Arena. The team will then head to Las Vegas for the MGM Resorts NBA Summer
                                League 2018, a 12-day, 82-game event at the Thomas & Mack Center and Cox
                                Pavilion on the University of Nevada Las Vegas campus.

                                The Utah Jazz Summer League is a six-game, four-team event.
                                Teams will play each other once, with the Jazz opening against the San
                                Antonio Spurs on July 2 before playing the Memphis Grizzlies, owners of the
                                fourth overall pick in the 2018 NBA Draft, on July 3. Utah wraps up the week
                                in Salt Lake City facing the Atlanta Hawks, who own the third pick in the NBA
                                Draft, among its two other first-round selections (No. 19 and 30) on July 5.</p>
                        </article>
                        <img src="https://www.nba.com/jazz/sites/jazz/files/styles/story_main_photo/public/gettyimages-825949912_1.jpg?itok=QN5c-ci3"
                             alt="Summer League" className="responsive"/>
                    </section>
                </body>
                <Footer/>
            </div>
        )
    }
}

export default Home
