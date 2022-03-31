import React, { useState } from "react";

function App() {
  const [item, setItem] =useState(" ")
  const [list, setList] = useState([]);
  
  function updateItem(event){
    var toDo = event.target.value;
    setItem(toDo);
    console.log(item)
  }

// My Own solution
//  function handleClick(event){
     
//     setList(list.concat(item))
//     console.log(list)
//     setItem("")
//  }

function handleClick(event){
     
    setList(prevValue =>
   { return [...prevValue, item];}
    )
 }

  function toDo(activity) {
  return (
     <li>{activity}</li>
  );
}
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={updateItem} value={item}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map(toDo=> {
          return (
           <li>{toDo}</li>
            )
           }
          )
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
