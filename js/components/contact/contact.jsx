import React from "react";
import { Instagram, Facebook, Linkedin } from 'react-feather';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="contract-container">
          <h1>contact</h1>
        </div>
        <div className="contact-text">
        <div className="social-container">
        <a href="/"> <Instagram size={20}/></a>
        <a href="/"><Facebook size={20}/></a>
        <a href="/"><Linkedin size={20}/></a>
        </div>
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
