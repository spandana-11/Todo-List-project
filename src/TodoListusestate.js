import React, { useState } from "react";

function TodoListusestate() {
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });
  //    const temparr=[
  //         {
  //             text:"spandan",
  //             id:1,
  //         },
  //         {
  //             text:"nadhiya",
  //             id:2,
  //         }
  //     ]
  const [list, setList] = useState([]);

  const [editlist, setEditlist] = useState({
    id: "",
    isEditable: false,
  });
  //input value changing function
  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };

  //adding data into list

  const handlesubmit = (e) => {
    e.preventDefault();
    let newtodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newtodo]);
  };

  //handle delete function
  const handledelete = (id) => {
    const newtodosafterdeleting = list.filter((eachitem) => eachitem.id !== id);
    setList(newtodosafterdeleting);
  };

  // change edit function........
  const changeEdit = (id) => {
    setEditlist({
      ...editlist,
      id: id,
      isEditable: true,
    });
    let edibleItem = list.find((eachitem) => eachitem.id === id);
    setMessage({
      ...message,
      text: edibleItem.text,
      id: edibleItem.id,
    });
  };
  const handleedit = (e) => {
    e.preventDefault();
    let newtodos = list.map((eachitem) => {
      if (eachitem.id === editlist.id) {
        return {
          text: message.text,
          id: message.id,
        };
      } else {
        return eachitem;
      }
    });
    setList(newtodos);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="uname"
          placeholder="Enter the List items"
          value={message.text}
          onChange={changeMessage}
        />
        {editlist.isEditable ? (
          <strong>
            <button onClick={handleedit}>Edit</button>
          </strong>
        ) : (
          <strong>
            <button onClick={handlesubmit}>Add</button>
          </strong>
        )}
        <br />
        <hr />
      </form>
      <ul>
        {list.length == 0 ? (
          <h4>list is empty</h4>
        ) : (
          list.map((eachitem) => {
            const { text, id } = eachitem;
            return (
              <div>
                <h1>Hello changed</h1>
                <span>{text}</span>
                <button onClick={() => changeEdit(id)}>edit</button>
                <button onClick={() => handledelete(id)}>delete</button>
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default TodoListusestate;
