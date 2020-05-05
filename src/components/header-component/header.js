
import React from "react";

const styles = {
  jumbotron: {
    height:300,
    clear: "both",
    paddingTop: 120,
    textAlign: "center",
    background: `linear-gradient(to right bottom, #790970, #00d4ff)`,
    color: "#0c021c",
    
    
  }

}

const Header = ({ children }) => (
    <div
      style={styles.jumbotron}
      className="jumbotron"
    >
    {children}
      </div>
    
  );

  export default Header;