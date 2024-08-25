import { Component } from "react";

import logo from "../../assets/logo.png";

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        {/* <h3>Hika Technologies PLC</h3> */}
        <img style={{ height: "200px" }} src={logo} />
      </div>
    );
  }
}
export default Logo;
