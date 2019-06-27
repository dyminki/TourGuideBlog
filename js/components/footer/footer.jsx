 import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
class Footer extends Component {
  render() {
    return (
      <div>    
        <div className="social-container">
          <div>
            <p>Copyrigh &copy; 2018 DYMINKI</p>
          </div>
          <div>           
            <a className="social-container_icon" href="/">
              <FontAwesomeIcon icon={["fab", "facebook-square"]}/>
            </a>
            <a className="social-container_icon" href="/">
              <FontAwesomeIcon icon={["fab", "instagram"]}/>
            </a>
            <a className="social-container_icon" href="/">
              <FontAwesomeIcon icon={["fab", "linkedin"]}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export { Footer };