import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contract-container">
        <div className="contract-picture">
        </div>
        <div className="contact-text">
          <h2>Looking for contact?</h2>
          <form>
            <label>name</label>
            <input name="name" type="text" />
            <label>email</label>
            <input name="email" type="text" />
            <label>title</label>
            <input name="title" type="text" />
            <label>message</label>
            <textarea
              id="subject"
              name="msg"
              placeholder="Write something.."
              style={{ height: "200px" }}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export { Contact };
