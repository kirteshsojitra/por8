import {Component} from "react";
import "./App.css";
import Activity from "./component/Activity";

class App extends Component {
  state = {
    input: "kirtesh",
    arr: [],
    id: 0,
    obj: {},
    sort: [],
    newArr: [],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  add = () => {
    let obj = {};
    obj.id = this.state.id;
    obj.name = this.state.input;
    this.state.arr.push(obj);
    this.state.id += 1;
    this.setState({id: this.state.id});
    this.setState({arr: this.state.arr});
    this.setState({input: ""});
    console.log(this.state.arr);
  };

  render() {
    return (
      <div>
        <h1 className="heading">Todo App</h1>
        <div className="main">
          <div className="inputfield">
            <input
              id="inputfield"
              onChange={this.handleChange}
              value={this.state.input}
            />
            <button onClick={this.add}>Add</button>
          </div>
        </div>
        <Activity obj={this.state} />
      </div>
    );
  }
}

export default App;
