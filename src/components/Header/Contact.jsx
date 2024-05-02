import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:higa6038@gmail.com">
          <AiFillMail />
          <span>higa6038@gmail.com</span>
        </a>

        <a href="tel:+251967436185">
          <AiFillPhone />
          <span>+251967436185</span>
        </a>
        <a href="tel:+251930605974">
          <AiFillPhone />
          <span>+251930605974</span>
        </a>
      </div>
    );
  }
}

export default Contact;
