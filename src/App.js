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
    const toBeMoved = this.state.items[i];
    const newItems = this.state.items.filter((_, ind) => ind !== i);
    const items = [...newItems, toBeMoved];

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
