import React, { Component } from "react";
import Story from "./components/Story";
import StoryList from "./components/StoryList";
import "./App.css";
const it = [...Array(3).keys()];
const items = it.map(item => ({
  id: item,
  url: `https://loremflickr.com/150/150?random=${item}`
}));

class App extends Component {
  state = {
    items
  };
  handleClick = i => {
    const [first, ...rest] = this.state.items;
    const items = [...rest, first];

    this.setState({
      items
    });
  };
  render() {
    return (
      <div className="App">
        <StoryList items={this.state.items} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
