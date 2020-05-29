import React, { Component } from 'react';
import { Route, NavLink, HashRouter, BrowserRouter, Switch } from 'react-router-dom'
import About from './Components/About'
import Blog from './Components/Blog'
import Poem from './Components/Poem'
import Contact from './Components/Contact'
import Common from './Components/Common'
class App extends Component {



    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="w3-bar w3-black">
                        <a href="https://www.facebook.com/mohitjaincoolmj/" className="w3-bar-item w3-button"><i className="fa fa-facebook-official"></i></a>
                        <a href="https://www.instagram.com/jeny_memories/" className="w3-bar-item w3-button"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.twitter.com" className="w3-bar-item w3-button"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.linkedin.com" className="w3-bar-item w3-button"><i className="fa fa-linkedin"></i></a>

                        <div className="nav-bar">
                            <NavLink className="nav-links" to="/contact">Contact Us</NavLink>
                            <NavLink className="nav-links" to="/blog">Blogs</NavLink>
                            <NavLink className="nav-links" to="/Poems">Poems</NavLink>
                            <NavLink className=" nav-links" to="/">Home</NavLink>
                        </div>
                    </div>

                    <Common></Common>

                    <div className="links">
                        <Route exact path="/" component={About} />
                        <Route exact path="/poems" component={Poem }  />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/contact" component={Contact} />
                    </div>


                </BrowserRouter>
            </div >
        )
    }

}

export default App;