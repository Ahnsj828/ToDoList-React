import { useState, useRef, useContext } from "react";
import "./TodoEditor.css";

const TodoEditor = () => {
  return (
    <div className="TodoEitor">
      <h4>새로운 할일 작성하기🖋✏✒🖋🖊🖌🖍</h4>
      <div className="editor_wrapper">
        <input placeholder="보자보자.. 할일이 뭐더라.." />
        <button>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
