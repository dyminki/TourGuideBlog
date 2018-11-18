import React from "react";
import { Route, Link } from "react-router-dom";

import { Post } from "./post.jsx";

class Blog extends React.Component {
  render() {
    const links = [1, 2, 3, 4, 5, 6].map((elem, i) => {
      return (
        <div
          key={i}
          className="container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="container100">
            <img src={`./images/blog/${elem}.jpg`} className="blog-img" />
            <div className="txt">
              <h2>Lorem ipsum dolorum</h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <hr />
            <div className="blog-btn blog-btn__preview">
              <Link to={`/blog/post/${i}`}>
                <span>More</span>
              </Link>
            </div>
            <hr />
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="blog-header">
          <h1>blog</h1>
        </div>
        <div className="blog-container">{links}</div>

        <Route
          path="/blog/post/:postId"
          component={props => (
            <Post data={this.state.data} propsRouter={props.match} />
          )}
        />
      </div>
    );
  }
}
export { Blog };
