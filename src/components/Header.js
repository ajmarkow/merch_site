import React from "react";
// import Navbar from "./NavBar";

function Header(props) {
  const HeaderStyles = {
    fontFamily:'Modak'
  }
  return(
    <div style={HeaderStyles}>
      <h1 className='display-4 text-nowrap'>The Merchandise Store</h1>
      <p>Testing Styles.</p>
    </div>
  );
};
export default Header;