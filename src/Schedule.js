import React, {Component} from 'react'
import Header from "./Header";
import Footer from "./Footer";

class Schedule extends Component {
    render() {
        return (
            <div>
            <Header/>
                <section>
                <article>
                    <h3> Summer League Schedule</h3>
                        <ul>
                            <li>Mon, July 2 vs. San Antonio Spurs @ 7 p.m.</li>
                            <li>Tues, July 3 vs. Memphis Grizzlies @ 7 p.m.</li>
                            <li>Thurs, July 5 vs. Atlanta Hawks @ 7 p.m.</li>
                         </ul>
                    <h3>MGM Resorts NBA Summer League (Las Vegas)</h3>
                        <ul>
                            <li>Sat, July 7 vs. Portland Trail Blazers @ Noon</li>
                            <li>Sun, July 8 vs. New York Knicks @ 6 p.m.</li>
                            <li>Tue, July 10 vs. Miami Heat @ 1:30 p.m.</li>
                        </ul>
                    <h3>July 11-17 Tournament play (opponents, times and venues TBD)</h3>
                </article>
                    <img src="https://www.nba.com/jazz/sites/jazz/files/styles/story_main_photo/public/gettyimages-825949912_1.jpg?itok=QN5c-ci3"
                         alt="Summer League" className="responsive"/>
                </section>
            <Footer/>
            </div>
        )
    }
}

export default Schedule
