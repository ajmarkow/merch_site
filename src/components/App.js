import React from "react";
import '../App.css';
import '../index.css';
import Header from "./Header";
import Body from "./Body";


function App() {
  const style = {
    height: '100vh',
    width:'200vh'
  };
  return (
        <React.Fragment>
          <div className='container-fluid align-items-center' style={style}>
            <Header />
            <Body />
          </div>
        </React.Fragment>
  );
}

export default App;
