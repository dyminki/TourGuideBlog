import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header" data-aos="fade"
        data-aos-duration="3000">
          <div data-aos="fade-up"
          data-aos-duration="3000">
            <h1>
              <span className="header-span">
                Hi, My name is  
              </span>
              John Doe
            </h1>
            <h1>
              <span className="header-span">
              and I'm  
              </span>
              tour guide in Japan
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export { Header };