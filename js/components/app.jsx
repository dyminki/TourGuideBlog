import React from "react";
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faFacebookSquare, faInstagram, faLinkedin)

import { Home } from "./home/home.jsx";
import { About } from "./about/about.jsx";
import { Blog } from "./blog/blog.jsx";
import { Post } from "./blog/post.jsx";
import { Contact } from "./contact/contact.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <div>
          <div className="container-nav">
            <div>
              <NavLink replace exact to="/" activeClassName="activeStyle">
                <span className="logo">j.doe</span>
              </NavLink>
            </div>
            <ul>
              <li>
                <NavLink replace exact to="/" activeClassName="activeStyle">
                  <span className="menu">main</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  replace
                  exact
                  to="/about"
                  activeClassName="activeStyle"
                >
                  <span className="menu">about</span>
                </NavLink>
              </li>
              <li>
                <NavLink replace exact to="/blog" activeClassName="activeStyle">
                  <span className="menu">blog</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  replace
                  exact
                  to="/contact"
                  activeClassName="activeStyle"
                >
                  <span className="menu">contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route
              path="/blog/post/:postId"
              component={props => <Post propsRouter={props.match} />}
            />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
export { App };