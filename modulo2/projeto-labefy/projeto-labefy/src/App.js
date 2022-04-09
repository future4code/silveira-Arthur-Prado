import React from "react";
import styled from "styled-components";
import axios from "axios";
import NovaPlaylist from "./components/NovaPlaylist";



class App extends React.Component {
  state = {
    
  };

  render() {
    return (
      <div>
        <NovaPlaylist 
        />
      </div>
    );
  }
}

export default App;
