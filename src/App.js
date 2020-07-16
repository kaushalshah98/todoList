import React, { Component } from "react";
import "./App.css";
import ListItems from "./components/List/list";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {
        key: "",
        value: "",
      },
      list: [],
    };
    // this.handleInput = this.handleInput.bind(this);
    // this.addItem = this.addItem.bind(this);
  }
  deleteItem = (key) => {
    const list = this.state.list.filter((item) => item.key !== key);
    this.setState({ list });
  };
  addItem = (e) => {
    e.preventDefault();
    const { newItem } = this.state;
    if (newItem.value !== "") {
      const list = [...this.state.list, newItem];
      this.setState({ list, newItem: { key: "", value: "" } });
    }
  };
  updateItem = (value, key) => {
    const { list } = this.state;
    list.forEach((item) => {
      if (item.key === key) {
        item.value = value;
      }
    });
    // list.map((item) => {
    //   if (item.key === key) {
    //     item.value = value;
    //   }
    // });
    this.setState({ list });
  };
  handleInput = (e) => {
    const value = e.target.value;
    const key = Date.now();
    this.setState({ newItem: { value, key } });
  };
  render() {
    return (
      <div className="App">
        <header>
          <form id="todo-form" onSubmit={this.addItem}>
            <input
              type="text"
              onChange={this.handleInput}
              placeholder="Type..."
              value={this.state.newItem.value}
            ></input>
            <button type="submit">ADD</button>
          </form>
        </header>
        <ListItems
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
