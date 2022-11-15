import React from "react";
import "./Acitivity.css";

const Activity = (props) => {
  const handleDelete = (obj, id) => {
    document.getElementById(id).style.display = "none";
    obj.arr.splice(this.state.arr.indexOf(obj), 1);
    this.setState({arr: obj.arr});
    console.log(obj.arr);
  };

  const handleIsChecked = (e, id) => {
    if (document.getElementById(`${id + "k"}`).checked) {
      document.getElementById(id).style.textDecoration = "line-through";
      document.getElementById(id).style.color = "red";
    } else {
      document.getElementById(id).style.textDecoration = "none";
      document.getElementById(id).style.color = "black";
    }
  };
  return (
    <div className="list1">
      {props.obj.arr.map((todoobj) => (
        <li key={todoobj.id} id={todoobj.id} className="list_items">
          <div className="main_div">
            <div className="extra1">
              <input
                type="checkbox"
                id={todoobj.id + "k"}
                onChange={(e) => handleIsChecked(e, todoobj.id)}
              />
            </div>
            <div className="extra2"> {todoobj.name}</div>
            <div className="extra3">
              <button onClick={() => handleDelete(todoobj, todoobj.id)}>
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Activity;
