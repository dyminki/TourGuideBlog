import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const links = [1, 2, 3, 4, 5, 6].map((elem, i) => {
      if (this.props.propsRouter.params.postId == i) {
        return (
          <div key={i} className="post-container">
          {window.scrollTo(0, 0)}
            <div>
              <img src={`./images/blog/${elem}.jpg`} className="blog-img" />
            </div>
            <div className="txt">
              <h2>Lorem Ipsum dolorum</h2>
              <br />
              <p>
                {" "}
                Torem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <br /> <br />
              <p>
                {" "}
                Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <br /> <br />
              <p>
                {" "}
                Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <br /> <br />
              <hr />
              <div className="blog-btn">
                <Link to={`/blog/`}>
                  <span>Back</span>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        );
      }
    });
    return <div>{links}</div>;
  }
}
export { Post };
